import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  images: string[] = [
    './assets/poert1.png',
    './assets/port2.png',
    './assets/port3.png',
    './assets/poert1.png',
    './assets/port2.png',
    './assets/port3.png',
  ];

  imageSrc: string = './assets/port2.png';
  imageSrc2: string = './assets/poert1.png';
  imageSrc3: string = './assets/port3.png';

  statuse: Boolean = false;
  // open(e: any): void {
  //   this.statuse = true;
  //   let result = e.target;
  //   console.log(result);

  //   // console.log(e.offsetX);
  // }
  close(): void {
    this.statuse = false;
    console.log('close!');
  }
}

