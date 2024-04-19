import { Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { UserInfoComponent } from './components/user-info/user-info.component';

export const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'profile', component: UserInfoComponent },
];
