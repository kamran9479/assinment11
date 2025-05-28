import { createContext, useEffect, useState } from "react";
import auth from './../firebase/firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

export const serverURL = import.meta.env.VITE_url

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const googleProvider = new GoogleAuthProvider();

    const [user,setUser]= useState(null)
    const [loading, setLoading]=useState(true)
    console.log('logged in :' ,user)
    
    const createUser = (email,password)=> {
        setLoading(true)   
        return createUserWithEmailAndPassword(auth,email, password)
    }

    const signIn = (email,password)=>{
        setLoading(true) 
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signOutUser = ()=>{
        signOut(auth)
    }

    const updateUserProfile = (update)=>{
        return updateProfile(auth.currentUser, update)
    }


    const googleSignIn = ()=>{
        return signInWithPopup(auth,googleProvider)
    }

    useEffect(()=>{
        const unsub = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false) 
           
        })
        return ()=>{
            unsub()
        }
    },[])

    const authData = {
        createUser,
        signIn,
        signOutUser,
        loading,
        user,
        updateUserProfile,
        googleSignIn
        
        
    }

    return (

        <AuthContext.Provider value={authData}>

            {
                children
            }
        
        </AuthContext.Provider>
        
    );
};

export default AuthProvider;