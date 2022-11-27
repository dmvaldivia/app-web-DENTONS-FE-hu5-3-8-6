import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E31B';
  token = sessionStorage.getItem('token');
  user = sessionStorage.getItem('user');
}
