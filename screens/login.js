import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React, { useState, useContext} from 'react';
import InputText from "../components/InputText";
import CustomBtn from "../components/CustomBtn";
import { UserContext } from "../context/UserContext";

export default function Login({navigation}){
  const { loginFunc } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try{
      await loginFunc(email, password, navigation);
    }
    catch(error){

    }
  }

  return (
    <SafeAreaView style={{ paddingTop: 92, marginRight: 12, marginLeft: 12 }}>
      <View style={styles.container}>
        <View style={{ flex: 1, gap: 40 }}>
          <View style={{ alignItems: "center" }}>
              <Text style={{ fontSize: 32, color: "#F5F5F5" }}>Movie App</Text>
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
            <CustomBtn tittle={"confirmar"} action={handleLogin}/>
          </View>
        </View>
        <View style={{ justifyContent: "center", display: 'flex', flexDirection: 'row', gap: 2 }}> 
              <Text style={{ color: "#F5F5F5" }}>Não tem uma conta?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
                  <Text style={{ color: "#F5F5F5", fontWeight: 500 }}>
                      Cadastre-se
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