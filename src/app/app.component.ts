import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AuthComponent, UserInfoComponent],
  providers: [UserService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'PB Test Task';

  constructor(private userService: UserService) {}
}
