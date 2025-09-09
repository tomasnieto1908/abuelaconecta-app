import { Stack } from 'expo-router';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) return null;

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" /> 
        <Stack.Screen name="screens/MenuScreen" />
        <Stack.Screen name="screens/MessageScreen" />
        <Stack.Screen name="screens/ReminderScreen" />
        <Stack.Screen name="screens/ViewRemindersScreen" />
        <Stack.Screen name="ProfileScreen" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
