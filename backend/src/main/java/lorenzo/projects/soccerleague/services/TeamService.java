package lorenzo.projects.soccerleague.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lorenzo.projects.soccerleague.dto.TeamDTO;
import lorenzo.projects.soccerleague.entities.Team;
import lorenzo.projects.soccerleague.repositories.TeamRepository;

@Service
public class TeamService {
	
	@Autowired
	private TeamRepository repository;

	@Transactional(readOnly = true)
	public Page<TeamDTO> findTeamBySerie(Pageable pageable, Character serie) {
		Page<Team> list = repository.findTeamBySerie(pageable, serie);
		return list.map(x -> new TeamDTO(x));
	}
}
