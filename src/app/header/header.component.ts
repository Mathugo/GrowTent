import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, UrlSegment} from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  route: string;

  constructor(location: Location, router: Router) {
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
