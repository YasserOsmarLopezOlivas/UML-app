import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ConfirmationScreen() {
  return (
    <View style={styles.container}>
      {/* Icono de check */}
      <Image source={require('../../assets/check.png')} style={styles.check} />

      <Text style={styles.message}>
        Se ha registrado tu asistencia correctamente
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, backgroundColor:'#4BA3A4', alignItems:'center', justifyContent:'center', padding:20 },
  check: { width:150, height:150, marginBottom:30, resizeMode:'contain' },
  message: { fontSize:18, color:'#123456', textAlign:'center' }
});
