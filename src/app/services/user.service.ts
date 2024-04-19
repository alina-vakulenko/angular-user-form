import { Injectable } from '@angular/core';
import { UserData } from './User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userData: UserData | null = null;

  constructor() {}

  setData(data: UserData) {
    this.userData = data;
  }

  getData() {
    return this.userData;
  }
}
