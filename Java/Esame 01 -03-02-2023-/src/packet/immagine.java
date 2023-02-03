package packet;

public class immagine extends elementoMultimediale{
	int luminosità = 0;

	public immagine(String titolo, int lum) {
		super(titolo);
		this.luminosità = lum;
	}
	
	public void alzaLuminosita(int value) {
		this.luminosità += value;
	}
	
	public void abbassLuminosita(int value) {
		this.luminosità -= value;
	}
	
	public void Show() {
		System.out.println("immagine mostrata");
	}
}
