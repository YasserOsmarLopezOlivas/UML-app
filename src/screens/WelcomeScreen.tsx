import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';

type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;

export default function WelcomeScreen() {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();

  const handleGoogleSignIn = () => {
    alert("Iniciar sesión con Google");
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.welcome}>Bienvenido</Text>

      <TouchableOpacity style={styles.googleButton} onPress={handleGoogleSignIn}>
        <Image source={require('../../assets/google.png')} style={styles.googleIcon} />
        <Text style={styles.googleText}>Acceder con Google</Text>
      </TouchableOpacity>

      {/* Aquí está el link corregido de registro */}
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.registerLink}>¿No tienes cuenta? Regístrate</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.link} onPress={() => Linking.openURL('https://tusitio.com/politica')}>
          Política de privacidad
        </Text>
        <Text style={styles.link}> | </Text>
        <Text style={styles.link} onPress={() => Linking.openURL('https://tusitio.com/terminos')}>
          Términos de uso
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#4BA3A4', alignItems: 'center', justifyContent: 'center', paddingTop: 50 },
  logo: { width: 200, height: 200, resizeMode: 'contain', marginBottom: 20 },
  welcome: { fontSize: 24, fontWeight: 'bold', color: '#123456', marginBottom: 40 },
  googleButton: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', paddingHorizontal: 20, paddingVertical: 12, borderRadius: 30, elevation: 3, marginTop: 20 },
  googleIcon: { width: 30, height: 30, marginRight: 15 },
  googleText: { fontSize: 16, color: '#000' },
  registerLink: { marginTop: 20, color: '#fff', textDecorationLine: 'underline', fontWeight: 'bold' },
  footer: { position: 'absolute', bottom: 20, flexDirection: 'row' },
  link: { color: '#fff', marginHorizontal: 5, textDecorationLine: 'underline' },
});
