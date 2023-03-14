package lorenzo.projects.soccerleague.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import lorenzo.projects.soccerleague.entities.Stadium;

@Repository
public interface StadiumRepository extends JpaRepository<Stadium,Long>{
	
	@Query(nativeQuery = true, value = "SELECT * FROM tb_stadium ORDER BY capacity DESC")
	Page<Stadium> findAllByCapacity(Pageable pageable);

}
