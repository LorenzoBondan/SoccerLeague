package lorenzo.projects.soccerleague.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Set;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import lorenzo.projects.soccerleague.entities.Role;
import lorenzo.projects.soccerleague.entities.User;

public class UserDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long id;
	
	@NotBlank(message = "Campo obrigatório")
	private String name;
	
	@Email(message = "Favor entrar com um email válido")
	private String email;

	private Long favoriteTeamId;
	
	private List<RoleDTO> roles = new ArrayList<>();
	  
	public UserDTO() {}

	
	public UserDTO(Long id, String name, String email, String password, Long favoriteTeamId) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.favoriteTeamId = favoriteTeamId;
	}
	
	// construtor implantado na classe UserService
	public UserDTO(User entity) {
		this.id = entity.getId();
		this.name = entity.getName();
		this.email = entity.getEmail();
		this.favoriteTeamId = entity.getFavoriteTeamId();

		entity.getRoles().forEach(rol -> this.roles.add(new RoleDTO(rol)));
	}

	public UserDTO(User entity, Set<Role> roles) {
		this(entity); 
		roles.forEach(rol -> this.roles.add(new RoleDTO(rol))); 
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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	public Long getFavoriteTeamId() {
		return favoriteTeamId;
	}

	public void setFavoriteTeamId(Long favoriteTeamId) {
		this.favoriteTeamId = favoriteTeamId;
	}

	// SOMENTE O GET NAS LISTAS
	public List<RoleDTO> getRoles() { 
		return roles;
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
		UserDTO other = (UserDTO) obj;
		return Objects.equals(id, other.id);
	}
	
	

}
