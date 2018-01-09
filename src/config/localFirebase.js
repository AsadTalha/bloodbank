import * as firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyCjDFJ94K_RLJ8w2DbwrBQDQYugx7Lc8YA',
  authDomain: 'bloodbank-808bb.firebaseapp.com',
  databaseURL: 'https://bloodbank-808bb.firebaseio.com',
  projectId: 'bloodbank-808bb',
  storageBucket: '',
  messagingSenderId: '930266300241',
};
export const firebaseApp = firebase.initializeApp(config);
