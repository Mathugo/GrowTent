import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import {resolve} from 'url';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  user;
  email = '';
  isLogged = false;
  redirectUrl: string;

  constructor(public router: Router) {
  }

  signup(email: string, password: string) {
  }

  login(email_: string, password: string) {
      firebase.auth().signInWithEmailAndPassword(email_, password)
        .then(value => {
          console.log("Nice it worked ! ");
          this.isLogged = true;
          this.email = email_;
        })
        .catch(err => {
          console.log("Something went wrong: ", err.message);
          this.isLogged = false;
        });
  }

  logout() {
    firebase.auth().signOut()
      .then(value => {
      this.isLogged = false;
      this.router.navigate(['signin']);
      console.log("Sucessfull ! ");
      })
      .catch(err => {
        console.log("Error signout");
        this.isLogged = false;
        this.router.navigate(['signin']);
      });
  }
  getCurrentUser() {
    return firebase.auth().currentUser
  }
  //https://firebase.google.com/docs/auth/web/manage-users#get_the_currently_signed-in_user
  verifyConnection() {
    if (!firebase.auth().currentUser) {
      this.router.navigate(['signin']);
    }
  }
}
