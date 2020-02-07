import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  form = {
    email: '',
    password: ''
  }
  constructor() { }
  onClick() {
    console.log("Login : "+this.form.email+ "Password : "+this.form.password);
    firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password).catch(function(error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log("Error code : "+error.code);
    });

  }
  ngOnInit() {
  }

}
