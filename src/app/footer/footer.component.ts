import { Component, OnInit, VERSION } from '@angular/core';
import {transitionAnimation} from '../transition-animation';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  animations: [transitionAnimation]
})
export class FooterComponent implements OnInit {
  ngVersion: string = VERSION.full;
  matVersion: string = '5.1.0'
  constructor() { }

  ngOnInit(): void {
  }

}
