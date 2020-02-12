import { Component, OnInit } from '@angular/core';
import {ProgressSpinnerMode, ThemePalette} from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;
  disable = false;
  humidity = 70;
  temp = 25;
  pwm = 40;
  constructor() {
  }

  pourcentage(value: number)
  {
    if (value >= 1) {
      return value + "%";
    }
    return value;
  }
  ngOnInit() {
  }

}
