import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ]
})
export class LoginComponent {

  emailValue;
  passwordValue;
  type: string;

  constructor(private route: Router) {}

  isOrganizationAndCAT() {
    return this.type === 'Orgao' || this.type === 'CAT';
  }

  isCompany() {
    return this.type === 'Company';
  }

  onChangeType(select) {
    this.type = select.value;
  }

  signUp(event) {
    event.preventDefault();
    localStorage.setItem('userType', this.type);
    this.route.navigateByUrl('/information');
  }

  isInvalid() {
    if (!this.emailValue || !this.passwordValue || this.type === 'Escolha' || !this.type) {
      return true;
    }
  }

}
