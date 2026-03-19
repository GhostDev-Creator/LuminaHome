import { StyleSheet, View, Text } from 'react-native';

export default function Climate({ temperature, city }) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.temperature}>
                    <Text style={styles.symbolClimate}>⛅</Text>
                    <Text style={styles.temperatureClimate}>{temperature}°C</Text>
                </View>
                <Text style={styles.climateCity}>Sunny • {city}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 30,
        alignItems: 'center'
    },
    content: {
        width: '90%',
        height: 150,
        backgroundColor: '#232323',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
    },
    temperature: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    symbolClimate: {
        fontSize: 50,
    },
    temperatureClimate: {
        color: '#fff',
        fontSize: 58,
        fontWeight: '500',
        letterSpacing: -2,
    },
    climateCity: {
        color: '#8E8E93',
        fontSize: 16,
        fontWeight: '500',
        marginTop: -5,
        letterSpacing: 1,
    }
});