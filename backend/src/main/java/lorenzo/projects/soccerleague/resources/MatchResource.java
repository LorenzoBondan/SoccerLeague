package lorenzo.projects.soccerleague.resources;

import java.net.URI;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;


import lorenzo.projects.soccerleague.dto.MatchDTO;
import lorenzo.projects.soccerleague.services.MatchService;

@RestController
@RequestMapping(value = "/matches")
public class MatchResource {

	@Autowired
	private MatchService service;
	
	@GetMapping
	public ResponseEntity<Page<MatchDTO>> findAll(Pageable pageable) {
		Page<MatchDTO> list = service.findAllPaged(pageable);	
		return ResponseEntity.ok().body(list);
	}
	
	@PostMapping
	public ResponseEntity<MatchDTO> insert (@Valid @RequestBody MatchDTO dto) {
		dto = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(dto.getId()).toUri();
		return ResponseEntity.created(uri).body(dto);	
	}
	
	@PutMapping(value = "/{id}")
	public ResponseEntity<MatchDTO> update(@PathVariable Long id, @Valid @RequestBody MatchDTO dto)	{
		dto = service.update(id, dto);
		return ResponseEntity.ok().body(dto);
	}
	
	@PostMapping(value = "/random")
	public void insertRandomMatches (@Valid @RequestBody MatchDTO dto) {
		for(Integer i = 0; i < 10; i++) {
			dto = service.insertRandomMatches(dto);
		}

		
		return;	
	}
}
