import {Component, OnInit, ViewChild} from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatStepper} from '@angular/material';
import {AuthServiceService} from '../service/auth-service.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class ScheduleComponent implements OnInit {
  @ViewChild('stepper') stepper: MatStepper;
  isLinear: boolean;
  isEditable: boolean;
  stateGrowth: number;
  selectedIndex: number;
  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {
    this.isLinear = false;
    this.isEditable = true;
    this.stateGrowth = this.authService.getStateGrowth();
    console.log("STATE : "+this.stateGrowth);
    this.selectedIndex = this.stateGrowth;
    this.isLinear = true;
    this.isEditable = false;
  }
  move(index: number) {
    this.stepper.selectedIndex = index;
  }

  selectionChange(stepper: MatStepper)
  {
    console.log("Selection changed");
    console.log("Index selection changed : "+this.stepper.selectedIndex);
    this.authService.updateStateGrowth(this.stepper.selectedIndex + 1);
  }
  next(): void {
    this.stepper.linear = false;
    this.stepper.selectedIndex++;
    console.log("Index next: "+this.stepper.selectedIndex);
    this.stepper.linear = true;
  }
  reset(): void {
    console.log("Reset !");
    this.stepper.linear = false;
    this.stepper.reset();
    this.stepper.linear = true;
    this.isEditable = false;
    this.authService.updateStateGrowth(0);
  }
}
