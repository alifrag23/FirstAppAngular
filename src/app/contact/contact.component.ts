import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  topStatuse: boolean = true;
  topStatuse2: boolean = true;
  topStatuse3: boolean = true;
  topStatuse4: boolean = true;
  write() {
    this.topStatuse = false;
  }
  write2() {
    this.topStatuse2 = false;
  }
  write3() {
    this.topStatuse3 = false;
  }
  write4() {
    this.topStatuse4 = false;
  }
}
