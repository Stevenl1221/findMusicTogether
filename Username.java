import java.util.Scanner;
public class Username
{
    public static void main(String[] args)
    {
        Scanner scan = new Scanner(System.in);

        System.out.println("Enter your Spotify Username: ");
        String username = scan.nextLine();

        System.out.print("Your username is: ");
        System.out.println(username);


    }
}