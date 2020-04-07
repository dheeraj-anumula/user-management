import { Component } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user/user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user-management';
}
