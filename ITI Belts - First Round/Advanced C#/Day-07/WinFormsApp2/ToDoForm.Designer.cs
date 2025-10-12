namespace ToDoListApp
{
    partial class ToDoForm
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
        private void InitializeComponent()
        {
            Label lbl = new Label
            {
                Text = "Task:",
                Location = new Point(20, 20),
                AutoSize = true
            };
            Controls.Add(lbl);

            inputTask = new TextBox
            {
                Location = new Point(70, 15),
                Width = 200
            };
            Controls.Add(inputTask);

            addBtn = new Button
            {
                Text = "Add",
                Location = new Point(290, 15),
                Width = 70
            };
            addBtn.Click += AddBtn_Click;
            Controls.Add(addBtn);

            taskList = new ListBox
            {
                Location = new Point(20, 60),
                Size = new Size(250, 160)
            };
            Controls.Add(taskList);

            deleteBtn = new Button
            {
                Text = "Delete",
                Location = new Point(290, 70),
                Width = 70
            };
            deleteBtn.Click += DeleteBtn_Click;
            Controls.Add(deleteBtn);

            doneBtn = new Button
            {
                Text = "Done",
                Location = new Point(290, 110),
                Width = 70
            };
            doneBtn.Click += DoneBtn_Click;
            Controls.Add(doneBtn);
        }

        private void AddBtn_Click(object sender, EventArgs e)
        {
            if (!string.IsNullOrWhiteSpace(inputTask.Text))
            {
                taskList.Items.Add(inputTask.Text);
                inputTask.Clear();
            }
            else
            {
                MessageBox.Show("Please enter a task!");
            }
        }

        private void DeleteBtn_Click(object sender, EventArgs e)
        {
            if (taskList.SelectedItem != null)
            {
                taskList.Items.Remove(taskList.SelectedItem);
            }
            else
            {
                MessageBox.Show("Select a task to delete!");
            }
        }

        private void DoneBtn_Click(object sender, EventArgs e)
        {
            if (taskList.SelectedItem != null)
            {
                int index = taskList.SelectedIndex;
                string task = taskList.SelectedItem.ToString();

                if (!task.StartsWith("✔ "))
                {
                    taskList.Items[index] = "✔ " + task;
                }
            }
            else
            {
                MessageBox.Show("Select a task to mark as done!");
            }
        }

        #endregion
    }
}
