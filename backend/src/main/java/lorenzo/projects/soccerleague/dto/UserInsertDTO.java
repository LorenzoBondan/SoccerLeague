package lorenzo.projects.soccerleague.dto;

import lorenzo.projects.soccerleague.services.validation.UserInsertValid;

@UserInsertValid
public class UserInsertDTO extends UserDTO {
	
	private static final long serialVersionUID = 1L;
	
	private String password;

	public UserInsertDTO() {
		super();
	}
	
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	
}
