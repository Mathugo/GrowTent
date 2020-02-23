import { Component, OnInit } from '@angular/core';
import {ProgressSpinnerMode, ThemePalette} from '@angular/material';
import {AngularFirestore} from '@angular/fire/firestore';
import {transitionAnimation} from '../transition-animation';
import {AuthServiceService} from '../service/auth-service.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [transitionAnimation]

})
export class HomeComponent implements OnInit {
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  disable = false;
  USER = {
    firstname : '',
    lastname : '',
    cultureName : '',
    datePlant: Date,
    temperature: 0,
    humidity: 0,
    pressure: 0,
    fan: 0,
  };

  constructor(private db: AngularFirestore, public authService: AuthServiceService) {
  }

  ngOnInit() {
  this.USER = this.authService.getUserProfile();
  console.log('User profile done');
  }
  pourcentage(value: number): string {
   return value + '%';
  }
  update_fan() {
    console.log('MOVE');
    const uid = firebase.auth().currentUser.uid;
    const ref = this.db.collection('users').doc(uid);
    console.log('Collection receive ');
    ref.update({
      fan: this.USER.fan
    });
    console.log('Fan updated : '+this.USER.fan);
  }
}
