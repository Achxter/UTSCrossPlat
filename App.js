import './gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Icon, PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import HomeStack from './HomeStack';
import HistoryStack from './HistoryStack';
import Profile from './screens/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <PaperProvider>
          <Tab.Navigator screenOptions={{tabBarStyle: {height: 55}}}>
            <Tab.Screen name="Home" component={HomeStack} options={{
              headerShown: false,
              tabBarIcon: ({ color }) => (
                <Icon source="home" color={color} size={35} />
              ),
            }} />
            <Tab.Screen name="Transaksi" component={HistoryStack} options={{
              headerShown: false,
              tabBarIcon: ({ color }) => (
                <Icon source="history" color={color} size={35} />
              ),
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
              headerShown: false,
              tabBarIcon: ({ color }) => (
                <Icon source="account" color={color} size={35} />
              ),
            }} />
          </Tab.Navigator>
        </PaperProvider>
      </NavigationContainer>
    </SafeAreaProvider>
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
