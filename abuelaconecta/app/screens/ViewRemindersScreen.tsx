import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native"
import type { StackNavigationProp } from "@react-navigation/stack"
import type { RootStackParamList } from "./../App"

type ViewRemindersScreenNavigationProp = StackNavigationProp<RootStackParamList, "ViewReminders">

interface Props {
  navigation: ViewRemindersScreenNavigationProp
}

export default function ViewRemindersScreen({ navigation }: Props) {
  const reminders = ["*tomar pastilla 17:00", "*tomar pastilla 13:00"]

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>← atras</Text>
      </TouchableOpacity>

      <Text style={styles.title}>ver recordatorio</Text>

      <ScrollView style={styles.remindersContainer}>
        {reminders.map((reminder, index) => (
          <Text key={index} style={styles.reminderText}>
            {reminder}
          </Text>
        ))}
      </ScrollView>
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
  remindersContainer: {
    flex: 1,
  },
  reminderText: {
    color: "#ffffff",
    fontSize: 18,
    marginBottom: 16,
  },
})
