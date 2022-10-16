import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const firebaseConfig = {
  apiKey: "AIzaSyA9lpqMQj-NWX_GAjXUPxxeS9ZPDT2wIv8",
  authDomain: "cart-4beab.firebaseapp.com",
  projectId: "cart-4beab",
  storageBucket: "cart-4beab.appspot.com",
  messagingSenderId: "246436392548",
  appId: "1:246436392548:web:bc471c7d96b7fc95efb971"
};

firebase.initializeApp(firebaseConfig);

