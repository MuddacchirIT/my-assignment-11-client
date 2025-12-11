import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase.init.js/firebase.init";
import { AuthContext } from "./AuthContext";
const AuthProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const authInfo = {
    registerUser,
    signInUser,
    show,
    setShow,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
