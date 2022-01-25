import { Injectable } from '@angular/core';
import { doc, setDoc, getFirestore, orderBy, query, collection, onSnapshot, addDoc} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AppService{

  attemps: number = 0;
  speed: string = '0:00';
  time: number = 0;
  rankingUsers: Array<any> = [];
  allCards: Array<any>;
  cards: Array<any>;
  randomId: Array<number>;
  logged: boolean = false;
  db: any = getFirestore();
  user_name: any = 'Guest';
  user_uid: string = '';

  constructor() {
    this.randomId = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
    this.allCards = [
      {id: 1, shape: 'fas fa-star'},
      {id: 2, shape: 'far fa-circle'},
      {id: 3, shape: 'fal fa-asterisk'},
      {id: 4, shape: 'far fa-acorn'},
      {id: 5, shape: 'fal fa-triangle'},
      {id: 6, shape: 'fal fa-square'},
      {id: 7, shape: 'fal fa-carrot'},
      {id: 8, shape: 'fas fa-apple-alt'},
      {id: 9, shape: 'fal fa-book-alt'},
      {id: 1, shape: 'fas fa-star'},
      {id: 2, shape: 'far fa-circle'},
      {id: 3, shape: 'fal fa-asterisk'},
      {id: 4, shape: 'far fa-acorn'},
      {id: 5, shape: 'fal fa-triangle'},
      {id: 6, shape: 'fal fa-square'},
      {id: 7, shape: 'fal fa-carrot'},
      {id: 8, shape: 'fas fa-apple-alt'},
      {id: 9, shape: 'fal fa-book-alt'},
    ]
    this.cards = [];
  }

  getRandomId(){
    let i = this.randomId.length;
    let j, k;
    for (i; i; i--){
      j = Math.floor(Math.random() * i);
      k = this.randomId[i - 1];
      this.randomId[i - 1] = this.randomId[j];
      this.randomId[j] = k;
    }
    this.pushCards();
  }

  pushCards(){
    this.cards = [];
    for(let i = 0; i < 18; i++){
      this.cards.push(this.allCards[this.randomId[i]])
    }
  }

  getCurrentUser() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.logged = true;
        this.user_name = user.displayName;
        this.user_uid = user.uid;
        console.log(user.displayName)
      } else {
        this.logged = false;
        this.user_name = 'Guest';
        this.user_uid = '';
      }
    });
  }

  signOut() {
    getAuth().signOut();
    this.getCurrentUser();
  }

  async addRankingData(){
    let user_data = {
      name: this.user_name,
      time: this.time,
      speed: this.speed,
      attemps: this.attemps
    }

    const rankingCollection = collection(this.db, 'ranking')
    const q = query(rankingCollection, orderBy('attemps', 'asc'))

    if (this.user_uid != '') {
      onSnapshot(q, (snapchot => {
        snapchot.docs.forEach(async (d) => {
          let data = d.data();
            if (data['time'] > this.time || data['attemps'] > this.attemps) {
              if (d.id === this.user_uid) {
                await setDoc(doc(this.db, 'ranking', this.user_uid), user_data)
              }
            }
        })
      }))
    } else {
      await addDoc(collection(this.db, 'ranking'), user_data);
    }
  }

  loadRanking() {
    const rankingCollection = collection(this.db, 'ranking')
    const q = query(rankingCollection, orderBy('attemps', 'asc'))

    onSnapshot(q, (snapchot => {
      this.rankingUsers = [];
      snapchot.docs.forEach((doc) => {
        this.rankingUsers.push(doc.data())
      })
    }))
    console.log(this.rankingUsers)
  }
}
