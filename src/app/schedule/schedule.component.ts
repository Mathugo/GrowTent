import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatStepper} from '@angular/material';
import {AuthServiceService} from '../service/auth-service.service';
import {transitionAnimation} from '../transition-animation';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }],
  animations: [transitionAnimation]
})
export class ScheduleComponent implements OnInit {
  @ViewChild('stepper') stepper: MatStepper;

  screenHeight: number;
  screenWidth: number;
  isLinear: boolean;
  isEditable: boolean;
  stateGrowth: number;
  selectedIndex: number;
  plusDay: number;
  innerWidth: any;



  constructor(private authService: AuthServiceService) {
    this.getScreenSize();
  }
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    console.log(this.screenHeight, this.screenWidth);
  }
  ngOnInit(): void {
    this.isLinear = false;
    this.isEditable = true;
    this.stateGrowth = this.authService.getStateGrowth();
    console.log('STATE : ' + this.stateGrowth);
    this.selectedIndex = this.stateGrowth;
    this.isLinear = true;
    this.isEditable = false;
    console.log('Day + ' + Math.round(this.getPlusDay()));
    this.plusDay = Math.round(this.getPlusDay());
    this.innerWidth = window.innerWidth;
    console.log("Width: " + this.innerWidth);

  }
  move(index: number) {
    this.stepper.selectedIndex = index;
  }

  /*
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }*/
  getPlusDay() {
    const DatePlant = this.authService.getDatePlant();
    const currentDate = new Date();
    return (currentDate.getTime() - new Date(DatePlant.toString()).getTime()) / ( 1000 * 24 * 60 * 60);
  }
  selectionChange(stepper: MatStepper) {
    console.log('Selection changed');
    console.log('Index selection changed : ' + this.stepper.selectedIndex);
    this.authService.updateStateGrowth(this.stepper.selectedIndex + 1);
  }
  next(): void {
    this.stepper.linear = false;
    this.stepper.selectedIndex++;
    console.log('Index next: ' + this.stepper.selectedIndex);
    this.stepper.linear = true;
  }
  reset(): void {
    console.log('Reset !');
    this.stepper.linear = false;
    this.stepper.reset();
    this.stepper.linear = true;
    this.isEditable = false;
    this.authService.updateStateGrowth(0);
  }
}
