package packet;

public class audio extends elementoMultimediale {
	int durata = 0;
	int volume = 0;
	public audio(String titolo, int dura, int volune) {
		super(titolo);
		this.durata = dura;
		this.volume = volune;
	}
	
	
	public void Play() {
		System.out.println("Audio in esecuzione");
		for(int i = 0; i< this.durata; i++ ) {
			System.out.println(Titolo.toString());
		}
		for(int i = 0; i< this.volume; i++ ) {
			System.out.print("!");
		}
	}
	
	public void AlzaVolume(int value) {
		System.out.println("il volume + stato alzato di:" + value);
		this.volume += value;
	}
	
	public void AbbassaVolume(int value) {
		this.volume -= value;
	}
}
