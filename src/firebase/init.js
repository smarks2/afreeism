import firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCpJvxXKqFWdsRU0QRv0zdmSuKPzb1pac4',
  authDomain: 'afreeism-01.firebaseapp.com',
  databaseURL: 'https://afreeism-01.firebaseio.com',
  projectId: 'afreeism-01',
  storageBucket: '',
  messagingSenderId: '898819929423',
  appId: '1:898819929423:web:f9970ff089d8efc8',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();
