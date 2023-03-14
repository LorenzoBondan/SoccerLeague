package lorenzo.projects.soccerleague.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lorenzo.projects.soccerleague.dto.TeamDTO;
import lorenzo.projects.soccerleague.services.TeamService;

@RestController
@RequestMapping(value = "/teams")
public class TeamResource {

	@Autowired
	private TeamService service;
	
	@GetMapping(value = "/{serie}")
	public ResponseEntity<Page<TeamDTO>> findTeamBySerie(Pageable pageable, @PathVariable Character serie){		
		Page<TeamDTO> list = service.findTeamBySerie(pageable, serie);	
		return ResponseEntity.ok().body(list);
	}
	
	@GetMapping(value = "/team/{id}")
	public ResponseEntity<TeamDTO> findById(@PathVariable Long id) {
		TeamDTO dto = service.findById(id);	
		return ResponseEntity.ok().body(dto);
	}
	
	@PutMapping(value = "/team/{id}")
	public ResponseEntity<TeamDTO> update(@PathVariable Long id, @RequestBody TeamDTO dto) {
		dto = service.update(id, dto);
		return ResponseEntity.ok().body(dto);
	}
}
