// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4J8EM_kNE-X_Yz4om79Qe8Agp0Xcm9ic",
  authDomain: "pushnotifications-51aaf.firebaseapp.com",
  projectId: "pushnotifications-51aaf",
  storageBucket: "pushnotifications-51aaf.appspot.com",
  messagingSenderId: "643923158867",
  appId: "1:643923158867:web:fef3ae158a9534980523a6",
  measurementId: "G-J7PSVDT6ZX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Cloud Messaging and get a reference to the service
export const messaging = getMessaging(app);

export const generateToken = async () => {
  const permission = await Notification.requestPermission();
  console.log(permission);

  if (permission === "granted") {
    const token = await getToken(messaging, {
      vapidKey:
        "BKiX9hTfyjFGtzRSCzkO3O8Ba0vj2sJm5YTpkmJjbRGom2jfsxXDg9wSAYmaxPPFKwTWrB9pxj_TTz5YEiae66A",
    });
    console.log(token);
  }
};
