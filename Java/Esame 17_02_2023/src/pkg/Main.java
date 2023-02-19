package pkg;

import java.io.IOException;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import pkg.ColorString.Color;


public class Main {

	static Scanner sc = new Scanner(System.in); 
	static ColorString color = new ColorString();
	static List<Libro> lista = new ArrayList<Libro>();
	static DateValidator validator = new DateValidatorUsingDateFormat("yyyy-mm-dd");
	static boolean TabellaEsistente = false;
	public static void main(String[] args) throws Throwable {
		try{
			dbConnection db = new dbConnection();
			//lista = db.ListaLibri();
			
			System.out.println("[0] Aggiungi Libro");
			System.out.println("[1] Rimozione Libro Tramie ISBM");
			System.out.println("[2] Ricerca ISBM");
			System.out.println("[3] Ricerca per Anno di Pubblicazione");
			System.out.println("[4] Ricerca per Autore");
			System.out.println("[5] Caricamento del disco dell'archivio");
			System.out.println("[6] Vedi Lista Libri");
			
			String Imput = sc.nextLine();
			ListInputMenu(Integer.parseInt(Imput), db);
			//

		} catch(SQLException e){
			e.printStackTrace();
			
		}

	}

	
	static public void ListInputMenu(int value, dbConnection db) throws IOException, SQLException {
		
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
				System.out.print(Color.RESET);
				System.out.println("Inserisci il ISBM");
				System.out.print(Color.GREEN);
				String Imput = sc.nextLine();
				
				// CODICE ISMB
				do {
					
					try{
						ISBM = Integer.parseInt(Imput);
						Stage++;
					}catch (Exception e) {
						System.out.print(Color.RED);
						System.out.println("Codice ISBM ERRATO, riprova");
						System.out.print(Color.GREEN);
						Imput = sc.nextLine();

					}
					
				}while(true && Stage == 0);
				
				// TITOLO
				System.out.print(Color.RESET);
				System.out.println("Inserisci il Titolo");
				System.out.print(Color.GREEN);
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
				System.out.print(Color.RESET);
				System.out.println("Inserisci la Data della pubblicazione (YYY-MM-DD)");
				System.out.print(Color.GREEN);
				Imput = sc.nextLine();
				Data = Imput;
				
				do {
					
					if(validator.isValid(Data))
					{
						Stage++;
					}
					else {
						System.out.print(Color.RED);
						System.out.println("Tipo di Data Sbagliato, Ulitazza il tipo (YYY-MM-DD)");
						System.out.print(Color.GREEN);
						Imput = sc.nextLine();
						Data = Imput;
					}
					
				} while(Stage == 2);
				
				
				//PAGINE
				System.out.print(Color.RESET);
				System.out.println("Inserisci Numero di Pagine");
				System.out.print(Color.GREEN);
				Imput = sc.nextLine();
				
				do {
					try{
						Pagine = Integer.parseInt(Imput);
						Stage++;
					}catch (Exception e) {
						System.out.print(Color.RED);
						System.out.println("Numero di Pagine Errato, riprova");
						System.out.print(Color.GREEN);
						Imput = sc.nextLine();

					}
				}while(true && Stage == 3);
				
				// AUTORE
				System.out.print(Color.RESET);
				System.out.println("Inserisci Nome Autore");
				System.out.print(Color.GREEN);
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
				System.out.print(Color.RESET);
				System.out.println("Inserisci Genere");
				System.out.print(Color.GREEN);
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

				CreaElementoLibro(ISBM,Titolo,Data,Pagine,Autore,Genere,db);
				break;
			case 1:
				int CancellaISBM = 0;
				int StagaCanc = 0;
				System.out.println("Inserisci il ISBM per la cancellazione del libro");
				String ImputCancella = sc.nextLine();
				
				
				do {
					
					try{
						CancellaISBM = Integer.parseInt(ImputCancella);
						StagaCanc++;
						for(Libro lib: lista)
						{
							if(CancellaISBM == lib.GetISBM()) {
								db.CancelLibroISBM(lib);
								System.out.println(Color.GREEN);
								System.out.println("Il Libro: " + CancellaISBM + " è stato rimosso dall'archivio");
							}
								
						}
						
					}catch (Exception e) {
						System.out.println("Codice ISBM ERRATO, riprova");
						ImputCancella = sc.nextLine();
					}
					
				}while(true && StagaCanc == 0);
				
				
				break;
			case 2:
				int CodiceISBM = 0;
				int StageRircerca = 0;
				System.out.println("Inserisci il ISBM per la Ricerca");
				String InputRicerca = sc.nextLine();
				
				do {
					
					try{
						CodiceISBM = Integer.parseInt(InputRicerca);
						StageRircerca++;
						System.out.println(Color.GREEN);
						System.out.println("Risultati Della ricerca di: "+CodiceISBM);
						System.out.println(Color.RESET);
						System.out.println(db.CercaLibroISBM(CodiceISBM));
						
					}catch (Exception e) {
						System.out.println("Codice ISBM ERRATO, riprova");
						InputRicerca = sc.nextLine();
					}
					
				}while(true && StageRircerca == 0);
				
			//	db.CercaLibroISBM(, lista);
				break;
			case 3:
				String RicercaData = null;
				int stageRicercaData = 0;
				System.out.println("Inserisci La Data (YYY-MM-DD) di pubblicazione per la Ricerca");
				String InputRicercaData = sc.nextLine();
				
				RicercaData = InputRicercaData;
				do {
					
					if(validator.isValid(RicercaData))
					{
						System.out.println(Color.GREEN);
						System.out.println("Risultati Della ricerca di: "+RicercaData);
						System.out.println(Color.RESET);
						for(Libro lib: lista)
						{
							if(RicercaData.equals(lib.GetDataPubblicazione())) {
								db.CercaPerData(lib);
							}
						}
						stageRicercaData++;
					}
					else {
						System.out.println("Tipo di Data Sbagliato, Riprova");
						InputRicercaData = sc.nextLine();
						RicercaData = InputRicercaData;
					}
					
				} while(stageRicercaData == 0);
				
//				if(validator.isValid(RicercaData))
//				{
//					System.out.println(Color.GREEN);
//					System.out.println("Risultati Della ricerca di: "+RicercaData);
//					System.out.println(Color.RESET);
//					stageRicercaData++;
//				}
//				else{
//					do {
//						System.out.println("Tipo di Data Sbagliato, Riprova");
//						InputRicercaData = sc.nextLine();
//						RicercaData = InputRicercaData;
//						if(validator.isValid(RicercaData))
//						{
//							System.out.println(Color.GREEN);
//							System.out.println("Risultati Della ricerca di: "+RicercaData);
//							System.out.println(Color.RESET);
//							stageRicercaData++;
//						}
//					} while(stageRicercaData == 0);
//				}
				break;
			case 4:
				
				String RicercaAutore = null;
				int StageRircercaAutore = 0;
				System.out.println("Inserisci il nome dell'autore per la Ricerca");
				String InputRicercaAutore = sc.nextLine();
				
				
				RicercaAutore = InputRicercaAutore;
				StageRircercaAutore++;
				System.out.println(Color.GREEN);
				System.out.println("Risultati Della ricerca di: "+RicercaAutore);
				System.out.println(Color.RESET);
				for(Libro lib: lista)
				{
					if(RicercaAutore.equals(lib.GetAutore())) {
						db.CercaLibroPerAutore(lib);
					}
				}
				
				break;
			case 5:
				break;
			case 6:
				lista = db.ListaLibri();
				System.out.println(Color.GREEN);
				System.out.println("Lista caricata correttamente");
				System.out.println("###########################################");
				System.out.println(Color.RESET);
				for(Libro libro: lista)
				{
					System.out.println(libro);
					
				}
				break;
				
		}
	}
	

	static public void CreaElementoLibro(int ISBM, String Titolo, String Data, int Pagine, String Autore, String Genere, dbConnection db) throws IOException, SQLException
	{
		Libro NuvoLibro = new Libro(ISBM,Titolo, Data, Pagine, Autore, Genere);
		db.SalvaLibro(NuvoLibro);
		System.out.println(Color.YELLOW);
		System.out.println("Libro inserito correttamente nel Database");
	}
}
