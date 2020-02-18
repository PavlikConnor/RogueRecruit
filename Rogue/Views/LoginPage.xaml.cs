using System;
using System.Collections.Generic;
using Rogue.Models;
using Xamarin.Forms;

namespace Rogue.Views
{
    public partial class LoginPage : ContentPage
    {
        public LoginPage()
        {
            InitializeComponent();
            Init();
        }

        void Init()
        {
            BackgroundColor = Constants.BackgroundColor;
            Lbl_Username.TextColor = Constants.MainTextColor;
            Lbl_Password.TextColor = Constants.MainTextColor;
            ActivitySpinner.IsVisible = false;
            LoginIcon.HeightRequest = Constants.LoginIconHeight;

            Entry_Username.Completed += (s, e) => Entry_Password.Focus();
            Entry_Password.Completed += (s, e) => SignInProcedure(s, e);
        }


        void SignInProcedure(object sender, EventArgs e)
        {
            User user = new User(Entry_Username.Text, Entry_Password.Text);
            if (user.CheckInfo())
            {
                DisplayAlert("Login", "Login Success", "Okay");
            }
            else
            {
                DisplayAlert("Login", "Login Unsuccessful, Please check your username or password", "Okay");
            }
        }
    }
}
