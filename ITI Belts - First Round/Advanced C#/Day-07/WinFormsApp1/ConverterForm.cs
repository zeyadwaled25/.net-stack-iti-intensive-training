namespace WinFormsApp1
{
    public partial class ConverterForm : Form
    {
        private TextBox inputAmount;
        private ComboBox fromCurrency;
        private ComboBox toCurrency;
        private Label resultLabel;
        private Button convertBtn;

        private readonly Dictionary<string, double> rates = new Dictionary<string, double>
        {
            { "USD", 48 },
            { "EUR", 56 },
            { "EGP", 1 }
        };

        public ConverterForm()
        {
            Text = "Currency Converter";
            Size = new Size(500, 350);
            StartPosition = FormStartPosition.CenterScreen;

            InitializeComponents();
        }
    }
}
