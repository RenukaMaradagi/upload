import { Component } from '@angular/core';
// we should need to imort localforage
import * as localforage from 'localforage';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    localforage.setItem('localforage', 'localforage value');
    setTimeout(() => {
      localforage.getItem('localforage').then((e) => {
       console.log(e);
      });
    }, 5000);
    setTimeout( async () => {
      const RES = await localforage.getItem('localforage');
      console.log('RES', RES);
    }, 10000);
  }
  }
