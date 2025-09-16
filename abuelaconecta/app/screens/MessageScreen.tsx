"use client"

import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { useRouter } from 'expo-router';

export default function MessageScreen() {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessage("");
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        router.push('/screens/MenuScreen'); // navegar a MenuScreen
      }, 2000);
    }
  };

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.push('/'); // fallback seguro
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Text style={styles.backButtonText}>← atrás</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Mensaje</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={message}
          onChangeText={setMessage}
          placeholder="Escribe el mensaje"
          placeholderTextColor="#999"
          multiline
        />
      </View>

      <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
        <Text style={styles.sendButtonText}>Enviar</Text>
      </TouchableOpacity>

      {showSuccess && <Text style={styles.successText}>Se envió el mensaje</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1033a3", padding: 24 },
  backButton: { backgroundColor: "#000", paddingHorizontal: 16, paddingVertical: 8, borderRadius: 4, alignSelf: "flex-start", marginBottom: 24 },
  backButtonText: { color: "#fff", fontSize: 14 },
  title: { fontSize: 24, fontWeight: "bold", color: "#fff", textAlign: "center", marginBottom: 24 },
  inputContainer: { backgroundColor: "#fff", borderRadius: 8, padding: 24, marginBottom: 24 },
  textInput: { fontSize: 18, backgroundColor: "#f5f5f5", padding: 16, borderRadius: 4, minHeight: 100, textAlignVertical: "top" },
  sendButton: { backgroundColor: "#000", padding: 16, borderRadius: 8, alignItems: "center" },
  sendButtonText: { color: "#fff", fontSize: 20, fontWeight: "600" },
  successText: { color: "#0f0", fontSize: 20, fontWeight: "bold", textAlign: "center", marginTop: 16 },
});
