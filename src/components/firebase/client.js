import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
        apiKey: "AIzaSyCB3uQE7JoRNQPPPmUOwy0dEoJCGafkcwc",
        authDomain: "ecommerce-coderhouse-6c072.firebaseapp.com",
        projectId: "ecommerce-coderhouse-6c072",
        storageBucket: "ecommerce-coderhouse-6c072.appspot.com",
        messagingSenderId: "32656307803",
        appId: "1:32656307803:web:db3e68c500c08a0fecf17e"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);