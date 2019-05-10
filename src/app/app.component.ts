import { Component } from '@angular/core';
import * as firebase from  'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blogApp';

  constructor() {
  const firebaseConfig = {
    apiKey: "AIzaSyCBVfn8QobVqHdRaTZKI0aaCTs9iNm2psY",
    authDomain: "blogapp-1b747.firebaseapp.com",
    databaseURL: "https://blogapp-1b747.firebaseio.com",
    projectId: "blogapp-1b747",
    storageBucket: "blogapp-1b747.appspot.com",
    messagingSenderId: "574209850474",
  
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}
}
