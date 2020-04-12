import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCN90dtQdxgDEH0YaSZR-7o9cKz9jknTdE",
  authDomain: "course-schedule-2791b.firebaseapp.com",
  databaseURL: "https://course-schedule-2791b.firebaseio.com",
  projectId: "course-schedule-2791b",
  storageBucket: "course-schedule-2791b.appspot.com",
  messagingSenderId: "913340910131",
  appId: "1:913340910131:web:8d737ae53958fa801a7146",
  measurementId: "G-0C7YJ8Z3F6"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
