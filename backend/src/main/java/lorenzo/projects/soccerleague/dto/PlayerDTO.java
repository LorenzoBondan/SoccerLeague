package lorenzo.projects.soccerleague.dto;

import java.io.Serializable;
import java.time.Instant;
import java.util.Objects;

import lorenzo.projects.soccerleague.entities.Player;
import lorenzo.projects.soccerleague.entities.Team;

public class PlayerDTO implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String name;
	private String nickname;
	private Instant birthDate;
	private String imgUrl;
	private Team team;
	
	public PlayerDTO() {}

	public PlayerDTO(Long id, String name, String nickname, Instant birthDate, String imgUrl, Team team) {
		super();
		this.id = id;
		this.name = name;
		this.nickname = nickname;
		this.birthDate = birthDate;
		this.imgUrl = imgUrl;
		this.team = team;
	}
	
	public PlayerDTO(Player entity) {
		this.id = entity.getId();
		this.name = entity.getName();
		this.nickname = entity.getNickname();
		this.birthDate = entity.getBirthDate();
		this.imgUrl = entity.getImgUrl();
		this.team = entity.getTeam();
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

	public String getNickname() {
		return nickname;
	}

	public void setNickname(String nickname) {
		this.nickname = nickname;
	}

	public Instant getBirthDate() {
		return birthDate;
	}

	public void setBirthDate(Instant birthDate) {
		this.birthDate = birthDate;
	}

	public String getImgUrl() {
		return imgUrl;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}

	public Team getTeam() {
		return team;
	}

	public void setTeam(Team team) {
		this.team = team;
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
		PlayerDTO other = (PlayerDTO) obj;
		return Objects.equals(id, other.id);
	}
	
	

}
