import initializeAuthentication from "../components/Firebase/initialize.firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
initializeAuthentication();
const useFirebase = ()=>{
    const [user, setUser] =  useState({})
    const [error, setError] = useState('')
    const auth = getAuth();
    
    

    const handleGoogleSignIN = ()=>{
        const googleProvider = new GoogleAuthProvider()
        signInWithPopup(auth, googleProvider)
        .then(result=>{
                setUser(result.user)
                console.log(result.user)
        })
        .catch(error=>{
            setError(error.massage)
        })
    }
    const logOut = ()=>{
        signOut(auth)
        .then( ()=>{ 
            setUser({})
        }).catch()
    }
    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if(user){
                console.log('inside', user)
                setUser(user)
            }
        })
    },[])
    return{
        handleGoogleSignIN,
        user,
        error,
        logOut
    }
}
export default useFirebase;