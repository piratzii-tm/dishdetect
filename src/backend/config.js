import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBzcYO4KAOPShn2ftp1hP9vIVErzHwWjpE",
  authDomain: "dishdetect.firebaseapp.com",
  projectId: "dishdetect",
  storageBucket: "dishdetect.appspot.com",
  messagingSenderId: "1060466332998",
  appId: "1:1060466332998:web:fff500cd2fabf809964147",
  measurementId: "G-KPX3KSBDTH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

const database = getDatabase(app);

export { auth, database };
