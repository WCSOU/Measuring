import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
public class Incluir extends JPanel implements ActionListener{
    
    
    protected JButton btnIncluir;

    protected JLabel CpfCliente;
    protected JLabel idProd;
    protected JLabel qtdComprada;
    protected JLabel data;
    protected JLabel Cep;
    protected JLabel numCasa;
    protected JLabel idFunc;


    protected JTextArea textArea;



    public Incluir (){
        super(new GridBagLayout());

        //Definição do botão Incluir

        btnIncluir = new JButton("Incluir");
        btnIncluir.setBounds(100,200,250,100);
        btnIncluir.setFont(new Font("Arial",Font.BOLD,40));
        btnIncluir.setBackground(new Color(222, 239, 227));
        btnIncluir.addActionListener(this::actionPerformed);



        //Definição da área do formulário
        textArea = new JTextArea(55, 55);
        textArea.setEditable(false);
        JScrollPane scrollPane = new JScrollPane(textArea);



        GridBagConstraints c = new GridBagConstraints();
        c.gridwidth = GridBagConstraints.REMAINDER;
        c.fill = GridBagConstraints.HORIZONTAL;

        add(btnIncluir,c);


        c.fill = GridBagConstraints.BOTH;
        c.weightx = 100.0;
        c.weighty = 150.0;


        add(scrollPane, c);

    }

    public void actionPerformed(ActionEvent e) {
        System.out.println("Colocar o codigo BD ");
    }
    private static void createAndShowGUI() {
        //Create and set up the window.
        JFrame frame = new JFrame("Mesuring/Incluir Venda");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        //Adiciona o conteudo do Incluir no formulário
        frame.add(new Incluir());

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