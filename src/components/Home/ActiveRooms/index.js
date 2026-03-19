import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import Rooms from '../Rooms';

export default function ActiveRooms() {
    const listRoomsActive = [
        { id: '1', name: 'Living Room', devices: 4, status: "Active", icon: '💡'},
        { id: '2', name: 'Kitchen', devices: 3, status: "Disabled", icon: '🧑🏻‍🍳'},
        { id: '3', name: 'Bedroom', devices: 2, status: "Disabled", icon: '🛏️'},
    ];

    return (
        <View style={styles.container}>
            <View style={styles.titleCategory}>
                <Text style={styles.titleText}>Active Rooms</Text>
                <TouchableOpacity>
                   <Text style={styles.arrowText}>→</Text>
                </TouchableOpacity>
            </View>
            
            <FlatList 
                data={listRoomsActive} 
                renderItem={Rooms}
                keyExtractor={(item) => item.id} 
                horizontal={true} 
                showsHorizontalScrollIndicator={false} 
                contentContainerStyle={styles.listPadding} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 20,
    },
    titleCategory: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 25,
        marginBottom: 15,
    },
    titleText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '600',
    },
    arrowText: {
        color: '#00E676',
        fontSize: 22,
    },
    listPadding: {
        paddingLeft: 25,
        paddingRight: 10,
    }
});