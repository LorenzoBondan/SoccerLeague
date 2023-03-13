package lorenzo.projects.soccerleague.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import lorenzo.projects.soccerleague.entities.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role,Long>{

}
