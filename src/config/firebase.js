import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

let firebaseConfig = {
  apiKey: 'AIzaSyCiujDFmA6sDwHETI0BmMpL1VCXKGfZ-cw',
  authDomain: 'caramel-banner-234907.firebaseapp.com',
  databaseURL: 'https://caramel-banner-234907.firebaseio.com',
  projectId: 'caramel-banner-234907',
  storageBucket: 'caramel-banner-234907.appspot.com',
  messagingSenderId: '427137384714',
  appId: '1:427137384714:web:b64bd54c9b3898ebb4baf3',
};

firebase.initializeApp(firebaseConfig);

export const imageStorage = firebase.storage();
export const imageFirestore = firebase.firestore();
