import { Component, OnInit } from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import * as firebase from 'firebase';
import {finalize} from 'rxjs/operators';
import {AuthServiceService} from '../service/auth-service.service';
import {transitionAnimation} from '../transition-animation';
@Component({
  selector: 'app-webcam',
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.css'],
  animations: [transitionAnimation]
})
export class WebcamComponent implements OnInit {
  currentImgUrl: string;
  cultureName: string;

  constructor(private storage: AngularFireStorage, private authService: AuthServiceService) { }

  ngOnInit() {
    this.DownloadImg();
    this.cultureName = this.authService.getCultureName();
  }

  DownloadImg() {
    const uid = firebase.auth().currentUser.uid;
    var storage = firebase.storage();
    var ref = storage.ref(uid + "/current.jpg");
    ref.getDownloadURL().then(url => {
      console.log("Url : "+url);
      this.currentImgUrl = url;
    });
}
}
