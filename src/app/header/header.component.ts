import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  openLoginForm() {
    console.log('Opening login form');
  }
  navBrand: string = 'Bake My Cake';
}
