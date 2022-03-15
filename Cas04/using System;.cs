using System;

class Aranzman {
	public string DatumOd;
	public string DatumDo;
	public int Cena;
	
	public Aranzman(string DatumOd, string DatumDo, int cena) {
		this.DatumOd = DatumOd;
		DatumDo = DatumDo;
		Cena = cena;
	}
}

public class Program
{
	public static void Main()
	{
		Aranzman aranzman = new Aranzman("20-06", " 03-07", 950);
	}
} 