import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, UrlSegment} from '@angular/router';
import { Location } from '@angular/common';
import {AuthServiceService} from '../service/auth-service.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  route: string;

  constructor(location: Location, router: Router, public authService: AuthServiceService) {
    router.events.subscribe(val => {
      if (location.path() !== "") {
        this.route = location.path();
        this.route = this.route.replace("/","");
      } else {
        this.route = "Home";
      }
    });
  }

  ngOnInit() {
  }

}
