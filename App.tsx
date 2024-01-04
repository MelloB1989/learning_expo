import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config'; // Optional if you want to use default theme
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import Login from './Login';

export default function App() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    text: {
      fontSize: 25,
      fontWeight: '500',
    },
  });
  return (
    <SafeAreaProvider style={{ flex: 20, marginTop: 40 }}>
    <GluestackUIProvider config={config}>
      <Login />
      <Toast />
    </GluestackUIProvider>
    </SafeAreaProvider>
  );
}