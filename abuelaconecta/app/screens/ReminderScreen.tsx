"use client"

import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { useRouter } from 'expo-router';

export default function ReminderScreen() {
  const router = useRouter();

  const [reminderText, setReminderText] = useState("");
  const [hours, setHours] = useState("17");
  const [minutes, setMinutes] = useState("00");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSetReminder = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      router.push('/screens/MenuScreen'); // fallback seguro al menú
    }, 2000);
  };

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

      <Text style={styles.title}>Recordatorio</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={reminderText}
          onChangeText={setReminderText}
          placeholder="Escribe el mensaje"
          placeholderTextColor="#999"
        />
      </View>

      <View style={styles.timePickerContainer}>
        <View style={styles.timePicker}>
          <TextInput
            style={styles.timeInput}
            value={hours}
            onChangeText={setHours}
            keyboardType="numeric"
            maxLength={2}
          />
          <Text style={styles.timeSeparator}>:</Text>
          <TextInput
            style={styles.timeInput}
            value={minutes}
            onChangeText={setMinutes}
            keyboardType="numeric"
            maxLength={2}
          />
        </View>
        <View style={styles.timeControls}>
          <TouchableOpacity>
            <Text style={styles.timeControlText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.timeControlText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.sendButton} onPress={handleSetReminder}>
        <Text style={styles.sendButtonText}>Enviar</Text>
      </TouchableOpacity>

      {showSuccess && <Text style={styles.successText}>Se activó el recordatorio</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1033a3", padding: 24 },
  backButton: { backgroundColor: "#000", paddingHorizontal: 16, paddingVertical: 8, borderRadius: 4, alignSelf: "flex-start", marginBottom: 24 },
  backButtonText: { color: "#fff", fontSize: 14 },
  title: { fontSize: 24, fontWeight: "bold", color: "#fff", textAlign: "center", marginBottom: 24 },
  inputContainer: { backgroundColor: "#fff", borderRadius: 8, padding: 24, marginBottom: 24 },
  textInput: { fontSize: 18, backgroundColor: "#f5f5f5", padding: 16, borderRadius: 4 },
  timePickerContainer: { backgroundColor: "#fff", borderRadius: 8, padding: 24, marginBottom: 24, alignItems: "center" },
  timePicker: { flexDirection: "row", alignItems: "center", marginBottom: 16 },
  timeInput: { width: 64, height: 48, borderWidth: 1, borderColor: "#ccc", borderRadius: 4, textAlign: "center", fontSize: 20, backgroundColor: "#fff" },
  timeSeparator: { fontSize: 20, marginHorizontal: 8 },
  timeControls: { flexDirection: "row", gap: 32 },
  timeControlText: { fontSize: 14, color: "#666" },
  sendButton: { backgroundColor: "#000", padding: 16, borderRadius: 8, alignItems: "center" },
  sendButtonText: { color: "#fff", fontSize: 20, fontWeight: "600" },
  successText: { color: "#0f0", fontSize: 20, fontWeight: "bold", textAlign: "center", marginTop: 16 },
});
