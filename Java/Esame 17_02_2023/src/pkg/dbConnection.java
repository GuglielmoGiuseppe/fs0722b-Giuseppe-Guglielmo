package pkg;

import java.sql.Statement;
import java.text.DateFormat;
import java.util.ArrayList;
import java.util.List;

import pkg.ColorString.Color;

import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;

public class dbConnection {
	String url = "jdbc:postgresql://localhost:5432/";
	String dbName = "libreria";
	String user = "postgres";
	String pass = "password";
	
	Connection conn;
	Statement st = null;

	public dbConnection() throws Throwable
	{
		CreazioneDB();
		DatabaseMetaData ciao;
		
		this.conn = DriverManager.getConnection(url+dbName, user, pass);
		System.out.println(Color.GREEN);
		System.out.println("Connesso");
		System.out.println(Color.RESET);
		this.st = conn.createStatement();
		ciao = conn.getMetaData();
		ResultSet rs = null;
		rs = ciao.getTables(null, null, null, new String[] {"TABLE"});
		if(!rs.first()){
			CreaTabellaArchivio();
		}
	}
	
	                    
	public void CreazioneDB() throws Exception {
		Connection conn;
		Statement stForCreateDB = null;
		conn = DriverManager.getConnection(url, user, pass);
		stForCreateDB = conn.createStatement();
		try {
			String sql = "CREATE DATABASE " + dbName;
			stForCreateDB.executeUpdate(sql);
		}catch(Exception ignore) {
		}finally {
			conn.close();                                                                
		}

	}
	
	public void SalvaLibro(Libro lib) throws SQLException {
		String sql = "INSERT INTO Archivio (isbm, titolo, datadipubblicazione, pagine, autore, genere)"
				+ "VALUES ('"+ lib.GetISBM() + "', '" + lib.GetTitolo() + "', '" + lib.GetDataPubblicazione() + "', '"+ lib.GetPagine() + "', '"+ lib.GetAutore() +"', '"+ lib.GetGenere()+"')";
		this.st.executeUpdate(sql);
	}
	
	public void CreaTabellaArchivio() throws SQLException {
		
		String sql = "CREATE TABLE Archivio ("
				+ "	ISBM int8 NOT NULL,"
				+ "	Titolo VARCHAR NOT NULL,"
				+ "	DatadiPubblicazione DATE,"
				+ "	Pagine int8 NOT NULL,"
				+ "	Autore VARCHAR NOT NULL,"
				+ "	Genere VARCHAR NOT NULL"
				+ ");";
		this.st.executeUpdate(sql);
	}

	public List<Libro> ListaLibri() throws SQLException{
		List<Libro> lista = new ArrayList<Libro>();
		String sql = "SELECT * FROM Archivio";
		if(sql != null)
		{
			ResultSet rs = this.st.executeQuery(sql);
			if(rs.next())
			{
				while(rs.next()) {
					int ISBM = rs.getInt("isbm");
					String titolo = rs.getString("titolo");
					String data = rs.getString("datadipubblicazione");
					int pagine = rs.getInt("pagine");
					String autore = rs.getString("autore");
					String genere = rs.getString("genere");
					Libro lib = new Libro(ISBM,titolo,data,pagine,autore,genere);
					lista.add(lib);
				}
			}

		}

		return lista;
	}
	

	public Libro CercaLibroISBM(int isbm) throws SQLException {
		String sql = "SELECT * FROM Archivio WHERE isbm = " + isbm;
		ResultSet rs = this.st.executeQuery(sql);
		if(rs.next())
		{
			int ISBM = rs.getInt("isbm");
			String titolo = rs.getString("titolo");
			String data = rs.getString("datadipubblicazione");
			int pagine = rs.getInt("pagine");
			String autore = rs.getString("autore");
			String genere = rs.getString("genere");
			return new Libro(ISBM,titolo,data,pagine,autore,genere);
		}else {
			System.out.println(Color.RED);
			System.out.println("Nel'Archio non è presente nessun l'ibro dal codice: "+ isbm);
			return null;
		}
	
	}
	

	public void CancelLibroISBM(Libro lib) throws SQLException {
		String sql = "DELETE FROM Archivio WHERE isbm = " + lib.GetISBM();
		this.st.executeUpdate(sql);
		System.out.println(lib.toString());
	}
	
	public void CercaLibroPerAutore(Libro lib) throws SQLException {
		String sql = "SELECT * FROM Archivio WHERE autore = " + lib.GetAutore();
		this.st.executeUpdate(sql);
		System.out.println(lib.toString());
	}
	
	public void CercaPerData(Libro lib) throws SQLException {
		String sql = "SELECT * FROM Archivio WHERE autore = " + lib.GetDataPubblicazione();
		this.st.executeUpdate(sql);
		System.out.println(lib.toString());
	}
	
}	


