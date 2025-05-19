import { createContext, useEffect, useState } from "react";
import auth from './../firebase/firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

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