import { Component, HostBinding, HostListener } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  // @HostBinding('class.new-Nav') newNav: boolean;
  // @HostListener('window:scroll') onScroll() {
  //   if (window.screenY >= 50) {
  //     this.newNav=true;
  //   } else {
  //     this.newNav = true;

  //   }
  // }
  statuse: boolean = false;
  
}
