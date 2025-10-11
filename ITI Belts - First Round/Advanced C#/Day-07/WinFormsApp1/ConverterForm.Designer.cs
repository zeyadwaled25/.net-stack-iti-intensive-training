using System.Globalization;

namespace WinFormsApp1
{
    partial class ConverterForm
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponents()
        {
            Label lbl1 = new Label
            {
                Text = "Amount:",
                Location = new Point(30, 30),
                AutoSize = true
            };
            Controls.Add(lbl1);

            inputAmount = new TextBox
            {
                Location = new Point(100, 25),
                Width = 150
            };
            Controls.Add(inputAmount);

            Label lbl2 = new Label
            {
                Text = "From:",
                Location = new Point(30, 80),
                AutoSize = true
            };
            Controls.Add(lbl2);

            fromCurrency = new ComboBox
            {
                Location = new Point(100, 75),
                Width = 100,
                DropDownStyle = ComboBoxStyle.DropDownList
            };
            fromCurrency.Items.AddRange(new object[] { "USD", "EUR", "EGP" });
            fromCurrency.SelectedIndex = 0;
            Controls.Add(fromCurrency);

            Label lbl3 = new Label
            {
                Text = "To:",
                Location = new Point(30, 130),
                AutoSize = true
            };
            Controls.Add(lbl3);

            toCurrency = new ComboBox
            {
                Location = new Point(100, 125),
                Width = 100,
                DropDownStyle = ComboBoxStyle.DropDownList
            };
            toCurrency.Items.AddRange(new object[] { "USD", "EUR", "EGP" });
            toCurrency.SelectedIndex = 2;
            Controls.Add(toCurrency);

            convertBtn = new Button
            {
                Text = "Convert",
                Location = new Point(100, 180),
                Width = 100,
            };
            convertBtn.Click += ConvertBtn_Click;
            Controls.Add(convertBtn);

            resultLabel = new Label
            {
                Text = "Result: ",
                Location = new Point(30, 230),
                AutoSize = true,
                Font = new Font("Segoe UI", 12, FontStyle.Bold)
            };
            Controls.Add(resultLabel);
        }

        private void ConvertBtn_Click(object sender, EventArgs e)
        {
            if (!double.TryParse(inputAmount.Text, out double amount))
            {
                MessageBox.Show("Please enter a valid number!");
                return;
            }

            string from = fromCurrency.SelectedItem.ToString();
            string to = toCurrency.SelectedItem.ToString();

            double amountInEGP = amount * rates[from];
            double converted = amountInEGP / rates[to];

            resultLabel.Text = $"Result: {converted:0.00} {to}";
        }

        #endregion
    }
}
