import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import {resolve} from 'url';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  user;
  email = '';
  isLogged = false;
  redirectUrl: string;
  USER = {
    firstname : '',
    lastname : '',
    cultureName : '',
    datePlant: '',
  };

  constructor(public router: Router, private db: AngularFirestore) {
  }
  getInfoUser(): Promise<void> {
    return new Promise<any>(resolve => {
      const userId = firebase.auth().currentUser.uid;
      const ref = this.db.collection('users').doc(userId);
      const getDoc = ref.get().subscribe(value => {
      if (!value.exists) {
        console.log('No such document ! ');
        resolve('Error getInfo');
      } else {
        this.USER.firstname = value.data().firstname;
        this.USER.lastname = value.data().lastname;
        this.USER.cultureName = value.data().cultureName;
        console.log('Data received');
        this.USER.datePlant = value.data().datePlant;
        resolve('Get OK');
      }
    });
    });
  }
  signup(email: string, password: string) {}

  getFirstName() { return this.USER.firstname; }
  getLastName() { return this.USER.lastname; }
  getCultureName() { return this.USER.cultureName; }
  getdatePlant() { return this.USER.datePlant; }

  logout() {
    firebase.auth().signOut()
      .then(value => {
      this.isLogged = false;
      this.router.navigate(['signin']);
      console.log('Sucessfull ! ');
      })
      .catch(err => {
        console.log('Error signout');
        this.isLogged = false;
        this.router.navigate(['signin']);
      });
  }
}

