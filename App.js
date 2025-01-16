import './gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
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
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  MD3DarkTheme,
  MD3LightTheme,
  adaptNavigationTheme,
} from 'react-native-paper';
import { PreferencesContext } from './preferenceContext';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  useEffect(() => {
    SplashScreen.preventAutoHideAsync();

    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 1000);
  }, []);
  
  const { LightTheme, DarkTheme } = adaptNavigationTheme({
    reactNavigationLight: NavigationDefaultTheme,
    reactNavigationDark: NavigationDarkTheme,
  });

  const CombinedDefaultTheme = {
    ...MD3LightTheme,
    ...LightTheme,
    colors: {
      ...MD3LightTheme.colors,
      ...LightTheme.colors,
    },
  };
  const CombinedDarkTheme = {
    ...MD3DarkTheme,
    ...DarkTheme,
    colors: {
      ...MD3DarkTheme.colors,
      ...DarkTheme.colors,
    },
  };
  const [isThemeDark, setIsThemeDark] = React.useState(false);
  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  const toggleTheme = React.useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark]
  );

  return (
    <PreferencesContext.Provider value={preferences}>
      <Provider store={store}>
        <SafeAreaProvider style={{ maxWidth: Platform.OS === 'web' ? '430px' : '100%', marginHorizontal: Platform.OS === 'web' ? 'auto' : '' }}>
          <PaperProvider theme={theme}>
            <NavigationContainer theme={theme}>
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
            </NavigationContainer>
          </PaperProvider>
        </SafeAreaProvider>
      </Provider >
    </PreferencesContext.Provider>
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
