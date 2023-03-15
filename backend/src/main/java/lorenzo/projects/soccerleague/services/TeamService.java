package lorenzo.projects.soccerleague.services;

import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lorenzo.projects.soccerleague.dto.TeamDTO;
import lorenzo.projects.soccerleague.entities.Team;
import lorenzo.projects.soccerleague.repositories.TeamRepository;
import lorenzo.projects.soccerleague.services.exceptions.ResourceNotFoundException;

@Service
public class TeamService {
	
	@Autowired
	private TeamRepository repository;

	@Transactional(readOnly = true)
	public Page<TeamDTO> findTeamBySerie(Pageable pageable, Character serie) {
		Page<Team> list = repository.findTeamBySerie(pageable, serie);
		return list.map(x -> new TeamDTO(x, x.getPlayers()));
	}
	
	@Transactional(readOnly = true)
	public TeamDTO findById(Long id) {
		Optional<Team> obj = repository.findById(id);
		Team entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found."));
		return new TeamDTO(entity);
	}
	
	@Transactional
	public TeamDTO update(Long id, TeamDTO dto) {
		try {
			Team entity = repository.getOne(id);
			
			entity.setInternationalCups(dto.getContinentalCups());
			entity.setContinentalCups(dto.getContinentalCups());
			entity.setNationalCups(dto.getNationalCups());
			entity.setNationalLeagues(dto.getNationalLeagues());
			entity.setMembers(dto.getMembers());
			entity.setSerie(dto.getSerie());
			
			entity = repository.save(entity);
			return new TeamDTO(entity);
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Id not found " + id);
		}
	}
}
