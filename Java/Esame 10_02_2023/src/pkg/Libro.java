package pkg;

public class Libro extends  Archivio{
	private String autore;
	private String genere;
	
	public Libro(int isbm, String titolo, String data, int pagine, String aut, String Gen) {
		super(isbm, titolo, data, pagine);
		this.autore = aut;
		this.genere = Gen;
	}

	public String GetAutore() {
		return this.autore;
	}
	
	public String GetGenere() {
		return this.genere;
	}
	
	@Override
//	public String toString() {
//		return "Codice ISBM:"+ "	" + GetISBM() + "	" + "Titolo:"+ "	" + GetTitolo() + "	" + "Data:" + "	" + GetDataPubblicazione() + "	" + "Pagine:" +"	" + GetPagine()+ "	" + "Autore:" + "	" + autore + "	" + " Genere:" + "	" + genere +"";
//	}
	public String toString() {
		return ""+GetISBM() + "	" + GetTitolo() + "	" + GetDataPubblicazione() +"	" + GetPagine()+ "	" + autore + "	"+ genere +"";
	}
}
