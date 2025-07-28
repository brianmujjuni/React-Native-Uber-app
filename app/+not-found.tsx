import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
// If you have a custom ThemedText component, import it instead:
// import ThemedText from '../components/ThemedText';


export default function NotFoundScreen() {
  return (
    <>
       <Stack.Screen options={{title: "Ops!"}}/>
      <View style={styles.container}>
        <Text>Ops! This screen doesn't exist.</Text>
        <Link style={styles.link} href="/">Go to home Screen</Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
