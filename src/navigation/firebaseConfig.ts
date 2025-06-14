import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


export const firebaseConfig = {
  apiKey: "AIzaSyAzA8OaJS8Ly1T-j6c48pakGo8WcTLXGTU",
  authDomain: "asistencias-app-e5f7f.firebaseapp.com",
  projectId: "asistencias-app-e5f7f",
  storageBucket: "asistencias-app-e5f7f.firebasestorage.app",
  messagingSenderId: "257233313465",
  appId: "1:257233313465:web:dacbbf851d940f65858568",
  measurementId: "G-DH9KMR5CCF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);