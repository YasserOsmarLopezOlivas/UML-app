import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Importar hook de navegación
import type { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  HomeScreen: undefined;
  ScanScreen: undefined;
  // Agrega aquí otras pantallas si las tienes
};

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>(); // Obtener el objeto de navegación tipado

  // Datos de actividades recientes
  const recentActivities = [
    { id: '1', class: 'CL3', date: '05-29-2022', start: '10:30', end: '12:00', color: '#FF00FF' },
    { id: '2', class: 'CL1', date: '06-29-2022', start: '08:20', end: '10:20', color: '#FFD700' },
    { id: '3', class: 'CL5', date: '06-29-2022', start: '10:30', end: '12:00', color: '#00CED1' },
    { id: '4', class: 'CL1', date: '06-29-2022', start: '10:30', end: '12:00', color: '#FFD700' },
    { id: '5', class: 'CL3', date: '06-29-2022', start: '10:30', end: '12:00', color: '#FF00FF' },
  ];

  // Función para manejar el registro de asistencia
  const handleRegisterAttendance = () => {
    navigation.navigate('ScanScreen'); // Navegar a ScanScreen
  };

  return (
    <ScrollView style={styles.container}>
      {/* ENCABEZADO CON INFORMACIÓN DEL USUARIO */}
      <View style={styles.header}>
        <View style={styles.profileRow}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/100' }}
            style={styles.avatar}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.name}>Carlos Andrés Pérez Úbeda</Text>
            <Text style={styles.email}>● prof.cperez@uml.edu.ni</Text>
          </View>
          <Ionicons name="menu" size={20} color="#063A5F" />
        </View>

        {/* INDICADOR DE CLASE ACTIVA */}
        <Text style={styles.classStatus}>CLASE ACTIVA</Text>

        {/* ESTADÍSTICAS RÁPIDAS CON ICONOS AL LADO Y PERFECTAMENTE ALINEADOS */}
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <View style={styles.statContent}>
              <MaterialIcons name="meeting-room" size={15} color="#063A5F" style={styles.statIcon} />
              <View>
                <Text style={styles.statLabel}>CL5</Text>
                <Text style={styles.statSub}>Room</Text>
              </View>
            </View>
          </View>
          <View style={styles.statItem}>
            <View style={styles.statContent}>
              <Ionicons name="time-outline" size={15} color="#063A5F" style={styles.statIcon} />
              <View>
                <Text style={styles.statLabel}>30 mins</Text>
                <Text style={styles.statSub}>Time</Text>
              </View>
            </View>
          </View>
          <View style={styles.statItem}>
            <View style={styles.statContent}>
              <FontAwesome name="user-circle-o" size={15} color="#063A5F" style={styles.statIcon} />
              <View>
                <Text style={styles.statLabel}>5</Text>
                <Text style={styles.statSub}>Active</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* TARJETAS DE CLASES Y REGISTROS CON ICONOS AL LADO Y ALINEADOS */}
      <View style={styles.cardsRow}>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <MaterialCommunityIcons name="school" size={15} color="#063A5F" style={styles.cardIcon} />
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardNumber}>5</Text>
              <Text style={styles.cardLabel}>Clases</Text>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <MaterialCommunityIcons name="clipboard-list" size={15} color="#063A5F" style={styles.cardIcon} />
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardNumber}>27</Text>
              <Text style={styles.cardLabel}>Registros</Text>
            </View>
          </View>
        </View>
      </View>

      {/* SECCIÓN DE ACTIVIDAD RECIENTE */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>ACTIVIDAD RECIENTE</Text>
        <FlatList
          data={recentActivities}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <View style={styles.activityItem}>
              {/* Barra lateral de color */}
              <View style={[styles.activityBar, { backgroundColor: item.color }]} />
              
              {/* Clase */}
              <Text style={styles.activityClass}>{item.class}</Text>
              
              {/* Fecha centrada verticalmente */}
              <View style={styles.dateContainer}>
                <Text style={styles.activityDate}>{item.date}</Text>
              </View>
              
              {/* Hora de inicio */}
              <View style={styles.timeBlock}>
                <Ionicons name="time-outline" size={16} color="#063A5F" />
                <Text style={styles.timeText}>{item.start}</Text>
              </View>
              
              {/* Hora de fin */}
              <View style={styles.timeBlock}>
                <Ionicons name="time-outline" size={16} color="#B12B2B" />
                <Text style={[styles.timeText, { color: '#B12B2B' }]}>{item.end}</Text>
              </View>
            </View>
          )}
        />
      </View>

      {/* BOTÓN DE REGISTRO CON ICONO QR SEPARADO */}
      <View style={styles.footer}>
        <View style={styles.buttonContainer}>
          {/* Icono QR en círculo */}
          <TouchableOpacity style={styles.qrCircle}>
            <Ionicons name="qr-code-outline" size={24} color="#063A5F" />
          </TouchableOpacity>
          
          {/* Botón principal de registro */}
          <TouchableOpacity 
            style={styles.registerButton}
            onPress={handleRegisterAttendance} // Agregado el manejador de eventos
          >
            <Text style={styles.buttonText}>Registrar asistencia</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

// Los estilos permanecen exactamente iguales
const styles = StyleSheet.create({
  // Estilos generales
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 2,
  },
  
  // Encabezado
  header: {
    backgroundColor: '#4ab2b8',
    padding: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,  
    marginTop: 30,
    marginBottom: 10,
  },
  
  // Fila de perfil
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  profileInfo: {
    flex: 1,
    marginRight: 20,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    paddingRight: 10,
  },
  name: {
    color: '#063A5F',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  email: {
    color: '#063A5F',
    fontSize: 12,
  },
  
  // Indicador de clase activa
  classStatus: {
    marginTop: 10,
    textAlign: 'center',
    color: '#063A5F',
    fontWeight: 'bold',
    fontSize: 16,
  },
  
  // Fila de estadísticas con iconos perfectamente alineados
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  statItem: {
    alignItems: 'center',
  },
  statContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statIcon: {
    marginRight: 8,
    alignSelf: 'center', // Asegura alineación vertical
    marginTop: 5, // Alinea el icono con el texto
  },
  statLabel: {
    color: '#063A5F',
    fontWeight: 'bold',
    fontSize: 16,
  },
  statSub: {
    color: '#063A5F',
    fontSize: 12,
    marginTop: 2,
  },
  
  // Tarjetas de clases y registros con iconos perfectamente alineados
  cardsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#DDFFE4',
    padding: 15,
    borderRadius: 20,
    width: '45%',
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 5,
  },
  cardIcon: {
    marginRight: 10,
    alignSelf: 'center', // Asegura alineación vertical
    marginTop: 35, // Alinea el icono con el texto
    marginLeft: 15,
  },
  cardTextContainer: {
    justifyContent: 'center',
  },
  cardNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#063A5F',
  },
  cardLabel: {
    color: '#063A5F',
    fontSize: 14,
    marginTop: 2,
  },
  
  // Sección de actividad reciente
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#063A5F',
    fontSize: 14,
  },
  
  // Elementos de actividad
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 5,
    padding: 8,
    height: 50,
  },
  activityBar: {
    width: 5,
    height: '120%',
    borderRadius: 5,
    marginRight: 20,
  },
  activityClass: {
    width: 50,
    fontSize: 12,
    color: '#063A5F',
    fontWeight: 'bold',
  },
  dateContainer: {
    width: 80,
    justifyContent: 'center',
  },
  activityDate: {
    fontSize: 12,
    color: '#063A5F',
    textAlign: 'center',
  },
  timeBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 10,
    flex: 1,
    justifyContent: 'flex-start',
    gap: 5,
  },
  timeText: {
    fontSize: 12,
    color: '#063A5F',
  },
  
  // Pie de página con botones
  footer: {
    alignItems: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  qrCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#4ab2b8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  registerButton: {
    backgroundColor: '#4ab2b8',
    flex: 1,
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 6,
  },
  buttonText: {
    color: '#063A5F',
    fontWeight: 'bold',
    fontSize: 14,
  },
});


export default HomeScreen;