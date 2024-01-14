using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace anket
{
    public partial class logs : Form
    {
        public logs()
        {
            InitializeComponent();
        }
        void getLog()
        {
            DataSet1TableAdapters.log1TableAdapter com = new DataSet1TableAdapters.log1TableAdapter();
            comboBox1.ValueMember = "nick";
            comboBox1.DisplayMember = "nick";
            comboBox1.DataSource = com.GetDatacombo();

        }
        private void logs_Load(object sender, EventArgs e)
        {
            getLog();
            DataSet1TableAdapters.log1TableAdapter com = new DataSet1TableAdapters.log1TableAdapter();
            if (comboBox1.SelectedValue != null)
            {
                dataGridView1.DataSource = com.GetDataByidLogs(comboBox1.SelectedValue.ToString());

            }
        }
        private void button1_Click(object sender, EventArgs e)
        {
            
        }

        private void comboBox1_SelectedValueChanged(object sender, EventArgs e)
        {
            DataSet1TableAdapters.log1TableAdapter com = new DataSet1TableAdapters.log1TableAdapter();
            if(comboBox1.SelectedValue != null)
            {
                dataGridView1.DataSource = com.GetDataByidLogs(comboBox1.SelectedValue.ToString());

            }
           
        }
    }
}
