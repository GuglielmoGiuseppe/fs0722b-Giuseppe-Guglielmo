package packet;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
	
	static ColorString color = new ColorString();
	static Scanner sc = new Scanner(System.in);
	static ArrayList<User> users = new ArrayList<User>();
	static audio[] listAudio = {ClipAudio("Mondo Marcio", 15, 8)};
	static video[] listVideo = {ClipVideo("MilleAccendini", 10, 15 ,10)};
	static immagine[] listImg = {img("ultmo selfie prima di morire", 10)};
	static String  currentUser = "";
	
	public static void main(String[] args) {
		Admin();
		Login();

	}

	static public void Login() {
		System.out.println("[0] effettia il Login");
		System.out.println("[1] Crea un Account");

		String input = sc.nextLine();
		CheckInput(input);
	}
	
	static public void Admin() {
		
		User adm = new User("admin","12345");
		users.add(adm);
	}
	
	
	static public void CheckInput(String inputVal) {

		switch(inputVal)
		{
		case "0":
			InputLogin();
			break;
		case "1":
			System.out.println("test");
			break;
		}
	}
	

	static public void CheckUser(String User) {
		users.forEach(s -> { 
			if(User.equals(s.GetUser()))
			{
				
			}

		});
	}
	
	static public void CheckPassword(String password) {
		users.forEach(s -> { 
			if(password.equals(s.GetPassword()))
			{
				
			}

		});
	}
	
	static public void InputLogin() {
		System.out.println(color.colore.YELLOW);
		System.out.println("Username");
		System.out.println(color.colore.RESET);
		String usr = sc.nextLine();
		System.out.println(color.colore.YELLOW);
		System.out.println("Password");
		System.out.println(color.colore.RESET);
		String pass = sc.nextLine();
		CheckLoginCredential(usr,pass);
	}
	
	static public void InputPassword() {
		
	}
	
	
	static public void CheckLoginCredential(String user, String pass) {
		users.forEach(s -> { 
			if(user.equals(s.GetUser()))
			{
				if(pass.equals(s.GetPassword())) {
					cls();
					currentUser = user;
					Menu();

				}
			}

		});
	}
	
	
	static public void Menu() {
		System.out.print("Benvenuto:");
		System.out.print(color.colore.YELLOW);
		System.out.print(currentUser);
		System.out.println(color.colore.RESET);
		System.out.println("-------------------------------");
		System.out.println("[0] Avvia Audio");
		System.out.println("[1] Alza il volume del Audio");
		System.out.println("[2] Avvia Video");
		System.out.println("[3] Alza il volume del Video");
		System.out.println("[4] Mostra Immagine");
		System.out.println("[5] Alza luminosità immagine");
		String input = sc.nextLine();
		CheckInputMenu(input);
	}
	
	static public audio ClipAudio(String titolo, int durata, int volume ) {
		return new audio(titolo, durata, volume);
	}
	
	static public video ClipVideo(String titolo, int durata,int volume, int lum ) {
		return new video(titolo, durata, volume ,lum);
	}
	
	static public immagine img(String titolo, int lum ) {
		return new immagine(titolo ,lum);
	}
	
	public static void cls()
	{
		try
		{	
			new ProcessBuilder("cmd","/c","cls").inheritIO().start().waitFor();
		}catch(Exception E)
			{
				System.out.println(E);
			}
	}
		
	
	public static void wait(int ms)
	{
	    try
	    {
	        Thread.sleep(ms);
	    }
	    catch(InterruptedException ex)
	    {
	        Thread.currentThread().interrupt();
	    }
	}
	
	static public void CheckInputMenu(String value) {
		switch(value) {
		
		case "0":
			listAudio[0].Play();
			wait(1500);
			Menu();
			break;
		
		case "1":
			System.out.println("di quanto vuoi alzare il volume dell'audio?");
			String input = sc.nextLine();
			listAudio[0].AlzaVolume(Integer.parseInt(input));;
			wait(1000);
			Menu();
			break;
		case "2":
			listVideo[0].Play();
			wait(1000);
			Menu();
			break;
		case "3":
			System.out.println("di quanto vuoi alzare il volume del video?");
			String input2 = sc.nextLine();
			listVideo[0].AlzaVolume(Integer.parseInt(input2));
			wait(1000);
			Menu();
			break;
		case "4":
			listImg[0].Show();
			wait(1000);
			Menu();
			break;
		case "5":
			System.out.println("di quanto vuoi alzare la luminosità");
			String input3 = sc.nextLine();
			listImg[0].alzaLuminosita(Integer.parseInt(input3));
			wait(1000);
			Menu();
			break;
		}
		
	}
}



