"use client"

import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useRouter } from 'expo-router';

export default function ViewRemindersScreen() {
  const router = useRouter();
  const reminders = ["*tomar pastilla 17:00", "*tomar pastilla 13:00"];

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.push('/screens/MenuScreen'); // fallback seguro
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Text style={styles.backButtonText}>← atrás</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Ver Recordatorios</Text>

      <ScrollView style={styles.remindersContainer}>
        {reminders.map((reminder, index) => (
          <Text key={index} style={styles.reminderText}>
            {reminder}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1033a3", padding: 24 },
  backButton: { backgroundColor: "#000", paddingHorizontal: 16, paddingVertical: 8, borderRadius: 4, alignSelf: "flex-start", marginBottom: 24 },
  backButtonText: { color: "#fff", fontSize: 14 },
  title: { fontSize: 40, fontWeight: "bold", color: "#fff", textAlign: "center", marginBottom: 24 },
  remindersContainer: { flex: 1 ,},
  reminderText: { color: "#fff", fontSize: 25, marginBottom: 16 },
});
