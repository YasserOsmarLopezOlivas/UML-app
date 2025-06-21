import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, User } from '../navigation/types';
import BtnGoogle from '../components/BtnGoogle';


type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;

export default function WelcomeScreen() {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();

  const handleGoogleSignIn = () => {
    // Simulación de usuario autenticado
    const mockUser: User = {
      id: 'usr-123',
      name: 'Gregory Joe Gomez Enriquez',
      email: 'est,ggomeze0201@uml.edu.ni',
      avatar: 'https://example.com/avatar.jpg'
    };

    navigation.navigate('HomeScreen', { user: mockUser });
  };

  function rgba(arg0: number, arg1: number, arg2: number, arg3: number): import("react-native").ColorValue | undefined {
    throw new Error('Function not implemented.');
  }

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.welcome}>Bienvenido</Text>
      
  {/* Botón de Google como componente */}
  <BtnGoogle onPress={handleGoogleSignIn} />
      
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
  container: { 
    flex: 1, 
    backgroundColor: '#4BA3A4', 
    alignItems: 'center', 
    justifyContent: 'center', 
    paddingTop: 50 
  },
  logo: { 
    width: 200, 
    height: 200, 
    resizeMode: 'contain', 
    marginBottom: 20 
  },
  welcome: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#FFFFFF', 
    marginBottom: 40 
  },
  googleButton: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#FFFFFF', 
    paddingHorizontal: 20, 
    paddingVertical: 12, 
    borderRadius: 30, 
    elevation: 3, 
    marginTop: 20 
  },
  googleIcon: { 
    width: 30, 
    height: 30, 
    marginRight: 15 
  },
  googleText: { 
    fontSize: 16, 
    color: '#000000' 
  },
  registerLink: { 
    marginTop: 20, 
    color: '#FFFFFF', 
    textDecorationLine: 'underline', 
    fontWeight: 'bold' 
  },
  footer: { 
    position: 'absolute', 
    bottom: 20, 
    flexDirection: 'row' 
  },
  link: { 
    color: '#FFFFFF', 
    marginHorizontal: 5, 
    textDecorationLine: 'underline' 
  },
});