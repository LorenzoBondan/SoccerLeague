package lorenzo.projects.soccerleague.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import lorenzo.projects.soccerleague.entities.Match;

@Repository
public interface MatchRepository extends JpaRepository<Match,Long>{

}
