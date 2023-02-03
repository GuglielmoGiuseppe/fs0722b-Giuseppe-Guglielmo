package packet;

public class User {
	public String Username = "";
	public String Password = "";
	
	public User(String username, String password) {
		this.Username = username;
		this.Password = password;
	}
	
	public String GetUser() {
		return Username;
	}
	
	public String GetPassword() {
		return Password;
	}
}
