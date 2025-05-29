import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import InputText from "../components/InputText";
import CustomBtn from "../components/CustomBtn";
import { UserContext } from "../context/UserContext";

export default function CreateAccount({navigation}){
  const { sinupFunc } = useContext(UserContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');

  const handleSinup = async () => {
    try {
      const respo = await sinupFunc(email, password, nickname, navigation);
    }
    catch(error){
      console.log("Erro ao criar conta:", error);
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