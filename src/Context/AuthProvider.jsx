import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from "firebase/auth";
import auth from "../Firebase/firebase.init";
import { authContext } from "./Context";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });

    return () => unSubscribe();
  }, []);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const handleGoogleSignIn = ()=>{
    const googleProvider = new GoogleAuthProvider()
    return signInWithPopup(auth, googleProvider)
  }
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const LogOutUser = () => signOut(auth);
  const userInfo = {
    user,
    setUser,
    createUser,
    handleGoogleSignIn,
    loginUser,
    LogOutUser,
    updateProfile
  };
  console.log(user);
  return (
    <authContext.Provider value={userInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
