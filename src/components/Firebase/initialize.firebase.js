import firebaseConfig from "./firebase.confing";
import { initializeApp } from "firebase/app";
const initializeAuthentication = ()=>{
    initializeApp(firebaseConfig);
}
export default initializeAuthentication;