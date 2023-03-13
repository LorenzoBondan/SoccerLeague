package lorenzo.projects.soccerleague.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import lorenzo.projects.soccerleague.entities.Player;

@Repository
public interface PlayerRepository extends JpaRepository<Player,Long>{

}
