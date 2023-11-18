import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
public class App extends JPanel implements ActionListener{
    protected JButton btnIncluir;

    public App (){
        super(new GridBagLayout());

        //Definição do botão Incluir

        btnIncluir = new JButton("Incluir");
        btnIncluir.setBounds(100,200,250,70);
        btnIncluir.setFont(new Font("Arial",Font.BOLD,40));
        btnIncluir.setBackground(new Color(222, 239, 227));




        GridBagConstraints c = new GridBagConstraints();
        c.gridwidth = GridBagConstraints.REMAINDER;
        c.fill = GridBagConstraints.HORIZONTAL;

        add(btnIncluir,c);


        c.fill = GridBagConstraints.BOTH;
        c.weightx = 100.0;
        c.weighty = 150.0;




    }
    public void actionPerformed(ActionEvent e) {

    }
    private static void createAndShowGUI() {
        //Create and set up the window.
        JFrame frame = new JFrame("Mesuring");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        //Adiciona o conteudo do App no formulário
        frame.add(new App());

        //Mostra a janela
        frame.pack();
        frame.setVisible(true);
    }

    public static void main(String[] args) {
        javax.swing.SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                createAndShowGUI();
            }
        });
    }
}