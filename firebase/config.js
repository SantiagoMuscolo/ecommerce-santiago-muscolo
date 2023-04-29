import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDNZ36J08kWmSCDfBF0nDql-T6lGdQ0pAs",
    authDomain: "moukkai-ecommerce.firebaseapp.com",
    projectId: "moukkai-ecommerce",
    storageBucket: "moukkai-ecommerce.appspot.com",
    messagingSenderId: "283332423709",
    appId: "1:283332423709:web:5260882974aefa7283d6f4",
    measurementId: "G-ZPXK6YTNBK"
};

const app = initializeApp(firebaseConfig);
export const initFirebase = () => app