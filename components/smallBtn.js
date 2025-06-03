import { TouchableOpacity, Text, StyleSheet} from "react-native"

export default function SmallBtn({tittle, action}){
    return (
      <TouchableOpacity style={styles.button} onPress={action}>
        <Text style={styles.buttonText}>{tittle}</Text>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 50,
    alignItems: "center",
    marginVertical: 8,
    backgroundColor: "#F5F5F5",
  },
  
  buttonText: {
    fontSize: 14,
    fontWeight: 500,
  },
});