import { StyleSheet, View, Text } from 'react-native';

export default function Header({ user }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.lumina}>Lumina</Text>
        <Text style={styles.saudation}>Hello, {user}</Text>
      </View>
      <View style={styles.photoUser}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#101010',
    width: '100%',
    paddingTop: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 25,
  },
  lumina: {
    color: '#00E676',
    fontSize: 18,
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  saudation: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '500',
  },
  photoUser: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#00E676',
  }
});