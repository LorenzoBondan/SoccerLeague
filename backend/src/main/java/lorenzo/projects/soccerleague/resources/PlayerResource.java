package lorenzo.projects.soccerleague.resources;

import java.net.URI;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;


import lorenzo.projects.soccerleague.dto.PlayerDTO;
import lorenzo.projects.soccerleague.services.PlayerService;

@RestController
@RequestMapping(value = "/players")
public class PlayerResource {

	@Autowired
	private PlayerService service;
	
	@GetMapping
	public ResponseEntity<Page<PlayerDTO>> findAll(Pageable pageable) {
		Page<PlayerDTO> list = service.findAllPaged(pageable);	
		return ResponseEntity.ok().body(list);
	}
	
	@PostMapping
	public ResponseEntity<PlayerDTO> insert (@Valid @RequestBody PlayerDTO dto) {
		dto = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(dto.getId()).toUri();
		return ResponseEntity.created(uri).body(dto);	
	}
	
	@PutMapping(value = "/{id}")
	public ResponseEntity<PlayerDTO> update(@PathVariable Long id, @Valid @RequestBody PlayerDTO dto)	{
		dto = service.update(id, dto);
		return ResponseEntity.ok().body(dto);
	}
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<PlayerDTO> delete(@PathVariable Long id)	{
		service.delete(id);
		return ResponseEntity.noContent().build(); 
	}
}
