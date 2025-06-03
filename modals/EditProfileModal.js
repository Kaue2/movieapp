import react from "react";
import { Modal, View, Text, TextInput, TouchableOpacity, Dimensions } from 'react-native';


export default function EditProfileModel ({title, inputPlaceHolder, visible, onClose, onSave, value, setValue, onCancel}){
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={onClose}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View
            style={{
              backgroundColor: "#1A1A1A",
              width: "80%",
              height: "fit-content",
              borderRadius: 8,
              borderColor: "#F5F5F5",
              borderWidth: 1,
              paddingVertical: 4,
              paddingHorizontal: 8,
              gap: 16,
            }}
          >
            <Text style={{ color: "#F5F5F5" }}>{title}</Text>
            <TextInput
              placeholder={inputPlaceHolder}
              value={value}
              onChangeText={setValue}
              style={{ color: "#F5F5F5", borderColor: "#F5F5F5", borderWidth: 1, paddingHorizontal: 4, borderRadius: 8, paddingVertical: 4 }}
            />
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
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