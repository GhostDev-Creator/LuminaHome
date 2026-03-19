import { StyleSheet, View } from 'react-native';
import Header from '../src/components/Home/Header'
import Climate from '../src/components/Home/Climate'
import ActiveRooms from '../src/components/Home/ActiveRooms';
import AppBar from '../src/components/AppBar';

export default function App() {
  return (
    <View style={styles.container}>
      <Header user="Alex R." />
      <Climate temperature={24} city="London" />
      <ActiveRooms/>
      <AppBar activeScreen="home"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
  }
});