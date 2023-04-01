package lorenzo.projects.soccerleague.services;

import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lorenzo.projects.soccerleague.dto.PlayerDTO;
import lorenzo.projects.soccerleague.entities.Player;
import lorenzo.projects.soccerleague.repositories.PlayerRepository;
import lorenzo.projects.soccerleague.repositories.TeamRepository;
import lorenzo.projects.soccerleague.services.exceptions.DataBaseException;
import lorenzo.projects.soccerleague.services.exceptions.ResourceNotFoundException;

@Service
public class PlayerService {

	@Autowired
	private PlayerRepository repository;
	
	@Autowired
	private TeamRepository teamRepository;
	
	@Transactional(readOnly = true)
	public Page<PlayerDTO> findAllPaged(Pageable pageable) {
		Page<Player> list = repository.findAll(pageable);
		return list.map(x -> new PlayerDTO(x));
	}
	
	@Transactional(readOnly = true)
	public PlayerDTO findById(Long id) {
		Optional<Player> obj = repository.findById(id);
		Player entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found."));
		return new PlayerDTO(entity);
	}
	
	@Transactional
	public PlayerDTO insert(PlayerDTO dto) {
		Player entity = new Player();
		copyDtoToEntity(dto, entity);
		entity = repository.save(entity);
		return new PlayerDTO(entity);
	}
	
	@Transactional
	public PlayerDTO update(Long id, PlayerDTO dto) {
		try {
			Player entity = repository.getOne(id);
			copyDtoToEntity(dto, entity);
			entity = repository.save(entity);
			return new PlayerDTO(entity);
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Id not found " + id);
		}
	}
	
	public void delete(Long id) {
		try {
			repository.deleteById(id);
		}
		catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Id not found " + id);
		}
		catch(DataIntegrityViolationException e) {
			throw new DataBaseException("Integrity Violation");
		}
	}
	
	private void copyDtoToEntity(PlayerDTO dto, Player entity) {
		entity.setName(dto.getName());
		entity.setNickname(dto.getNickname());
		entity.setBirthDate(dto.getBirthDate());
		entity.setImgUrl(dto.getImgUrl());
		entity.setPosition(dto.getPosition());
		entity.setTeam(teamRepository.getOne(dto.getTeamId()));
	}
}
