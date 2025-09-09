import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function MenuScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menú Principal</Text>
      <Button title="Mensaje" onPress={() => router.push('screens/MessageScreen')} />
      <Button title="Recordatorio" onPress={() => router.push('screens/ReminderScreen')} />
      <Button title="Ver Recordatorios" onPress={() => router.push('screens/ViewRemindersScreen')} />
      <Button title="Volver al Inicio" onPress={() => router.push('/')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1033a3' },
  title: { fontSize: 24, color: '#fff', marginBottom: 20 },
});
