// src/navigation/HistoryStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Transaksi from './screens/Transaksi';
import DetailTransaksi from './screens/DetailTransaksi';
import { Icon } from 'react-native-paper';
import { Text, View } from 'react-native';

const Stack = createStackNavigator();

const HistoryStack = () => (
  <Stack.Navigator
    screenOptions={{
      animationTypeForReplace: 'push',
      headerTitleAlign: 'center', // This will center the header title
    }}
  >
    <Stack.Screen name="Transaksi" component={Transaksi} />
    <Stack.Screen name="DetailTransaksi" component={DetailTransaksi}
      options={{
        headerTitle: 'Detail Transaksi',
      }}
    />
  </Stack.Navigator>
);

export default HistoryStack;
