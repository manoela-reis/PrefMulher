import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './navbar.component.html',
  styleUrls: [ './navbar.component.scss' ]
})
export class NavbarComponent {

  constructor(private route: Router) {}

  logOut() {
    localStorage.removeItem('userType');
    this.route.navigateByUrl('/');
  }

}
