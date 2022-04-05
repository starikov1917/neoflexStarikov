import java.io.IOException;
import java.util.Scanner;

public class NumberConverter {
	
	// первое задание
	public static String from10to16(int num) {		
		return Integer.toHexString(num);
	}
	
	
	// второе задание
	public static String from10to2(int n) {
			return Integer.toBinaryString(n);
	}

	// третье задание
	public static int from2to10(int n) throws NumberFormatException {
		int result = 0;
		int degre = 1;
		while (n != 0) {						
			int newDigit = n % 10;
			if (newDigit > 1)
			{
				throw new NumberFormatException("");
			}			
			result += newDigit * degre;
			degre *= 2;
			n /= 10;						
		}				
		return result;
	}
	
	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		System.out.println("Выбирите задание 1, 2 или 3");
		String choise = s.nextLine(); 
		System.out.println("Введите число");		
		try {
			int i = Integer.valueOf(s.nextLine());
			switch (choise) {
				case ("1"): 
					System.out.println(from10to16(i)); 
					break;
				case ("2"): 
					System.out.println(from10to2(i)); 
					break;
				case ("3"): 
					System.out.println(from2to10(i)); 
				break;
				default: 
					System.out.println("кажется таких заданий не было");
			}
						
		}
		catch (NumberFormatException e) {
			System.out.println("неверный формат числа");
		}					
	}	
}
