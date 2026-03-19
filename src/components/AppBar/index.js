import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function AppBar({ activeScreen }) {
    const getIconColor = (screenName) => {
        return activeScreen === screenName ? '#00E676' : '#8E8E93';
    };

    const navigateTo = (routeName, screenKey) => {
        if (activeScreen === screenKey) {
            return;
        } else {
            router.push(routeName);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>

                <TouchableOpacity
                    style={styles.tabItem}
                    onPress={() => navigateTo('/', 'home')}
                >
                    <Ionicons
                        name={activeScreen === 'home' ? "home" : "home-outline"}
                        size={24}
                        color={getIconColor('home')}
                    />
                    <Text style={[styles.tabText, { color: getIconColor('home') }]}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.tabItem}
                    onPress={() => navigateTo('/lighting', 'lighting')}
                >
                    <Ionicons
                        name={activeScreen === 'lighting' ? "bulb" : "bulb-outline"}
                        size={24}
                        color={getIconColor('lighting')}
                    />
                    <Text style={[styles.tabText, { color: getIconColor('lighting') }]}>Luzes</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.tabItem}
                    onPress={() => navigateTo('/climate', 'climate')}
                >
                    <Ionicons
                        name={activeScreen === 'climate' ? "thermometer" : "thermometer-outline"}
                        size={24}
                        color={getIconColor('climate')}
                    />
                    <Text style={[styles.tabText, { color: getIconColor('climate') }]}>Climate</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.tabItem}
                    onPress={() => navigateTo('/security', 'security')}
                >
                    <Ionicons
                        name={activeScreen === 'security' ? "shield-checkmark" : "shield-checkmark-outline"}
                        size={24}
                        color={getIconColor('security')}
                    />
                    <Text style={[styles.tabText, { color: getIconColor('security') }]}>Segur.</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.tabItem}
                    onPress={() => navigateTo('/energy', 'energy')}
                >
                    <Ionicons
                        name={activeScreen === 'energy' ? "flash" : "flash-outline"}
                        size={24}
                        color={getIconColor('energy')}
                    />
                    <Text style={[styles.tabText, { color: getIconColor('energy') }]}>Energy</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingHorizontal: 20,
        paddingBottom: 25,
        backgroundColor: 'transparent',
    },
    content: {
        flexDirection: 'row',
        backgroundColor: '#1A1A1A',
        height: 70,
        borderRadius: 35,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 10,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.05)',
    },
    tabItem: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
    },
    tabText: {
        fontSize: 10,
        marginTop: 4,
        fontWeight: '500',
    },
});