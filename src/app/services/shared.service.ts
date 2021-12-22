import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public static instance : SharedService;
  showTemplate = new EventEmitter<boolean>();
  user: User;
  token: string;

  constructor() {
    return SharedService.instance = SharedService.instance || this;
  }

  public static getInstance() {
    if(this.instance == null) {
      this.instance = new SharedService();
    }
    return this.instance;
  }

  isLoggedIn(): boolean {
    if(this.user == null) {
      return false;
    }
    return this.user.email != '';
  }

}
