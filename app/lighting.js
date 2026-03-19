import { StyleSheet, View } from 'react-native';
import AppBar from '../src/components/AppBar';

export default function App() {
  return (
    <View style={styles.container}>
      
      <AppBar activeScreen="lighting"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
  }
});