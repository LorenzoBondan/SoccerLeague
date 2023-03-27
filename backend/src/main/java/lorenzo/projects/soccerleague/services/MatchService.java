package lorenzo.projects.soccerleague.services;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lorenzo.projects.soccerleague.dto.MatchDTO;
import lorenzo.projects.soccerleague.entities.Match;
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
}
