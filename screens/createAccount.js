import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from "../firebaseConfig";
import { setDoc, doc } from "firebase/firestore";
import InputText from "../components/InputText";
import CustomBtn from "../components/CustomBtn";

export default function CreateAccount({navigation}){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');

  const handleSinup = async () => {
    try {
      if(email === '' || password === '' || nickname === ''){
        throw error;
      }

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        name: email, 
        nickname: nickname
      });
    }
    catch(error){

    }
  }

  return (
    <SafeAreaView style={{ paddingTop: 92, marginRight: 12, marginLeft: 12 }}>
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 32, color: "#F5F5F5" }}>
              Criar conta
            </Text>
          </View>
          <View style={{ flex: 1, gap: 20 }}>
            <InputText
              text={"Email"}
              placeholder={"exemplo123@gmail.com"}
              password={false}
              setValue={setEmail}
            />
            <InputText
              text={"Senha"}
              placeholder={"*********"}
              password={true}
              setValue={setPassword}
            />
            <InputText
              text={"Apelido"}
              placeholder={"exemplo"}
              setValue={setNickname}
            />
            <CustomBtn tittle={"criar conta"} action={handleSinup}/>
          </View>
        </View>
        <View style={{display: 'flex', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={{ color: '#F5F5F5', fontWeight: 500}}>
                  Voltar
              </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        gap: 96
    },
    btn:{
        backgroundColor: 'transparent',

    }
});