import { Injectable } from '@angular/core';
import {SwUpdate} from "@angular/service-worker";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class LogUpdateService {
  constructor(private updates: SwUpdate, private snackBar: MatSnackBar) {
    updates.available.subscribe((event) => {
      console.log('current version is', event.current);
      console.log('available version is', event.available);
      this.snackBar.open('Update is available.', 'OK', {
        duration: 2000,
      });
      snackBar.open('Update is available.');
    });
    updates.activated.subscribe((event) => {
      console.log('old version was', event.previous);
      console.log('new version is', event.current);
      this.snackBar.open('App is updated.', 'OK', {
        duration: 2000,
      });
      snackBar.open('App is updated.');
    });
  }
}
