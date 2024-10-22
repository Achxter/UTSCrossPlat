import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from './screens/Homepage';
import Catalogue from './screens/Catalogue';
import Confirm from './screens/Confirm';
import InsertPin from './screens/InsertPin';
import Success from './screens/Success';
import { Icon, Text } from 'react-native-paper';
import { View } from 'react-native';

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName='Catalogue' screenOptions={{ animationTypeForReplace: 'push', headerStyle: { shadowColor: '#000000', shadowRadius: 5 } }}>
    <Stack.Screen name="Homepage" options={{
      headerTitle: () => {
        return (
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <Icon
              source={require('./assets/icon.png')}
              size={50} />
            <Text style={{ fontSize: 20 }}>All-U-Need</Text>
          </View>
        )
      },
    }} component={Homepage} />
    <Stack.Screen name="Catalogue" component={Catalogue} />
    <Stack.Screen name="Confirm" component={Confirm} />
    <Stack.Screen name="InsertPin" component={InsertPin} options={{ headerShown: false }} />
    <Stack.Screen name="Success" component={Success} options={{ headerShown: false }} />
  </Stack.Navigator>
);

export default HomeStack;