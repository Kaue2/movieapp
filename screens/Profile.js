import { View, Text } from "react-native"
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Profile(){

    const [userEmail, setEmail] = useState('');
    const [userNick, setNick] = useState('');

    useEffect(() => {
        const loadData = async () => {
            try{
                const jsonEmail = await AsyncStorage.getItem('name');
                const jsonNick = await AsyncStorage.getItem("nickname");
                if(jsonEmail != null && jsonNick != null){
                    const email = JSON.parse(jsonEmail);
                    const nickname = JSON.parse(jsonNick);
                    console.log("ola");
                    console.log(email);
                    console.log(nickname);
                    setEmail(email);
                    setNick(nickname);
                }
            }
            catch(e){
                console.log("Erro ao carregar dados:", e);
            }
        };

        loadData();

    }, []);
    

    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          padding: 52,
          backgroundColor: "#1A1A1A",
        }}
      >
        <View>
          <Icon
            icon="ix:user-profile-filled"
            width={132}
            height={150}
            style={{ color: "#F5F5F5" }}
          />
          <Text>a{userEmail}</Text>
          <Text>a{userNick}</Text>
          <View>
            <View></View>
            <View></View>
          </View>
        </View>
      </View>
    );
}