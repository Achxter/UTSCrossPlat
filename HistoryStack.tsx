// src/navigation/HistoryStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Transaksi from './screens/Transaksi';
import DetailTransaksi from './screens/DetailTransaksi';

const Stack = createStackNavigator();

const HistoryStack = () => (
  <Stack.Navigator screenOptions={{ animationTypeForReplace: 'push' }}>
    <Stack.Screen name="HistoriTransaksi" component={Transaksi} />
    <Stack.Screen name="DetailTransaksi" component={DetailTransaksi} />
  </Stack.Navigator>
);

export default HistoryStack;
