using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using static System.Windows.Forms.VisualStyles.VisualStyleElement.Button;

namespace anket
{
    public partial class anketIslemleri : Form
    {
        public anketIslemleri()
        {
            InitializeComponent();
        }
        DataTable soruGetir()
        {
            DataSet1TableAdapters.problemTableAdapter a = new DataSet1TableAdapters.problemTableAdapter();
            return a.GetDataProbem();
        }
        DataTable cevapGetir()
        {
            DataSet1TableAdapters.resultTableAdapter a = new DataSet1TableAdapters.resultTableAdapter();
            return a.GetDataByResult();
        }
        private void anketIslemleri_Load(object sender, EventArgs e)
        {
            dataGridView1.DataSource=soruGetir();
            dataGridView2.DataSource=cevapGetir();
            soruişlemi.Checked = true;
            panel2.Visible = false;
            soruişlemi.AutoCheck = true;
            cevapişlemi.AutoCheck = true;
            ekle.Checked = true;
            radioButton1.Checked = true;
            panel6.Visible = false;
            panel3.Visible = false;
           
            DataSet1TableAdapters.problemTableAdapter a = new DataSet1TableAdapters.problemTableAdapter();
            soru1.ValueMember = "id";
            soru1.DisplayMember = "soru";
            soru1.DataSource = a.GetDataProbem();
            soru2.ValueMember = "id";
            soru2.DisplayMember = "soru";
            soru2.DataSource = a.GetDataProbem();
        }

        private void soruişlemi_CheckedChanged(object sender, EventArgs e)
        {
            panel4.Visible = soruişlemi.Checked ? panel4.Visible=true : panel4.Visible=false;
            if (panel4.Visible)
                panel2.Visible = false;
            else
                panel2.Visible = true;
        }

        private void ekle_CheckedChanged(object sender, EventArgs e)
        {
            //panel1 ve panel5
            panel6.Visible=ekle.Checked?false:true;
            panel3.Visible = radioButton1.Checked ? false : true;
            panel5.Visible = ekle.Checked ? true : false;
            panel1.Visible = radioButton1.Checked ? true : false;
        }

        private void dataGridView1_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {
            DataGridViewRow row = dataGridView1.CurrentRow;
            soruId.Text = row.Cells["id"].Value.ToString();
            DataSet1TableAdapters.resultTableAdapter res = new DataSet1TableAdapters.resultTableAdapter();

            dataGridView2.DataSource = res.GetDataresultforSoruId(Convert.ToInt32(row.Cells["id"].Value));
        }

        private void dataGridView2_CellDoubleClick(object sender, DataGridViewCellEventArgs e)
        {
            DataGridViewRow row = dataGridView2.CurrentRow;
            cevapId.Text = row.Cells["id"].Value.ToString();
        }

        private void yenisoruEkle_Click(object sender, EventArgs e)
        {
            DataSet1TableAdapters.problemTableAdapter prob = new DataSet1TableAdapters.problemTableAdapter();
            prob.soruEkle(yenisoru.Text);
            dataGridView1.DataSource = prob.GetDataProbem();
            soru1.ValueMember = "id";
            soru1.DisplayMember = "soru";
            soru1.DataSource = prob.GetDataProbem();
            soru2.ValueMember = "id";
            soru2.DisplayMember = "soru";
            soru2.DataSource = prob.GetDataProbem();
        }

        private void soruGüncelle_Click(object sender, EventArgs e)
        {
            DataSet1TableAdapters.problemTableAdapter prob = new DataSet1TableAdapters.problemTableAdapter();
            prob.soruGüncelle(soruGüncelleText.Text,Convert.ToInt32(soruId.Text));
            dataGridView1.DataSource = prob.GetDataProbem();
        }

        private void sil_Click(object sender, EventArgs e)
        {

            DataGridViewRow row = dataGridView1.CurrentRow;
            string namet = row.Cells["soru"].Value.ToString();
            int ids = Convert.ToInt32(row.Cells["id"].Value);
            DataSet1TableAdapters.problemTableAdapter prob = new DataSet1TableAdapters.problemTableAdapter();
            if (MessageBox.Show(" ' " + namet + "' bu soruyu silmek istedğine emin misin", "warning", MessageBoxButtons.OKCancel) == DialogResult.OK)
            {
                DataSet1TableAdapters.resultTableAdapter res = new DataSet1TableAdapters.resultTableAdapter();
                res.FillByResultForProblem(ids);
                prob.soruSil(Convert.ToInt32(soruId.Text));
                dataGridView1.DataSource = prob.GetDataProbem();
                dataGridView2.DataSource = res.GetDataByResult();
                soru1.ValueMember = "id";
            soru1.DisplayMember = "soru";
            soru1.DataSource = prob.GetDataProbem();
            soru2.ValueMember = "id";
            soru2.DisplayMember = "soru";
            soru2.DataSource = prob.GetDataProbem();
            }
        }

        private void cevapEkle_Click(object sender, EventArgs e)
        {
            DataSet1TableAdapters.resultTableAdapter prob = new DataSet1TableAdapters.resultTableAdapter();
            prob.cevapEkle(Convert.ToInt32(soru2.SelectedValue),cevap1.Text,comboBox1.SelectedItem.ToString());
            dataGridView2.DataSource = prob.GetDataByResult();
        }

        private void cevapGüncelle_Click(object sender, EventArgs e)
        {
            DataSet1TableAdapters.resultTableAdapter prob = new DataSet1TableAdapters.resultTableAdapter();
            prob.cevapGuncelle(comboBox2.SelectedItem.ToString(),Convert.ToInt32(soru1.SelectedValue),cevap2.Text,Convert.ToInt32(cevapId.Text));
            dataGridView2.DataSource = prob.GetDataByResult();
        }

        private void button3_Click(object sender, EventArgs e)
        {
            DataGridViewRow row = dataGridView2.CurrentRow;
            string namet = row.Cells["result"].Value.ToString();
            DataSet1TableAdapters.resultTableAdapter prob = new DataSet1TableAdapters.resultTableAdapter();
            if (MessageBox.Show(" ' " + namet + "' bu cevabı silmek istedğine emin misin", "warning", MessageBoxButtons.OKCancel) == DialogResult.OK)
                prob.cevapSil(Convert.ToInt32(cevapId.Text));
            dataGridView2.DataSource = prob.GetDataByResult();
        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

    }
}
