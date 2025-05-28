import { View, Text, TextInput, StyleSheet } from "react-native"


export default function InputText({text, placeholder, password, setValue}){
    return (
        <View style={style.container}>
            <Text style={style.TextStyle}>
                {text}
            </Text>
            <TextInput
                style={style.input}
                placeholder={placeholder}
                secureTextEntry={password} 
                onChange={(e) => setValue(e.target.value)}
            />
        </View>
    )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    gap: 16
  },
  TextStyle: {
    fontWeight: "bold",
    color: "#F5F5F5",
    fontSize: 20
  },
  input: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#F5F5F5",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
    color: "#fff",
  },
});