import React, { use, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../Firebase.config";
import instance from "../Axios/instance";

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [librarian, setLibrarian] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleSignIn = async () => {
    setIsLoading(true);

    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful.");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const reset = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  useEffect(() => {
    if (user && user.email) {
      instance
        .get(`/users?email=${user.email}`)
        .then((data) => {
          console.log(data);
          setIsLoading(false);
          setLibrarian(data.data.librarian);
          setAdmin(data.data.admin);
        })
        .catch((err) => {
          setIsLoading(false);
        });
    } else {
      setLibrarian(false);
      setAdmin(false);
    }
  }, [user]);
  console.log(admin, librarian);
  const update = async (name, image) => {
    if (auth.currentUser) {
      setIsLoading(true);
      try {
        await updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: image,
        });

        setUser({ ...auth.currentUser });
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
  };
  const authInfo = {
    signUp,
    signIn,
    user,
    logOut,
    reset,
    isLoading,
    update,
    googleSignIn,
    librarian,
    admin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
