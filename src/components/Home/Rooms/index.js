import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Rooms({ item }) {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnRoom}>
                <Text style={styles.symbolCategory}>{item.icon}</Text>

                <View>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemStatus}>{item.status}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginRight: 16,
    },
    btnRoom: {
        backgroundColor: '#1A1A1A',
        width: 140,
        height: 160,
        borderRadius: 24,
        padding: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    symbolCategory: {
        fontSize: 45,
    },
    itemName: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    itemStatus: {
        color: '#8E8E93',
        fontSize: 12,
        marginTop: 4,
        textAlign: 'center'
    },
});