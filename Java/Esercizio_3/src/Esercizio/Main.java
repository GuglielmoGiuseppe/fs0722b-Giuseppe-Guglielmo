package Esercizio;

import java.util.Scanner;

public class Main {

	
	static Scanner sc = new Scanner(System.in);
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub

		InserimentoNumero();
		
		
	}
	
	
	public static void InserimentoNumero() {
		System.out.print("inserisci un numero ");
		String numero  = sc.nextLine();
		CicloIndietro(Integer.parseInt(numero));
	}

	public static void CicloIndietro(int numero) {
		for (int i = numero; i >= 0; i--) {
			System.out.println("conto alla rovescia: " + i);
		
			}
	}
}
