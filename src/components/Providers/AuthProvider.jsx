import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { PropTypes } from 'prop-types';
import auth from './../../firebase/firebase.config';

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword (auth, email, password)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

   /*  useEffect ( () => {
        const unSubscribe =   onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser );
            console.log('observing current user inside useEffect if AuthProvider', currentUser)
        });

        return () =>{
            unSubscribe();
        }

    }, []) */

// observe auth state change
     useEffect( () => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        console.log('Current value of the current user', currentUser)
        setUser(currentUser);
        setLoading(false);
    });
    return  () => {
        unSubscribe();
    }
}, [])


    const authInfo = { 
        user,
        createUser, 
        signInUser,
        logOut,
        loading,
        signInWithGoogle,
    }

    return (
        <AuthContext.Provider value = {authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes  = {
    children: PropTypes.node
}

/* 
* 1. create context and export it
* 2. set provider value
* 3. use the auth Provider in the main.jsx file
* 4. access children in the auth Provider component as children and use it in the middle of the provider
*/