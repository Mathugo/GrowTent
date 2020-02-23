import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, UrlSegment} from '@angular/router';
import { Location } from '@angular/common';
import {AuthServiceService} from '../service/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  route = '';
  firstname = '';
  lastname = '';
  constructor(private location: Location, private router: Router, public authService: AuthServiceService) {
    this.router.events.subscribe(val => {
      console.log('Before test');
      if (this.location.path() !== '') {
        this.route = this.location.path();
        this.route = this.route.replace('/', '');
      } else {
        this.route = 'Home';
      }
      console.log('ROUTE : ' + this.route);
    });
    if (this.route === '') {this.route = 'home'; }
  }

  ngOnInit() {
    this.firstname = this.authService.getFirstName();
    this.lastname = this.authService.getLastName();
  }
}
