package pkg;

abstract  class Archivio {

	private int ISBM;
	private String Titolo;
	private String DataPubblicazione;
	private int Pagine;
	
	public Archivio(int isbm, String titolo, String data, int pagine) {
		this.ISBM = isbm;
		this.Titolo = titolo;
		this.DataPubblicazione = data;
		this.Pagine = pagine;
	}
	
	public int  GetISBM(){
		return this.ISBM;
		
	}
	
	public String GetTitolo() {
		return this.Titolo;
	}
	
	public String GetDataPubblicazione() {
		return this.DataPubblicazione;
	}
	
	public int GetPagine() {
		return this.Pagine;
	}
	
}
