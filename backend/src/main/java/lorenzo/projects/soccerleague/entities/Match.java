package lorenzo.projects.soccerleague.entities;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "tb_match")
public class Match implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@ManyToOne
    @JoinColumn(name = "home_Team_id")
	private Team homeTeam;
	
	@ManyToOne
    @JoinColumn(name = "away_Team_id")
	private Team awayTeam;
	
	private Integer homeTeamGoals;
	
	private Integer awayTeamGoals;

	public Match() {}
	
	public Match(Long id, Team homeTeam, Team awayTeam, Integer homeTeamGoals, Integer awayTeamGoals) {
		super();
		this.id = id;
		this.homeTeam = homeTeam;
		this.awayTeam = awayTeam;
		this.homeTeamGoals = homeTeamGoals;
		this.awayTeamGoals = awayTeamGoals;
	}


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Team getHomeTeam() {
		return homeTeam;
	}

	public void setHomeTeam(Team homeTeam) {
		this.homeTeam = homeTeam;
	}

	public Team getAwayTeam() {
		return awayTeam;
	}

	public void setAwayTeam(Team awayTeam) {
		this.awayTeam = awayTeam;
	}

	public Integer getHomeTeamGoals() {
		return homeTeamGoals;
	}

	public void setHomeTeamGoals(Integer homeTeamGoals) {
		this.homeTeamGoals = homeTeamGoals;
	}

	public Integer getAwayTeamGoals() {
		return awayTeamGoals;
	}

	public void setAwayTeamGoals(Integer awayTeamGoals) {
		this.awayTeamGoals = awayTeamGoals;
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
		Match other = (Match) obj;
		return Objects.equals(id, other.id);
	}
	
	
	
}
