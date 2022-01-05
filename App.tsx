import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FontAwesome5} from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const BottomTabNavigator = createBottomTabNavigator();


const Home: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text>Open up App.tsx to start working on your app!</Text>
            <StatusBar style="auto"/>
        </View>
    );
}

const App: React.FC = () => {
    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator
                screenOptions={{tabBarStyle: {height: 56, paddingBottom: 7}}}
                initialRouteName='WorkoutScreen'>
                <BottomTabNavigator.Screen
                    name="ExercisesScreen"
                    component={Home}
                    options={{
                        headerTitleStyle: {fontSize: 24},
                        title: 'Ejercicios',
                        tabBarLabelStyle: {fontSize: 13},
                        tabBarIcon: ({color, size}) => (
                            <FontAwesome5 name="dumbbell" size={size - 2} color={color} style={{paddingTop: 4}}/>
                        )
                    }}
                />
                <BottomTabNavigator.Screen
                    name="WorkoutScreen"
                    component={Home}
                    options={{
                        headerTitleStyle: {fontSize: 24},
                        title: 'Tus entrenamientos',
                        tabBarLabel: 'Entrenamientos',
                        tabBarLabelStyle: {fontSize: 12},
                        tabBarIcon: ({color, size}) => (
                            <FontAwesome5 name="list-alt" size={size} color={color} style={{paddingTop: 4}}/>
                        )
                    }}
                />
                <BottomTabNavigator.Screen
                    name="ProgressScreen"
                    component={Home}
                    options={{
                        headerTitleStyle: {fontSize: 24},
                        title: 'Tu progreso',
                        tabBarLabel: 'Progreso',
                        tabBarLabelStyle: {fontSize: 12, margin: 0, padding: 0},
                        tabBarIcon: ({color, size}) => (
                            <FontAwesome5 name="calendar-alt" size={size} color={color} style={{paddingTop: 4}}/>
                        )
                    }}
                />
                <BottomTabNavigator.Screen
                    name="ProfileScreen"
                    component={Home}
                    options={{
                        headerTitleStyle: {fontSize: 24},
                        title: 'Tu perfil',
                        tabBarLabel: 'Perfil',
                        tabBarLabelStyle: {fontSize: 12, margin: 0, padding: 0},
                        tabBarIcon: ({color, size}) => (
                            <FontAwesome5 name="user" size={size} color={color} style={{paddingTop: 4}}/>
                        )
                    }}
                />
            </BottomTabNavigator.Navigator>
        </NavigationContainer>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;
