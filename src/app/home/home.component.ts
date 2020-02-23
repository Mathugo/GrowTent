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
  value = 50;
  disable = false;
  humidity = 70;
  temp = 25;
  pwm = 40;
  cultureName =  '';
  USER = {
    firstname : '',
    lastname : '',
    cultureName : '',
    datePlant: '',
  };

  constructor(private db: AngularFirestore, public authService: AuthServiceService) {
  }

  getInfoUser() {
    let userId = firebase.auth().currentUser.uid;
    let ref = this.db.collection('users').doc(userId);
    let getDoc = ref.get().subscribe(value => {
      if (!value.exists){
        console.log('No such document ! ');
      } else {
        this.USER.firstname = value.data().firstname;
        this.USER.lastname = value.data().lastname;
        this.USER.cultureName = value.data().cultureName;
        console.log('CULTURE NAME : '+this.USER.cultureName);
        this.USER.datePlant = value.data().datePlant;
      }
    });
  }
  ngOnInit() {
  this.USER.cultureName = this.authService.getCultureName();
  console.log("On Init culture : "+this.USER.cultureName);
  }
  pourcentage(value: number) {
    if (value >= 1) {
      return value + '%';
    }
    return value;
  }

}
