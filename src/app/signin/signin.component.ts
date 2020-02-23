import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {MatSnackBar, MatSnackBarModule} from '@angular/material';
import { AuthServiceService} from '../service/auth-service.service';
import {Router} from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import {transitionAnimation} from '../transition-animation';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  animations: [transitionAnimation]
})

export class SigninComponent implements OnInit {
  form = {
    email: '',
    password: ''
  };
  loading: boolean;
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
      this.loading = true;
      firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(value => {
          this.authService.getInfoUser().then( () => {
            console.log('Now : ' + this.authService.getCultureName());
            this.authService.isLogged = true;
            this.router.navigate(['home']);
            this.loading = false;
          });
        })
        .catch(err => {
          this.openSnackBar('Error please try again', 'Close');
          this.form.email = this.form.password = '';
          this.loading = false;
        });
    }
  }
  ngOnInit() {
  }

}
