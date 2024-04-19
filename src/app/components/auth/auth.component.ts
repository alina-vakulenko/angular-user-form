import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { showErrorStyle, showErrorMessage } from '../../utils/form-utils';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  authForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    skipEmail: new FormControl(false),
  });

  constructor(private userService: UserService, private router: Router) {
    this.authForm.get('skipEmail')?.valueChanges.subscribe((checked) => {
      const emailControl = this.authForm.get('email');
      if (checked) {
        emailControl?.clearValidators();
        this.authForm.get('email')?.disable();
      } else {
        emailControl?.setValidators([Validators.required, Validators.email]);
        this.authForm.get('email')?.enable();
      }
      emailControl?.updateValueAndValidity();
    });
  }

  onSubmit(): void {
    const { firstName, lastName, email } = this.authForm.value;
    this.userService.setData({
      firstName: firstName ?? '',
      lastName: lastName ?? '',
      email: email ?? '',
    });
    this.router.navigate(['/profile']);
  }

  showErrorStyle(controlName: string): boolean {
    return showErrorStyle(this.authForm.get(controlName));
  }

  showErrorMessage(controlName: string, errorName: string): boolean {
    return showErrorMessage(this.authForm.get(controlName), errorName);
  }
}
