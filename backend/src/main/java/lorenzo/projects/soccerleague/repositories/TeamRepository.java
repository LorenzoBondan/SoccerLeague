package lorenzo.projects.soccerleague.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import lorenzo.projects.soccerleague.entities.Team;

@Repository
public interface TeamRepository extends JpaRepository<Team,Long>{
	
	@Query(nativeQuery = true, value = "SELECT * from tb_team WHERE serie = :serie ORDER BY name ASC")
	Page<Team> findTeamBySerie(Pageable pageable, Character serie);

	@Query(nativeQuery = true, value = "SELECT * from tb_team ORDER BY points DESC")
	Page<Team> findTeamByPoints(Pageable pageable);
}
