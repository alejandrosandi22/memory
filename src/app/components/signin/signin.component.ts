import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(public app: AppService) { }

  ngOnInit(): void {
  }

  signInWithGoogle() {
    const googleProvider = new GoogleAuthProvider();

    const auth = getAuth()
    signInWithPopup(auth, googleProvider)
    .then(() => {
      console.log('Welcome')
      location.replace('/game')
    })
    .catch((error) => {
      console.log(error)
    })
  }

}
