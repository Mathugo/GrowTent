import { Component } from '@angular/core';
import {slideInAnimation} from './route-animation';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent {
  title = 'GrowTent';

  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyAcRUgZHPKUJ-n5Ax14j_wPgkvIF9vJKp4",
      authDomain: "growtent-111ca.firebaseapp.com",
      databaseURL: "https://growtent-111ca.firebaseio.com",
      projectId: "growtent-111ca",
      storageBucket: "growtent-111ca.appspot.com",
      messagingSenderId: "205033270083",
      appId: "1:205033270083:web:e31d66f9a1ccac5c705df6",
      measurementId: "G-3ZXE38JVHE"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
}
