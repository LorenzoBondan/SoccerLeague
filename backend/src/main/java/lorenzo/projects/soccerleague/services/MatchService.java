package lorenzo.projects.soccerleague.services;

import java.util.HashSet;
import java.util.Random;
import java.util.Set;

import javax.persistence.EntityNotFoundException;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lorenzo.projects.soccerleague.dto.MatchDTO;
import lorenzo.projects.soccerleague.entities.Match;
import lorenzo.projects.soccerleague.entities.Team;
import lorenzo.projects.soccerleague.repositories.MatchRepository;
import lorenzo.projects.soccerleague.repositories.TeamRepository;
import lorenzo.projects.soccerleague.services.exceptions.ResourceNotFoundException;

@Service
public class MatchService {

	@Autowired
	private MatchRepository repository;
	
	@Autowired
	private TeamRepository teamRepository;
	
	@Transactional(readOnly = true)
	public Page<MatchDTO> findAllPaged(Pageable pageable) {
		Page<Match> list = repository.findAll(pageable);
		return list.map(x -> new MatchDTO(x));
	}
	
	@Transactional
	public MatchDTO insert(MatchDTO dto) {
		Match entity = new Match();
		copyDtoToEntity(dto, entity);
		entity = repository.save(entity);
		return new MatchDTO(entity);
	}
	
	@Transactional
	public MatchDTO update(Long id, MatchDTO dto) {
		try {
			Match entity = repository.getOne(id);
			copyDtoToEntity(dto, entity);
			entity = repository.save(entity);
			return new MatchDTO(entity);
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Id not found " + id);
		}
	}
	
	
	private void copyDtoToEntity(MatchDTO dto, Match entity) {
		entity.setHomeTeam(teamRepository.getOne(dto.getHomeTeamId()));
		entity.setHomeTeamGoals(dto.getHomeTeamGoals());
		entity.setAwayTeam(teamRepository.getOne(dto.getAwayTeamId()));
		entity.setAwayTeamGoals(dto.getAwayTeamGoals());
	}
	
	@Transactional
	public @Valid MatchDTO insertRandomMatches(MatchDTO dto) {
		Match entity = new Match();
		generateRandomMatches(dto, entity);
		entity = repository.save(entity);
		return dto;
	}
	
	public Set<Long> generatedIds = new HashSet<>();
	
	private void generateRandomMatches(MatchDTO dto, Match entity) {
			Random random = new Random();
			
			dto.setHomeTeamId(random.nextLong(21));
			while(dto.getHomeTeamId() == 0 || generatedIds.contains(dto.getHomeTeamId())) {
				dto.setHomeTeamId(random.nextLong(21));
			}
			
			generatedIds.add(dto.getHomeTeamId());
			
			dto.setHomeTeamGoals(random.nextInt(4));
			
			dto.setAwayTeamId(random.nextLong(21));
			while(dto.getAwayTeamId() == 0 || generatedIds.contains(dto.getAwayTeamId())) {
				dto.setAwayTeamId(random.nextLong(21));
			}
			
			generatedIds.add(dto.getAwayTeamId());
			
			dto.setAwayTeamGoals(random.nextInt(4));
			
			//----
			
			entity.setHomeTeam(teamRepository.getOne(dto.getHomeTeamId()));
			entity.setHomeTeamGoals(dto.getHomeTeamGoals());
			entity.setAwayTeam(teamRepository.getOne(dto.getAwayTeamId()));
			entity.setAwayTeamGoals(dto.getAwayTeamGoals());
			
			if(generatedIds.size() == 20) {
				generatedIds.clear();
			}
			
			updateTable(dto.getHomeTeamId(), dto.getHomeTeamGoals(), dto.getAwayTeamId(), dto.getAwayTeamGoals());
		}
	
	private void updateTable(Long homeTeamId, Integer homeTeamGoalsScored, Long awayTeamId, Integer awayTeamGoalsScored) {
		Team homeTeam = teamRepository.getOne(homeTeamId);
		Team awayTeam = teamRepository.getOne(awayTeamId);
		
		homeTeam.setGames(homeTeam.getGames() + 1);
		awayTeam.setGames(awayTeam.getGames() + 1);
		
		homeTeam.setGoalsScored(homeTeam.getGoalsScored() + homeTeamGoalsScored);
		awayTeam.setGoalsScored(awayTeam.getGoalsScored() + awayTeamGoalsScored);
		
		homeTeam.setGoalsConceded(homeTeam.getGoalsConceded() + awayTeamGoalsScored);
		awayTeam.setGoalsConceded(awayTeam.getGoalsConceded() + homeTeamGoalsScored);
		
		if(homeTeamGoalsScored > awayTeamGoalsScored) {
			homeTeam.setVictories(homeTeam.getVictories() + 1);
			awayTeam.setDefeats(awayTeam.getDefeats() + 1);
			
			homeTeam.setPoints(homeTeam.getPoints() + 3);
		}
		else if(awayTeamGoalsScored > homeTeamGoalsScored) {
			awayTeam.setVictories(awayTeam.getVictories() + 1);
			homeTeam.setDefeats(homeTeam.getDefeats() + 1);
			
			awayTeam.setPoints(awayTeam.getPoints() + 3);
		}
		else {
			homeTeam.setDraws(homeTeam.getDraws() + 1);
			awayTeam.setDraws(awayTeam.getDraws() + 1);
			
			homeTeam.setPoints(homeTeam.getPoints() + 1);
			awayTeam.setPoints(awayTeam.getPoints() + 1);
		}
		
		teamRepository.save(homeTeam);
		teamRepository.save(awayTeam);
	}
	
	}

