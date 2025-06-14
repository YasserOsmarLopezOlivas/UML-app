import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';

type ScanScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ScanScreen'>;

export default function ScanScreen() {
  const navigation = useNavigation<ScanScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>← Regresar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>ESCANEAR CÓDIGO</Text>

      {/* Placeholder del QR */}
      <View style={styles.qrPlaceholder}>
        <Image
          source={require('../../assets/qr icon.png')}
          style={styles.qrImage}
        />
      </View>

      <TouchableOpacity
        style={styles.retryButton}
        onPress={() => navigation.replace('ConfirmationScreen')}
      >
        <Text style={styles.retryText}>Reintentar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, backgroundColor:'#4BA3A4', paddingTop:50, alignItems:'center' },
  back: { position:'absolute', top:40, left:20 },
  backText: { color:'#fff', fontSize:16 },
  title: { marginTop:20, fontSize:18, fontWeight:'bold', color:'#123456' },
  qrPlaceholder: {
    marginTop:40,
    width:250, height:250,
    backgroundColor:'rgba(255,255,255,0.5)',
    borderRadius:10,
    alignItems:'center', justifyContent:'center'
  },
  qrImage: { width:200, height:200, resizeMode:'contain' },
  retryButton: {
    flexDirection:'row', alignItems:'center',
    marginTop:20, backgroundColor:'rgba(255,255,255,0.8)',
    paddingHorizontal:20, paddingVertical:8, borderRadius:20
  },
  retryText: { color:'#123456', fontSize:14 }
});
