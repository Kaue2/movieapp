import { TouchableOpacity, Text, StyleSheet} from "react-native"

export default function CustomBtn({tittle, action}){
    return (
      <TouchableOpacity style={styles.button} onPress={action}>
        <Text style={styles.buttonText}>{tittle}</Text>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 8,
    backgroundColor: "#F5F5F5",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 500
  },
});