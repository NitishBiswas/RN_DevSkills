import * as firebase from "firebase";
import '@firebase/auth'
import '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDYVzHC2EXyclECnHbn1uW7rOWJm4KybOg",
    authDomain: "employee-records-baf8e.firebaseapp.com",
    projectId: "employee-records-baf8e",
    storageBucket: "employee-records-baf8e.appspot.com",
    messagingSenderId: "58913056973",
    appId: "1:58913056973:web:672a19ad7b315a0474a184"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase }