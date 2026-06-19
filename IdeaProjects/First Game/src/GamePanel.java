import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class GamePanel extends JPanel implements KeyListener{
    //ball location on axis
    int ballX = 200;
    int ballY = 100;

    // Ball speed
    int ballDX = 3;
    int ballDY = 4;

    //paddle location on axis
    int paddleX = 300;

    public GamePanel(){
        setBackground(Color.CYAN);

        //Makes panel receive keyboard inputs
        setFocusable(true);
        addKeyListener(this);

        Timer timer = new Timer(20, null);
        timer.addActionListener(e -> {
            //move ball
            ballX+=ballDX;
            ballY+=ballDY;

            //prevent ball from going outside the screen and bounce back
            if(ballX <=0 || ballX >=770){ //if ball hits the walls, bounce
                ballDX = -ballDX;
            }
            if(ballY <=0){ //ball hits the floor and ceiling, bounce
                ballDY = -ballDY;
            }

            // Paddle collision
            if(ballY + 30 >= 500 &&     // bottom of ball touches paddle level
                    ballX + 30 >= paddleX && // right side of ball passes paddle left
                    ballX <= paddleX + 120){ // left side of ball before paddle right

                ballDY = -ballDY;
            }

            if(ballY > 600){
                System.out.println("GAME OVER!!");
                timer.stop();
            }

            //draw everything again
            repaint();
        });
        timer.start();
    }

    @Override
    protected void paintComponent(Graphics g){
        super.paintComponent(g);

        //draw ball
        g.fillOval(ballX,ballY,30,30);

        //draw paddle
        g.fillRect(paddleX,500,120,20);
    }

    @Override
    public void keyPressed(KeyEvent e){

        if(e.getKeyCode() == KeyEvent.VK_LEFT){
            paddleX -= 20;
        }

        if(e.getKeyCode() == KeyEvent.VK_RIGHT){
            paddleX += 20;
        }

        //Make paddle not leave the screen
        if(paddleX <0)
            paddleX =0;

        if(paddleX >680)
            paddleX =680;

        repaint();
    }

    @Override
    public void keyReleased(KeyEvent e){}

    @Override
    public void keyTyped(KeyEvent e){}

}