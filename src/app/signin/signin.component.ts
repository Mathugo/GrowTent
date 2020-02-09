import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {MatSnackBar, MatSnackBarModule} from '@angular/material';
import { AuthServiceService} from '../service/auth-service.service';
import {Router} from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  form = {
    email: '',
    password: ''
  };

  constructor(private _snackBar: MatSnackBar, public authService: AuthServiceService, private router: Router) {
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  Login() {
    if (this.form.email === '' || this.form.password === '') {
      this.openSnackBar('Please fill out the form', 'Close');
    } else {
      firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(value => {
          this.authService.isLogged = true;
          this.router.navigate(['home']);
        })
        .catch(err => {
          this.openSnackBar("Error please try again", "Close");
          this.form.email = this.form.password = "";
        });
    }
  }
  ngOnInit() {
  }

}
