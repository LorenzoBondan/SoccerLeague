package lorenzo.projects.soccerleague.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import lorenzo.projects.soccerleague.entities.Team;

@Repository
public interface TeamRepository extends JpaRepository<Team,Long>{
	
	@Query(nativeQuery = true, value = "SELECT * from tb_team WHERE serie = a")
	List<Team> findTeamBySerie();

}
