import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import { Ionicons } from '@expo/vector-icons';
import type { StackNavigationProp } from '@react-navigation/stack';

type ClassScreenRouteProp = RouteProp<RootStackParamList, 'ClassScreen'>;
type ClassScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ClassScreen'>;

interface Props {
  route: ClassScreenRouteProp;
}

const ClassScreen: React.FC<Props> = ({ route }) => {
  const { user } = route.params;
  const navigation = useNavigation<ClassScreenNavigationProp>();

  return (
    <View style={styles.container}>
      {/* Header con datos del usuario */}
      <View style={styles.header}>
        <Image
          source={{ uri: user.avatar || 'https://via.placeholder.com/100' }}
          style={styles.avatar}
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
        </View>
      </View>

      {/* Clase activa */}
      <View style={styles.activeBox}>
        <Text style={styles.sectionLabel}>CLASE ACTIVA</Text>
        <View style={styles.activeInfo}>
          <View style={styles.activeItem}>
            <Text style={styles.activeValue}>CL5</Text>
            <Text style={styles.activeLabel}>Room</Text>
          </View>
          <View style={styles.activeItem}>
            <Text style={styles.activeValue}>30 mins</Text>
            <Text style={styles.activeLabel}>Time</Text>
          </View>
          <View style={styles.activeItem}>
            <Text style={styles.activeValue}>5</Text>
            <Text style={styles.activeLabel}>Active</Text>
          </View>
        </View>
      </View>

      {/* Resumen de clases */}
      <View style={styles.summary}>
        <View style={styles.summaryBox}>
          <Text style={styles.summaryNumber}>5</Text>
          <Text style={styles.summaryText}>Clases</Text>
        </View>
        <View style={[styles.summaryBox, { backgroundColor: '#E0FFE0' }]}>
          <Text style={styles.summaryNumber}>27</Text>
          <Text style={styles.summaryText}>Registros</Text>
        </View>
      </View>

      {/* Actividad reciente */}
      <Text style={styles.sectionTitle}>ACTIVIDAD RECIENTE</Text>
      <ScrollView style={styles.activityList}>
        {[
          { class: 'CL3', date: '05-29-2022', start: '10:30', end: '12:00', color: '#f06292' },
          { class: 'CL1', date: '06-29-2022', start: '08:20', end: '10:20', color: '#ffee58' },
          { class: 'CL5', date: '05-29-2022', start: '10:30', end: '12:00', color: '#80deea' },
        ].map((item, index) => (
          <View key={index} style={[styles.activityItem, { borderLeftColor: item.color }]}>
            <Text style={styles.activityClass}>{item.class}</Text>
            <Text style={styles.activityDate}>{item.date}</Text>
            <View style={styles.activityTime}>
              <Text style={styles.timeText}>🕒 {item.start}</Text>
              <Text style={styles.timeText}>🕒 {item.end}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Botón registrar asistencia */}
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => navigation.navigate('ScanScreen')}
      >
        <Ionicons name="qr-code-outline" size={20} color="white" style={{ marginRight: 8 }} />
        <Text style={styles.registerButtonText}>Registrar asistencia</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA', padding: 16 },
  header: {
    flexDirection: 'row',
    backgroundColor: '#2BB7BD',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: { width: 56, height: 56, borderRadius: 28, marginRight: 12 },
  userInfo: { flex: 1 },
  userName: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
  userEmail: { fontSize: 14, color: '#e0f7fa' },
  activeBox: {
    backgroundColor: '#E0F7FA',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  sectionLabel: { fontSize: 14, fontWeight: 'bold', color: '#00796B', marginBottom: 12 },
  activeInfo: { flexDirection: 'row', justifyContent: 'space-between' },
  activeItem: { alignItems: 'center' },
  activeValue: { fontSize: 16, fontWeight: 'bold', color: '#00796B' },
  activeLabel: { fontSize: 12, color: '#555' },
  summary: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  summaryBox: {
    backgroundColor: '#D0F0FF',
    borderRadius: 12,
    padding: 20,
    flex: 1,
    alignItems: 'center',
    marginRight: 8,
  },
  summaryNumber: { fontSize: 22, fontWeight: 'bold', color: '#333' },
  summaryText: { fontSize: 14, color: '#666' },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 8, color: '#333' },
  activityList: { flex: 1 },
  activityItem: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    borderLeftWidth: 5,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  activityClass: { fontSize: 16, fontWeight: 'bold', width: 50 },
  activityDate: { fontSize: 14, color: '#555', flex: 1 },
  activityTime: { alignItems: 'flex-end' },
  timeText: { fontSize: 13, color: '#555' },
  registerButton: {
    backgroundColor: '#2BB7BD',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
    borderRadius: 12,
    marginTop: 16,
  },
  registerButtonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
});

export default ClassScreen;
