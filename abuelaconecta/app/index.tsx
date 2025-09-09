import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function MessageScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mensaje</Text>
      <Button title="Volver al Menú" onPress={() => router.push('screens/MenuScreen')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1033a3' },
  title: { fontSize: 24, color: '#fff', marginBottom: 20 },
});
