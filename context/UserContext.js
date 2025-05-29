import React, { createContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const loginFunc = async (email, password) => {
    try {
      if (email === "" || password === "") {
        throw error;
      }
      const userCredential = await signInWithEmailAndPassword(email, password);
      const user = userCredential.user;

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const userData = docSnap.data();
        return userData;
      }
    } catch (error) {}
  };

  const sinupFunc = async (email, password, nickname) => {
    try {
      if (email === "" || password === "" || nickname === "") {
        throw error;
      }

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        name: email,
        nickname: nickname,
      });

      const userDoc = await getDoc(doc(db, "users", userCredential.uid));

      return userDoc;
    } catch (error) {}
  };

  const exp = {
    loginFunc: loginFunc,
    sinupFunc: sinupFunc,
  };

  return <UserContext.Provider value={exp}>{children}</UserContext.Provider>;
};
