package lorenzo.projects.soccerleague.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Set;

import lorenzo.projects.soccerleague.entities.Stadium;
import lorenzo.projects.soccerleague.entities.Team;


public class StadiumDTO implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String name;
	private Long capacity;
	private String location;
	private String imgUrl;
	
	private List<TeamDTO> teams = new ArrayList<>();
	
	public StadiumDTO() {}

	public StadiumDTO(Long id, String name, Long capacity, String location, String imgUrl) {
		super();
		this.id = id;
		this.name = name;
		this.capacity = capacity;
		this.location = location;
		this.imgUrl = imgUrl;
	}
	
	public StadiumDTO(Stadium entity) {
		this.id = entity.getId();
		this.name = entity.getName();
		this.capacity = entity.getCapacity();
		this.location = entity.getLocation();
		this.imgUrl = entity.getImgUrl();
	}
	
	public StadiumDTO(Stadium entity, Set<Team> teams) {
		this(entity);
		teams.forEach(t -> this.teams.add(new TeamDTO(t)));
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Long getCapacity() {
		return capacity;
	}

	public void setCapacity(Long capacity) {
		this.capacity = capacity;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getImgUrl() {
		return imgUrl;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}

	public List<TeamDTO> getTeams() {
		return teams;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		StadiumDTO other = (StadiumDTO) obj;
		return Objects.equals(id, other.id);
	}
	
	

}
