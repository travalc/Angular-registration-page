import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;
  users: User[];
  successMessage: string;
  constructor()
  {
    this.user = new User();
    this.users = [];
  }

  onSubmit()
  {
    this.users.push(this.user);
    this.successMessage = `Thank you for your registration, ${this.user.FirstName} ${this.user.LastName}, a confirmation email has been sent to ${this.user.Email} Feeling lucky: ${this.user.Lucky}`;
    this.user = new User();
  }
}
