import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

type Props = {
  onStart: () => void
}

export default function WelcomeScreen({ onStart }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>AbuelaConecta</Text>
        <Text style={styles.description}>
          La app que te ayuda a cuidar a tus seres queridos con recordatorios y alertas
        </Text>
      </View>

      <TouchableOpacity style={styles.startButton} onPress={onStart}>
        <Text style={styles.startButtonText}>Comenzar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1033a3",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
  },
  content: {
    alignItems: "center",
    marginBottom: 48,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 16,
    textAlign: "center",
  },
  description: {
    fontSize: 18,
    color: "#ffffff",
    textAlign: "center",
    lineHeight: 26,
  },
  startButton: {
    backgroundColor: "#000000",
    paddingHorizontal: 48,
    paddingVertical: 24,
    borderRadius: 8,
  },
  startButtonText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "600",
  },
})
