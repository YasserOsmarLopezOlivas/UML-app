import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';

type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Register'>;

export default function RegisterScreen() {
  const navigation = useNavigation<RegisterScreenNavigationProp>();

  const [carnet, setCarnet] = useState('');
  const [celular, setCelular] = useState('');
  const [carrera, setCarrera] = useState('');
  const [anioCarrera, setAnioCarrera] = useState('');

  const handleRegister = () => {
    alert("Registro guardado");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Botón de regreso */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Welcome')}>
        <Text style={styles.backButtonText}>← Regresar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Ingresa tus datos correctamente</Text>

      <TextInput
        style={styles.input}
        placeholder="N° de carnet"
        placeholderTextColor="#999"
        value={carnet}
        onChangeText={setCarnet}
      />

      <TextInput
        style={styles.input}
        placeholder="N° de celular"
        placeholderTextColor="#999"
        keyboardType="phone-pad"
        value={celular}
        onChangeText={setCelular}
      />

      <TextInput
        style={styles.input}
        placeholder="Carrera"
        placeholderTextColor="#999"
        value={carrera}
        onChangeText={setCarrera}
      />

      <TextInput
        style={styles.input}
        placeholder="Año de la carrera"
        placeholderTextColor="#999"
        keyboardType="numeric"
        value={anioCarrera}
        onChangeText={setAnioCarrera}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Guardar registro</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: '#4BA3A4', alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 30, color: '#123456', textAlign: 'center' },
  input: { backgroundColor: '#F4EDED', width: '100%', height: 50, borderRadius: 25, paddingHorizontal: 20, marginBottom: 20, color: '#000' },
  button: { backgroundColor: '#fff', paddingHorizontal: 40, paddingVertical: 15, borderRadius: 30, elevation: 3, marginTop: 20 },
  buttonText: { fontSize: 16, color: '#123456', fontWeight: 'bold' },
  backButton: { position: 'absolute', top: 40, left: 20, padding: 10 },
  backButtonText: { color: '#fff', fontSize: 16 },
});
