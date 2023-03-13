package lorenzo.projects.soccerleague.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import lorenzo.projects.soccerleague.entities.Stadium;

@Repository
public interface StadiumRepository extends JpaRepository<Stadium,Long>{

}
