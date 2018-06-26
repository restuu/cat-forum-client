import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyCoSdu-v3hxlFdAQ-mKknBqnQ2HZKk8nvo",
  authDomain: "cat-forum-30190.firebaseapp.com",
  databaseURL: "https://cat-forum-30190.firebaseio.com",
  projectId: "cat-forum-30190",
  storageBucket: "",
  messagingSenderId: "246793326692"
};
firebase.initializeApp(config);
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(() => console.log('persisting login'))
  .catch(err => console.log(err))

export default firebase