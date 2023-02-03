package packet;

public class video extends elementoMultimediale{
	int durata = 0;
	int luminonsita = 0;
	int volune = 0;
	public video(String titolo, int durata,int volume ,int lum) {
		super(titolo);
		this.durata = durata;
		this.volune = volume;
		this.luminonsita = lum;
	}
	
	public void Play() {
		System.out.println("Video in esecuzione");
		
	}
	
	public void alzaLuminosita(int value) {
		this.luminonsita += value;
	}
	
	public void abbassLuminosita(int value) {
		this.luminonsita -= value;
	}
	
	
	public void AlzaVolume(int value) {
		System.out.println("Volume alzato di:" + value);
		this.volune += value;
	}
	
	public void abassaVolune(int value) {
		System.out.println("Volume abbassato di:" + value);
		this.volune -= value;
	}
	
}
