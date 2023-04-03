package lorenzo.projects.soccerleague.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Objects;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.lang.Nullable;

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
	
	private Integer points;
	private Integer games;
	private Integer victories;
	private Integer draws;
	private Integer defeats;
	private Integer goalsScored;
	private Integer goalsConceded;
	
	@ManyToOne
	@JoinColumn(name = "stadium_id")
	private Stadium stadium;
	
	@OneToMany(mappedBy = "team")
	private List<Player> players = new ArrayList<>();
	
	@OneToMany(mappedBy = "homeTeam")
    private List<Match> matches = new ArrayList<>();
	
	@Nullable
	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "tb_team_rival",
				joinColumns = @JoinColumn(name = "team_id"), 
				inverseJoinColumns = @JoinColumn(name = "rival_id")
			)
	private Set<Team> rivals = new HashSet<>();
	
	public Team() {}
	
	public Team(TeamDTO dto) {}


	public Team(Long id, String name, Long members, Integer internationalCups, Integer continentalCups,
			Integer nationalCups, Integer nationalLeagues, Character serie, String imgUrl, Stadium stadium,
			Integer points, Integer games, Integer victories, Integer draws, Integer defeats, Integer goalsScored, 
			Integer goalsConceded) {
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
		
		this.points = points;
		this.games = games;
		this.victories = victories;
		this.draws = draws;
		this.defeats = defeats;
		this.goalsScored = goalsScored;
		this.goalsConceded = goalsConceded;
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
	
	
	public Integer getPoints() {
		return points;
	}

	public void setPoints(Integer points) {
		this.points = points;
	}

	public Integer getGames() {
		return games;
	}

	public void setGames(Integer games) {
		this.games = games;
	}

	public Integer getVictories() {
		return victories;
	}

	public void setVictories(Integer victories) {
		this.victories = victories;
	}

	public Integer getDraws() {
		return draws;
	}

	public void setDraws(Integer draws) {
		this.draws = draws;
	}

	public Integer getDefeats() {
		return defeats;
	}

	public void setDefeats(Integer defeats) {
		this.defeats = defeats;
	}

	public Integer getGoalsScored() {
		return goalsScored;
	}

	public void setGoalsScored(Integer goalsScored) {
		this.goalsScored = goalsScored;
	}

	public Integer getGoalsConceded() {
		return goalsConceded;
	}

	public void setGoalsConceded(Integer goalsConceded) {
		this.goalsConceded = goalsConceded;
	}


	public List<Match> getMatches() {
		return matches;
	}

	public List<Player> getPlayers() {
		return players;
	}
	

	public Set<Team> getRivals() {
		return rivals;
	}

	public Integer goalDifference() {
		return goalsScored - goalsConceded;
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
