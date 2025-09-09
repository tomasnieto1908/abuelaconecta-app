"use client"

import { useState } from "react"
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native"
import type { StackNavigationProp } from "@react-navigation/stack"
import type { RootStackParamList } from "./../App"

type MessageScreenNavigationProp = StackNavigationProp<RootStackParamList, "Message">

interface Props {
  navigation: MessageScreenNavigationProp
}

export default function MessageScreen({ navigation }: Props) {
  const [message, setMessage] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessage("")
      setShowSuccess(true)
      setTimeout(() => {
        setShowSuccess(false)
        navigation.navigate("Menu")
      }, 2000)
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>← atras</Text>
      </TouchableOpacity>

      <Text style={styles.title}>mensaje</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={message}
          onChangeText={setMessage}
          placeholder="escribe el mensaje"
          placeholderTextColor="#999"
          multiline
        />
      </View>

      <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
        <Text style={styles.sendButtonText}>enviar</Text>
      </TouchableOpacity>

      {showSuccess && <Text style={styles.successText}>se envio el mensaje</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1033a3",
    padding: 24,
  },
  backButton: {
    backgroundColor: "#000000",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    alignSelf: "flex-start",
    marginBottom: 24,
  },
  backButtonText: {
    color: "#ffffff",
    fontSize: 14,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 24,
  },
  inputContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 24,
    marginBottom: 24,
  },
  textInput: {
    fontSize: 18,
    backgroundColor: "#f5f5f5",
    padding: 16,
    borderRadius: 4,
    minHeight: 100,
    textAlignVertical: "top",
  },
  sendButton: {
    backgroundColor: "#000000",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  sendButtonText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "600",
  },
  successText: {
    color: "#00ff11",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 16,
  },
})
