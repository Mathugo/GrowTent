import { Component, OnInit } from '@angular/core';
import { AuthServiceService} from '../service/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  humidity = 70;
  temp = 25;
  pwm = 40;
  constructor() {
  }

  pourcentage(value: number)
  {
    return value+"%";
  }
  ngOnInit() {
  }

}
