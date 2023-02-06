package packet;

import java.util.Random;
import java.util.Scanner;

public class Main {

	public static int ValueMin = 1;
	public static int ValueMax = 5;
	public static int[] arrayNumer = new int[ValueMax];

	static Scanner sc = new Scanner(System.in);
	
	public static void main(String[] args) {
	
		RandomInit();
		InputUser();
	}


	public static int random_int(int Min, int Max)
	{
	     return (int) (Math.random()*(Max-Min))+Min;
	}
	
	public static void RandomInit() {
		
		for(int i = 0; i< arrayNumer.length; i++) {
			
			arrayNumer[i] = random_int(ValueMin, ValueMax);
			System.out.println(arrayNumer[i]);
		}
		
	}

	public static void InputUser() {
		System.out.println("Inserici un ");
		String Input = sc.nextLine();
		System.out.println(Input);
	}
	
}
