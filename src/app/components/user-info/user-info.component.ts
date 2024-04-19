import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { UserData } from '../../services/User';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss',
})
export class UserInfoComponent implements OnInit {
  userData: UserData | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData() {
    this.userData = this.userService.getData();
  }
}
