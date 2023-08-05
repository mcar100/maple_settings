// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'my-study-392608.firebaseapp.com',
  projectId: 'my-study-392608',
  storageBucket: 'my-study-392608.appspot.com',
  messagingSenderId: '560269877746',
  appId: '1:560269877746:web:7f46ad588ade45c50d0b6b',
  measurementId: 'G-217L1VK44Z',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
