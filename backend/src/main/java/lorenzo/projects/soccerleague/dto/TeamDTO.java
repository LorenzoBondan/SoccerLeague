package lorenzo.projects.soccerleague.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import lorenzo.projects.soccerleague.entities.Match;
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
	
	private Integer points;
	private Integer games;
	private Integer victories;
	private Integer draws;
	private Integer defeats;
	private Integer goalsScored;
	private Integer goalsConceded;
	
	private List<PlayerDTO> players = new ArrayList<>();
	
	private List<MatchDTO> matches = new ArrayList<>();
	
	public TeamDTO() {}

	public TeamDTO(Long id, String name, Long members, Integer internationalCups, Integer continentalCups,
			Integer nationalCups, Integer nationalLeagues, Character serie, String imgUrl, StadiumDTO stadium, 
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
		
		this.points = entity.getPoints();
		this.games = entity.getGames();
		this.victories = entity.getVictories();
		this.draws = entity.getDraws();
		this.defeats = entity.getDefeats();
		this.goalsScored = entity.getGoalsScored();
		this.goalsConceded = entity.getGoalsConceded();
	}
	
	public TeamDTO(Team entity, List<Player> players, List<Match> matches) {
		this(entity);
		players.forEach(p -> this.players.add(new PlayerDTO(p)));
		matches.forEach(m -> this.matches.add(new MatchDTO(m)));
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

	public List<MatchDTO> getMatches() {
		return matches;
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
	
	public Integer goalDifference() {
		return goalsScored - goalsConceded;
	}

}
