import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'nayan1';
  mypath = 'assets\\image\\logo.jpg';
  message = '';
  greetUser() {
    return 'Welcome Nayan';
  }
}
