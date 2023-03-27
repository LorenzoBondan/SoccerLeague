package lorenzo.projects.soccerleague.dto;

import java.io.Serializable;
import java.util.Objects;

import lorenzo.projects.soccerleague.entities.Match;

public class MatchDTO implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private Long id;
	private Long homeTeamId;
	private Long awayTeamId;
	private Integer homeTeamGoals;
	private Integer awayTeamGoals;

	public MatchDTO() {}

	public MatchDTO(Long id, Long homeTeamId, Long awayTeamId, Integer homeTeamGoals, Integer awayTeamGoals) {
		super();
		this.id = id;
		this.homeTeamId = homeTeamId;
		this.awayTeamId = awayTeamId;
		this.homeTeamGoals = homeTeamGoals;
		this.awayTeamGoals = awayTeamGoals;
	}
	
	public MatchDTO(Match entity) {
		this.id = entity.getId();
		this.homeTeamId = entity.getHomeTeam().getId();
		this.homeTeamGoals = entity.getHomeTeamGoals();
		this.awayTeamId = entity.getAwayTeam().getId();
		this.awayTeamGoals = entity.getAwayTeamGoals();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getHomeTeamId() {
		return homeTeamId;
	}

	public void setHomeTeamId(Long homeTeamId) {
		this.homeTeamId = homeTeamId;
	}

	public Long getAwayTeamId() {
		return awayTeamId;
	}

	public void setAwayTeamId(Long awayTeamId) {
		this.awayTeamId = awayTeamId;
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
		MatchDTO other = (MatchDTO) obj;
		return Objects.equals(id, other.id);
	}
	
	
}
