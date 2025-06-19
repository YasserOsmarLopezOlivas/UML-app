import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

type IoniconName = React.ComponentProps<typeof Ionicons>['name'];

const StudentScreen = () => {
  const navigation = useNavigation();

  // Datos de actividades recientes
  const recentActivities: {
    id: string;
    class: string;
    date: string;
    start: string;
    end: string;
    status: string;
    statusColor: string;
    icon: IoniconName;
  }[] = [
    { id: '1', class: 'CL1', date: '01-06-2025', start: '08:00', end: '10:30', status: 'Presente', statusColor: '#4CAF50', icon: 'checkmark-circle' },
    { id: '2', class: 'CL2', date: '01-06-2025', start: '10:50', end: '12:20', status: 'Pendiente', statusColor: '#FFC107', icon: 'time' },
    { id: '3', class: 'CL3', date: '01-06-2025', start: '12:50', end: '02:50', status: 'Pendiente', statusColor: '#FFC107', icon: 'time' },
    { id: '4', class: 'CL1', date: '24-05-2025', start: '08:00', end: '10:30', status: 'Ausente', statusColor: '#F44336', icon: 'close-circle' },
    { id: '5', class: 'CL2', date: '24-05-2025', start: '10:50', end: '12:20', status: 'Presente', statusColor: '#4CAF50', icon: 'checkmark-circle' },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Información del estudiante */}
      <View style={styles.header}>
        <Text style={styles.name}>Gregory Jose Gomez Enriquez</Text>
        <Text style={styles.email}>
          <Ionicons name="person-circle-outline" size={16} color="#555" /> est.ggomeze0201@umi.edu.il
        </Text>
      </View>

      {/* Clases activas */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          <Ionicons name="today" size={18} color="#333" /> 3 Classes activas hoy
        </Text>
        <View style={styles.nextClass}>
          <Text style={styles.nextClassLabel}>
            <Ionicons name="arrow-forward" size={14} color="#2a7ac7" /> Proxima clase
          </Text>
          <View style={styles.classInfo}>
            <MaterialIcons name="meeting-room" size={20} color="#2a7ac7" />
            <Text style={styles.className}>CL2</Text>
            <Ionicons name="time" size={16} color="#2a7ac7" style={styles.timeIcon} />
            <Text style={styles.classTime}>10:30 AM</Text>
          </View>
        </View>
      </View>

      {/* Botones de acción */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => navigation.navigate('Asistencias')}
        >
          <FontAwesome name="calendar-check-o" size={20} color="#2a7ac7" />
          <Text style={styles.actionButtonText}>Mis Asistencias</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => navigation.navigate('Tickets')}
        >
          <MaterialIcons name="confirmation-number" size={20} color="#2a7ac7" />
          <Text style={styles.actionButtonText}>Mis tikcets</Text>
        </TouchableOpacity>
      </View>

      {/* Actividad reciente */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          <Ionicons name="time" size={18} color="#333" /> ACTIVIDAD RECIENTE
        </Text>
        
        {/* Encabezado de la tabla */}
        <View style={styles.tableHeader}>
          <Text style={[styles.headerText, { width: '20%' }]}>Clase</Text>
          <Text style={[styles.headerText, { width: '25%' }]}>Fecha</Text>
          <Text style={[styles.headerText, { width: '20%' }]}>Inicio</Text>
          <Text style={[styles.headerText, { width: '20%' }]}>Fin</Text>
          <Text style={[styles.headerText, { width: '15%' }]}>Estado</Text>
        </View>
        
        {/* Filas de actividad */}
        <FlatList
          data={recentActivities}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <View style={styles.tableRow}>
              <Text style={[styles.cellText, { width: '20%', fontWeight: 'bold' }]}>{item.class}</Text>
              <Text style={[styles.cellText, { width: '25%' }]}>{item.date}</Text>
              <View style={[styles.timeCell, { width: '20%' }]}>
                <Ionicons name="time-outline" size={14} color="#B12B2B" />
                <Text style={styles.cellText}>{item.start}</Text>
              </View>
              <View style={[styles.timeCell, { width: '20%' }]}>
                <Ionicons name="time-outline" size={14} color="#B12B2B" />
                <Text style={styles.cellText}>{item.end}</Text>
              </View>
              <View style={[styles.statusCell, { width: '15%' }]}>
                <Ionicons name={item.icon} size={16} color={item.statusColor} />
                <Text style={[styles.cellText, { color: item.statusColor }]}>{item.status}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  header: {
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  email: {
    fontSize: 14,
    color: '#555',
    alignItems: 'center',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  nextClass: {
    backgroundColor: '#e3f2fd',
    borderRadius: 10,
    padding: 15,
  },
  nextClassLabel: {
    fontSize: 14,
    color: '#2a7ac7',
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  classInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  className: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2a7ac7',
  },
  timeIcon: {
    marginLeft: 10,
  },
  classTime: {
    fontSize: 16,
    color: '#2a7ac7',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
    gap: 10,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#e3f2fd',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  actionButtonText: {
    fontSize: 14,
    color: '#2a7ac7',
    fontWeight: '500',
  },
  tableHeader: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    marginBottom: 5,
  },
  headerText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#666',
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    alignItems: 'center',
  },
  cellText: {
    fontSize: 12,
    color: '#333',
  },
  timeCell: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  statusCell: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
});

export default StudentScreen;