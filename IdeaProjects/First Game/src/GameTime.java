//library to add windows, menus, buttons and labels
import javax.swing.*;

public class GameTime {

    public static void main(String[] args){
        //creating window
        JFrame window = new JFrame();

        //set window size
        window.setSize(800, 600);

        //give window title
        window.setTitle("First Game!");

        //make window resizable
        window.setResizable(true);

        //make window close when pressing the "X"
        window.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        //create panel
        GamePanel game = new GamePanel();

        //add panel
        window.add(game);

        //make window visible
        window.setVisible(true);
    }
}