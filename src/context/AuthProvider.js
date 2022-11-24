import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const googleSignIn =()=>{
        setLoader(true)
        return signInWithPopup(auth, googleProvider);
    }
    const createUser =(email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser =(email, password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const resetPassword =(email)=>{
        sendPasswordResetEmail(auth, email)
    }
    const signOutUser=()=>{
        return signOut(auth);
    }
    const userProfileUpdate =(userProfile)=>{
        return updateProfile(auth.currentUser,userProfile);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser);
            setLoader(false)
        });

        return () => unsubscribe();
    },[])
    const authInfo = {
        createUser, 
        googleSignIn,
        loginUser,
        resetPassword,
        user,
        loader,
        setLoader,
        signOutUser,
        userProfileUpdate
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;