"use client"

import { useState } from "react"
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native"
import type { StackNavigationProp } from "@react-navigation/stack"
import type { RootStackParamList } from "./../App"

type ReminderScreenNavigationProp = StackNavigationProp<RootStackParamList, "Reminder">

interface Props {
  navigation: ReminderScreenNavigationProp
}

export default function ReminderScreen({ navigation }: Props) {
  const [reminderText, setReminderText] = useState("")
  const [hours, setHours] = useState("17")
  const [minutes, setMinutes] = useState("00")
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSetReminder = () => {
    setShowSuccess(true)
    setTimeout(() => {
      setShowSuccess(false)
      navigation.navigate("Menu")
    }, 2000)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>← atras</Text>
      </TouchableOpacity>

      <Text style={styles.title}>recordatorio</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={reminderText}
          onChangeText={setReminderText}
          placeholder="escribe el mensaje"
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
        <Text style={styles.sendButtonText}>enviar</Text>
      </TouchableOpacity>

      {showSuccess && <Text style={styles.successText}>se activo el recordatorio</Text>}
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
  },
  timePickerContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 24,
    marginBottom: 24,
    alignItems: "center",
  },
  timePicker: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  timeInput: {
    width: 64,
    height: 48,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    textAlign: "center",
    fontSize: 20,
    backgroundColor: "#ffffff",
  },
  timeSeparator: {
    fontSize: 20,
    marginHorizontal: 8,
  },
  timeControls: {
    flexDirection: "row",
    gap: 32,
  },
  timeControlText: {
    fontSize: 14,
    color: "#666",
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
