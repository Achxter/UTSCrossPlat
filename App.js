import './gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Icon, PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import store from './store'
import { Provider } from 'react-redux'
import HomeStack from './HomeStack';
import HistoryStack from './HistoryStack';
import Profile from './screens/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <PaperProvider>
            <Tab.Navigator screenOptions={{ tabBarStyle: { height: 55 }, headerStyle: { shadowColor: '#000000', shadowRadius: 5 } }}>
              <Tab.Screen name="Home" component={HomeStack} options={{
                headerShown: false,
                tabBarIcon: ({ color }) => (
                  <Icon source="home" color={color} size={35} />
                ),
              }} />
              <Tab.Screen name="History" component={HistoryStack} options={{
                headerShown: false,
                tabBarIcon: ({ color }) => (
                  <Icon source="history" color={color} size={35} />
                ),
              }} />
              <Tab.Screen name="Profile" component={Profile} options={{
                headerTitleAlign: 'center',
                tabBarIcon: ({ color }) => (
                  <Icon source="account" color={color} size={35} />
                ),
              }} />
            </Tab.Navigator>
          </PaperProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider >
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
