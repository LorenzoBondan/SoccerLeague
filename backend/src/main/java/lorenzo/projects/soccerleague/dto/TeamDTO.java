package lorenzo.projects.soccerleague.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import lorenzo.projects.soccerleague.entities.Player;
import lorenzo.projects.soccerleague.entities.Team;

public class TeamDTO implements Serializable {

	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String name;
	private Long members;
	private Integer internationalCups;
	private Integer continentalCups;
	private Integer nationalCups;
	private Integer nationalLeagues;
	private Character serie;
	private String imgUrl;
	
	private StadiumDTO stadium;
	
	
	private List<PlayerDTO> players = new ArrayList<>();
	
	public TeamDTO() {}

	public TeamDTO(Long id, String name, Long members, Integer internationalCups, Integer continentalCups,
			Integer nationalCups, Integer nationalLeagues, Character serie, String imgUrl, StadiumDTO stadium) {
		super();
		this.id = id;
		this.name = name;
		this.members = members;
		this.internationalCups = internationalCups;
		this.continentalCups = continentalCups;
		this.nationalCups = nationalCups;
		this.nationalLeagues = nationalLeagues;
		this.serie = serie;
		this.imgUrl = imgUrl;
		this.stadium = stadium;
	}
	
	public TeamDTO(Team entity) {
		this.id = entity.getId();
		this.name = entity.getName();
		this.members = entity.getMembers();
		this.internationalCups = entity.getInternationalCups();
		this.continentalCups = entity.getContinentalCups();
		this.nationalCups = entity.getNationalCups();
		this.nationalLeagues = entity.getNationalLeagues();
		this.serie = entity.getSerie();
		this.imgUrl = entity.getImgUrl();
		
		this.stadium = new StadiumDTO(entity.getStadium());
	}
	
	public TeamDTO(Team entity, List<Player> list) {
		this(entity);
		list.forEach(p -> this.players.add(new PlayerDTO(p)));
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

	public Long getMembers() {
		return members;
	}

	public void setMembers(Long members) {
		this.members = members;
	}

	public Integer getInternationalCups() {
		return internationalCups;
	}

	public void setInternationalCups(Integer internationalCups) {
		this.internationalCups = internationalCups;
	}

	public Integer getContinentalCups() {
		return continentalCups;
	}

	public void setContinentalCups(Integer continentalCups) {
		this.continentalCups = continentalCups;
	}

	public Integer getNationalCups() {
		return nationalCups;
	}

	public void setNationalCups(Integer nationalCups) {
		this.nationalCups = nationalCups;
	}

	public Integer getNationalLeagues() {
		return nationalLeagues;
	}

	public void setNationalLeagues(Integer nationalLeagues) {
		this.nationalLeagues = nationalLeagues;
	}

	public Character getSerie() {
		return serie;
	}

	public void setSerie(Character serie) {
		this.serie = serie;
	}

	public String getImgUrl() {
		return imgUrl;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}

	public StadiumDTO getStadium() {
		return stadium;
	}

	public void setStadium(StadiumDTO stadium) {
		this.stadium = stadium;
	}
	

	public List<PlayerDTO> getPlayers() {
		return players;
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
		TeamDTO other = (TeamDTO) obj;
		return Objects.equals(id, other.id);
	}
	
	

}
