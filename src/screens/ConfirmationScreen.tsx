import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  ConfirmationScreen: undefined;
  StudentScreen: undefined;
};

export default function ConfirmationScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      {/* Icono de check */}
      <Image source={require('../../assets/check.png')} style={styles.check} />

      <Text style={styles.message}>
        Se ha registrado tu asistencia correctamente
      </Text>

      {/* Botón para ir a StudentScreen */}
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('StudentScreen')}
      >
        <Text style={styles.buttonText}>Ver Estudiantes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#4BA3A4', 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: 20 
  },
  check: { 
    width: 150, 
    height: 150, 
    marginBottom: 30, 
    resizeMode: 'contain' 
  },
  message: { 
    fontSize: 18, 
    color: '#123456', 
    textAlign: 'center',
    marginBottom: 30 
  },
  button: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 20
  },
  buttonText: {
    color: '#4BA3A4',
    fontSize: 16,
    fontWeight: 'bold'
  }
});