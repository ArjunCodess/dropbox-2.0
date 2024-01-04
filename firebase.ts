import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAj3WXdGqfrnLDfrFAph_yHyvJ3beNi3wU",
    authDomain: "dropbox2-e7bca.firebaseapp.com",
    projectId: "dropbox2-e7bca",
    storageBucket: "dropbox2-e7bca.appspot.com",
    messagingSenderId: "239110548084",
    appId: "1:239110548084:web:b9111f371e835eb0733f21",
    measurementId: "G-DDERFV7Z35"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig); // if the app is already initialized, just return. Otherwise initialize the app. i.e. singleton instance pattern
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };