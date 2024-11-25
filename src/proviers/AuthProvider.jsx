import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.init';

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {


  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const signInWithGoogle = () =>{
    return signInWithPopup(auth, googleProvider);
  }

  const name = 'kanon dev';
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  }

  // onAuthStateChanged(auth, currentUser =>{
  //   if(currentUser){
  //     console.log('currently logged user', currentUser)
  //     setUser(currentUser);
  //   }
  //   else {
  //     console.log('No user Logged in');
  //     setUser(null);
  //   }
  // })

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      console.log('current User', currentUser);
      setUser(currentUser);
      setLoading(false);

    })

    return () => {
      unSubscribe();
    }

  }, [])


  const authInfo = {
    name,
    user,
    loading,
    signInWithGoogle,
    createUser,
    signInUser,
    signOutUser
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}

    </AuthContext.Provider>
  );
};

export default AuthProvider;