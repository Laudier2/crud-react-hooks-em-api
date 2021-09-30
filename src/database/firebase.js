import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAXxZ2f_LJ2PebpIMQgwf1y3Dw03KfF-IA",
    authDomain: "users-265a8.firebaseapp.com",
    projectId: "users-265a8",
    storageBucket: "users-265a8.appspot.com",
    messagingSenderId: "242387125407",
    appId: "1:242387125407:web:8283722d657c81a88d8eaa",
    measurementId: "G-VZ52H2SMCC"
};

const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref()

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);