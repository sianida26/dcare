import { initializeApp } from 'firebase/app';

let firebaseConfig = {
    apiKey: "AIzaSyAVMegeJ_gnpV_mPH2FtMTI6MIjFGmqNNI",
    authDomain: "disability-care.firebaseapp.com",
    projectId: "disability-care",
    storageBucket: "disability-care.appspot.com",
    messagingSenderId: "895902707826",
    appId: "1:895902707826:web:5c3f4f7608b478857392eb"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp