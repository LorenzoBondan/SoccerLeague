package lorenzo.projects.soccerleague.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lorenzo.projects.soccerleague.dto.TeamDTO;

@Entity
@Table(name = "tb_team")
public class Team implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private Long members;
	private Integer internationalCups;
	private Integer continentalCups;
	private Integer nationalCups;
	private Integer nationalLeagues;
	private Character serie;
	@Column(columnDefinition = "TEXT")
	private String imgUrl;
	
	@ManyToOne
	@JoinColumn(name = "stadium_id")
	private Stadium stadium;
	
	@OneToMany(mappedBy = "team")
	private List<Player> players = new ArrayList<>();
	
	
	public Team() {}
	
	public Team(TeamDTO dto) {}


	public Team(Long id, String name, Long members, Integer internationalCups, Integer continentalCups,
			Integer nationalCups, Integer nationalLeagues, Character serie, String imgUrl, Stadium stadium) {
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
	

	public Stadium getStadium() {
		return stadium;
	}


	public void setStadium(Stadium stadium) {
		this.stadium = stadium;
	}
	


	public List<Player> getPlayers() {
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
		Team other = (Team) obj;
		return Objects.equals(id, other.id);
	}
	
	
}
