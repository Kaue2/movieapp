import react from "react";
import { Modal, View, Text, TextInput, TouchableOpacity, Dimensions } from "react-native";
import InputText from "../components/InputText";


export default function CreatePost({ title, setTitle, year, setYear, inputPlaceHolder, visible, onClose, onSave, value, setValue, onCancel }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View
          style={{
            alignItems: "center",
            width: "80%",
            height: "60%",
            backgroundColor: "#1A1A1A",
            borderRadius: 8,
            borderColor: "#F5F5F5",
            borderWidth: 1,
            paddingHorizontal: 8,
            gap: 8,
          }}
        >
          <Text style={{ paddingTop: 8, color: "#F5F5F5", fontSize: 16}}>Seu Post</Text>
          <View style={{ width: "100%" }}>
            <InputText
              style={{ width: "100%" }}
              placeholder="Título do filme"
              value={title}
              setValue={setTitle}
            />
            <InputText
              placeholder="Ano de publicação do filme"
              inputMode={"numeric"}
              value={year}
              setValue={setYear}
            />
          </View>
          <View style={{ alignItems: "center", width: "100%", paddingTop: 8 }}>
            <TextInput
              style={{
                outlineWidth: 0,
                padding: 4,
                color: "#F5F5F5",
                width: "100%",
                borderWidth: 1,
                borderColor: "#F5F5F5",
                borderRadius: 8,
              }}
              placeholder={inputPlaceHolder}
              multiline={true}
              numberOfLines={4}
              value={value}
              onChangeText={setValue}
            />
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", paddingTop: 8 }}>
            <TouchableOpacity
              onPress={onSave}
              style={{
                backgroundColor: "#03fc56",
                borderRadius: 8,
                paddingHorizontal: 8,
              }}
            >
              <Text>Confirmar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onClose}
              style={{
                backgroundColor: "#fc0345",
                borderRadius: 8,
                paddingHorizontal: 8,
              }}
            >
              <Text>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
