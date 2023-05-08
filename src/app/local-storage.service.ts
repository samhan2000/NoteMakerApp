import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  setItem(data: any) {
    console.log(data);
    localStorage.setItem(data.username, data.password);
  }

  checkItem(data: any): boolean {
    let m: boolean;
    const d = localStorage.getItem(data.username);
    if (d) {
      console.log('Username found');
      d == data.password ? (m = true) : (m = false);
    } else {
      m = false;
    }
    return m;
  }
}
