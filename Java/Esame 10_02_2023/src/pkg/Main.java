package pkg;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Scanner;

import org.apache.commons.io.FileUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Main {

	static ArrayList<Archivio> archivio = new ArrayList<Archivio>();
	static File file = new File("archivio/lista.txt");
	static Scanner sc = new Scanner(System.in);

	public static void main(String[] args) throws IOException{

		Menu();
//		Charset charset = Charset.defaultCharset();  
//		Path filePath = new File("archivio/lista.txt").toPath();
//		List<String> stringList = Files.readAllLines(filePath, charset);
//		String[] stringArray = stringList.toArray(new String[]{});
//		System.out.println(stringArray.toString());
		
	}

	
	static public void Menu() {
		System.out.println("[0] Aggiungi Libro");
		System.out.println("[1] Rimozione Libro Tramie ISBM");
		System.out.println("[2] Ricerca ISBM");
		System.out.println("[3] Ricerca per Anno di Pubblicazione");
		System.out.println("[4] Ricerca per Autore");
		System.out.println("[5] Caricamento del disco dell'archivio");
		System.out.println("Lista Comandi: Quit");
		
		String Imput = sc.nextLine();
		ListInputMenu(Integer.parseInt(Imput),ValueQuit );
	}
	
	
	static public void ListInputMenu(int value, String exit) {
		
		switch(value)
		{
			case 0:
				int ISBM = 0;
				String Titolo = null;
				String Data = null;
				int Pagine = 0;
				String Autore = null;
				String Genere = null;
				
				int Stage = 0;

				System.out.println("Inserisci il ISBM");
				String Imput = sc.nextLine();
				
				// CODICE ISMB
				do {
					
					try{
						ISBM = Integer.parseInt(Imput);
						Stage++;
					}catch (Exception e) {
						System.out.println("Codice ISBM ERRATO, riprova");
						Imput = sc.nextLine();

					}
					
				}while(true && Stage == 0);
				
				// TITOLO
				System.out.println("Inserisci il Titolo");
				Imput = sc.nextLine();
				
				do {
					try{
						Titolo = Imput;
						Stage++;
					}catch (Exception e) {
						System.out.println("Titolo Errato, riprova");
						Imput = sc.nextLine();

					}
				}while(true && Stage == 1);
				
				
				// DATA
				System.out.println("Inserisci la Data della pubblicazione");
				Imput = sc.nextLine();
				
				do {
					try{
						Data = Imput;
						Stage++;
					}catch (Exception e) {
						System.out.println("Data Errata, riprova");
						Imput = sc.nextLine();

					}
				}while(true && Stage == 2);
				
				
				//PAGINE
				System.out.println("Inserisci Numero di Pagine");
				Imput = sc.nextLine();
				
				do {
					try{
						Pagine = Integer.parseInt(Imput);
						Stage++;
					}catch (Exception e) {
						System.out.println("Numero di Pagine Errato, riprova");
						Imput = sc.nextLine();

					}
				}while(true && Stage == 3);
				
				// AUTORE
				System.out.println("Inserisci Nome Autore");
				Imput = sc.nextLine();
				
				do {
					try{
						Autore = Imput;
						Stage++;
					}catch (Exception e) {
						System.out.println("Nome autore Errato, riprova");
						Imput = sc.nextLine();

					}
				}while(true && Stage == 4);
				
				
				// Genere
				System.out.println("Inserisci Genere");
				Imput = sc.nextLine();
				
				do {
					try{
						Genere = Imput;
						Stage++;
					}catch (Exception e) {
						System.out.println("Genere Errato riprova");
						Imput = sc.nextLine();

					}
				}while(true && Stage == 5);

				CreaElementoLibro(ISBM,Titolo,Data,Pagine,Autore,Genere);
				
				Menu();
				
				
		case 1:
				break;
			case 2:
				break;
			case 3:
				break;
			case 4:
				break;
			case 5:
				break;
				
		}
	}
	
	static public void CreaElementoLibro(int ISBM, String Titolo, String Data, int Pagine, String Autore, String Genere)
	{
		Archivio NuvoLibro = new Libro(ISBM,Titolo, Data, Pagine, Autore, Genere);
		archivio.add(NuvoLibro);
		System.out.println("Agginto all'archio: "+ NuvoLibro.GetISBM() + " " + NuvoLibro.GetTitolo());
		
	}
	
	
	static public void CreazioneLibro() {
		
	}
	
	
	static public void ImputControlCreazileLibro(int Value, String Error, String TitleImput)
	{
		System.out.println(TitleImput);
		String Imput = sc.nextLine();
		
		try{
			Value = Integer.parseInt(Imput);
		}catch (Exception e) {
			System.out.println(Error);
			ImputControlCreazileLibro(Value,Error,TitleImput);
		}
	}
	
	static public void ImputControlCreazileLibro(String Value, String Error, String TitleImput)
	{
		System.out.println(TitleImput);
		String Imput = sc.nextLine();
		
		try{
			Value = Imput;
		}catch (Exception e) {
			System.out.println(Error);
			ImputControlCreazileLibro(Value,Error,TitleImput);
		}
	}
	
	
	static public void ImputCommand()
	{
		String Imput = sc.nextLine();
		
		try {
			switch(Imput)
			{
			case "quit":
					Menu();
				break;
			default: 
				System.out.println("Errore di Imput - scriti 'quit' per usicire");
				Imput = sc.nextLine();
			}

			
		}catch (Exception e)
		{
			System.out.println("Errore di Imput - scriti 'quit' per usicire");
			Imput = sc.nextLine();
		}
		

		
	}
	
	static public void RimozioneElementoISBM(int ISBM, ArrayList<Archivio> archivio) {
		
		
	}
	
	
	
//	static public void DebugList() {
//		Archivio Libro = new Libro(9231,"CIccio palla", "10/12/1990", 450, "Peppe ", "fantasy");
//		archivio.add(Libro);
//		
//		Archivio Libro2 = new Libro(4211,"CIccio palla", "10/12/1990", 350, "Peppe1 ", "fantasy");
//		archivio.add(Libro2);
//		
//		Archivio Libro3 = new Libro(8221,"CIccio palla", "10/12/1990", 250, "Peppe2 ", "fantasy");
//		archivio.add(Libro3);
//		
//		Archivio Libro4 = new Libro(1231,"CIccio palla", "10/12/1990", 150, "Pepp3e ", "fantasy");
//		archivio.add(Libro4);
//		
//		Archivio Libro5 = new Libro(2431,"CIccio palla", "10/12/1990", 750, "Peppe4 ", "fantasy");
//		archivio.add(Libro5);
//		
//		Archivio Libro6 = new Libro(6251,"CIccio palla", "10/12/1990", 370, "Peppe5 ", "fantasy");
//		archivio.add(Libro6);
//	}
//	public static void AddArchivio() {
//		
//		Libro libro2 = new Libro(12323,"Io non Sono Leggenda", "15/02/2020",420, "Guglielmo", "Noir");
//	}
	
}
