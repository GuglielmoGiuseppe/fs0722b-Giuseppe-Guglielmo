package corso_java;

public class MainPorject {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Veicolo  v = new Veicolo();
		v.marca = "Fiat";
		v.modello = "126";
		v.colore = "Rosso";
		v.cilindrata = "9000";
		
		System.out.println(v.info());
	}

}
