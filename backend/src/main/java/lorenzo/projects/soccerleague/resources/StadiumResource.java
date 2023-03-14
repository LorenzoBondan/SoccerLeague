package lorenzo.projects.soccerleague.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lorenzo.projects.soccerleague.dto.StadiumDTO;
import lorenzo.projects.soccerleague.services.StadiumService;

@RestController
@RequestMapping(value = "/stadiums")
public class StadiumResource {
	
	@Autowired
	private StadiumService service;
	
	@GetMapping
	public ResponseEntity<Page<StadiumDTO>> findAll(Pageable pageable)
	{		
		Page<StadiumDTO> list = service.findAllPaged(pageable);	
		return ResponseEntity.ok().body(list);
	}

}
