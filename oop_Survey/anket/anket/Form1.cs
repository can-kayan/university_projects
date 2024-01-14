using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using static System.Net.Mime.MediaTypeNames;

namespace anket
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            anketIslemleri ans = new anketIslemleri();
            ans.ShowDialog();
            flowLayoutPanel1.Controls.Clear();
            sorular();
        }
        void sorular()
        {
            DataSet1TableAdapters.problemTableAdapter pro = new DataSet1TableAdapters.problemTableAdapter();
            DataSet1TableAdapters.resultTableAdapter res = new DataSet1TableAdapters.resultTableAdapter();

            for (int i=0;i<pro.GetDataProbem().Count ;i++)
            {
                FlowLayoutPanel panel = new FlowLayoutPanel();
                panel.Size = new System.Drawing.Size(796,163);
                Label soru = new Label();
                soru.AutoSize = false;
                soru.Dock = DockStyle.Top;
                soru.Size = new System.Drawing.Size(796, 53);
                soru.Font = new Font("Arial", 14);
                soru.Text ="Soru "+(i+1)+" "+ pro.GetDataProbem().Rows[i][1].ToString();
                soru.Name =  pro.GetDataProbem().Rows[i][1].ToString();
                panel.Controls.Add(soru);
                for (int b=0;b < res.GetDataresultforSoruId(Convert.ToInt32(pro.GetDataProbem().Rows[i][0].ToString())).Count; b++)
                {
                   
                    if (res.GetDataresultforSoruId(Convert.ToInt32(pro.GetDataProbem().Rows[i][0].ToString())).Rows[b][3].ToString().Trim() == "checkbox")
                    {
                        CheckBox checkbox = new CheckBox();
                        checkbox.Font = new Font("Arial", 14);
                        checkbox.Text = res.GetDataresultforSoruId(Convert.ToInt32(pro.GetDataProbem().Rows[i][0].ToString())).Rows[b][2].ToString();
                        checkbox.Name = res.GetDataresultforSoruId(Convert.ToInt32(pro.GetDataProbem().Rows[i][0].ToString())).Rows[b][2].ToString();
                        panel.Controls.Add(checkbox);
                    }
                    if (res.GetDataresultforSoruId(Convert.ToInt32(pro.GetDataProbem().Rows[i][0].ToString())).Rows[b][3].ToString().Trim() == "radiobutton")
                    {
                        RadioButton result = new RadioButton();
                        result.Font = new Font("Arial", 14);
                        result.Text = res.GetDataresultforSoruId(Convert.ToInt32(pro.GetDataProbem().Rows[i][0].ToString())).Rows[b][2].ToString();
                        result.Name = res.GetDataresultforSoruId(Convert.ToInt32(pro.GetDataProbem().Rows[i][0].ToString())).Rows[b][2].ToString();
                        panel.Controls.Add(result);
                    }
                    if (res.GetDataresultforSoruId(Convert.ToInt32(pro.GetDataProbem().Rows[i][0].ToString())).Rows[b][3].ToString().Trim() == "textbox")
                    {
                        TextBox textBox = new TextBox();
                        textBox.Font = new Font("Arial", 14);
                        textBox.Name = res.GetDataresultforSoruId(Convert.ToInt32(pro.GetDataProbem().Rows[i][0].ToString())).Rows[b][2].ToString();
                        panel.Controls.Add(textBox);
                    }
                    
                }
                flowLayoutPanel1.Controls.Add(panel);
                flowLayoutPanel1.AutoScroll = true;
            }
            
        }
        private void Form1_Load(object sender, EventArgs e)
        {
            sorular();
        }

        private void button2_Click(object sender, EventArgs e)
        {
           
            foreach (Control control in flowLayoutPanel1.Controls)
            {
                string cevap = null, soru = null;
                foreach (Control controls in control.Controls)
                {
                    
                    if (controls is Label label)
                    {
                        soru = label.Text;
                    }
                    if (controls is RadioButton radioButton && radioButton.Checked)
                    {
                        cevap += " , " + radioButton.Text;
                    }
                    if (controls is CheckBox checkBox && checkBox.Checked)
                    {
                        cevap += " , "+checkBox.Text;
                    }
                    if (controls is TextBox textBox && textBox.Text!="")
                    {
                        cevap += " , " + textBox.Text;
                    }

                }
                 if (cevap != null && textBox1.Text.Trim() != "")
                {

                    DataSet1TableAdapters.log1TableAdapter log = new DataSet1TableAdapters.log1TableAdapter();
                    log.InsertQuery(soru, cevap, textBox1.Text);
                }
            }
            if (textBox1.Text == "" )
            {
                MessageBox.Show("MissinParameter", "warining", MessageBoxButtons.OK, MessageBoxIcon.Warning);
            }
            else if ( textBox1.Text.Trim() != "")
            {
                logs saas = new logs();
                saas.ShowDialog();
                textBox1.Text = string.Empty;
                foreach (Control control in flowLayoutPanel1.Controls)
                {
                    foreach (Control controls in control.Controls)
                    {
                        if (controls is RadioButton radioButton && radioButton.Checked)
                        {
                            radioButton.Checked = false;
                        }



                    }
                }
            }
        }
        //panel size  796; 163
    }
}
