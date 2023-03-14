package lorenzo.projects.soccerleague.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lorenzo.projects.soccerleague.dto.StadiumDTO;
import lorenzo.projects.soccerleague.entities.Stadium;
import lorenzo.projects.soccerleague.repositories.StadiumRepository;

@Service
public class StadiumService {
	
	@Autowired
	private StadiumRepository repository;

	@Transactional(readOnly = true)
	public Page<StadiumDTO> findAllPaged(Pageable pageable) {
		Page<Stadium> list = repository.findAllByCapacity(pageable);
		return list.map(x -> new StadiumDTO(x, x.getTeams()));
	}
}
