namespace ToDoListApp
{
    public partial class ToDoForm : Form
    {
        private TextBox inputTask;
        private ListBox taskList;
        private Button addBtn;
        private Button deleteBtn;
        private Button doneBtn;
        public ToDoForm()
        {
            Text = "To-Do List";
            Size = new Size(400, 300);
            StartPosition = FormStartPosition.CenterScreen;

            InitializeComponent();
        }
    }
}
