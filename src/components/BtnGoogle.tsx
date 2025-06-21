// components/BtnGoogle.tsx
import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";
import * as Google from "expo-auth-session/providers/google";

type BtnGoogleProps = {
  onPress: () => void;
  buttonStyle?: object;
  textStyle?: object;
  iconStyle?: object;
};


export default function BtnGoogle({ 
  onPress, 
  buttonStyle, 
  textStyle, 
  iconStyle 
}: BtnGoogleProps) {
    // Configuración de Google Auth
    const [request, response, promptAsync] = Google.useAuthRequest({androidClientId:'1053389630254-uqta16maf8f3pfqt8dl8m9fs7clr8cla.apps.googleusercontent.com'});

  return (
    <TouchableOpacity 
      style={[styles.googleButton, buttonStyle]} 
      onPress={() => {
        promptAsync(). catch((error) => { console.error("Error al iniciar sesión con Google:", error); });
        onPress();
      }}
    >
      <Image 
        source={require('../../assets/google.png')} 
        style={[styles.googleIcon, iconStyle]} 
      />
      <Text style={[styles.googleText, textStyle]}>Acceder con Google</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 30,
    elevation: 3,
  },
  googleIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
  googleText: {
    fontSize: 16,
    color: "#000000",
  },
});