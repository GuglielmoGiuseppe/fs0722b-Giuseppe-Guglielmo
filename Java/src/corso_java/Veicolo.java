package corso_java;

public class Veicolo {
	String modello;
	String marca;
	String targa;
	String colore;
	int clilindrata;
	public String cilindrata;
	
	public void start() {
		System.out.println("start");
	}
	
	public void stop() {
		System.out.println("stop");
	}	
	
	public String info() {
		return this.marca + " " + this.modello;
	}
}
