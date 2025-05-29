import React, { createContext, useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const loginFunc = async (email, password, navigation) => {
    try {
      if (email === "" || password === "") {
        throw error;
      }
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const userData = docSnap.data();
        return userData;
      }
    } catch (error) {
      console.log("Erro ao criar conta:", error);
    }
  };

  const sinupFunc = async (email, password, nickname, navigation) => {
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
      console.log("User: ", user);

      await setDoc(doc(db, "users", user.uid), {
        name: email,
        nickname: nickname,
      });

      const userDoc = await getDoc(doc(db, "users", user.uid));

      return userDoc.data();
    } catch (error) {
      console.log("Erro ao criar conta:", error);
    }
  };

  const exp = {
    loginFunc: loginFunc,
    sinupFunc: sinupFunc,
  };

  return(
    <UserContext.Provider value={exp}>
      {children}
    </UserContext.Provider>
  ) 
};
