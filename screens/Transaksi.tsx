import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { BackHandler, FlatList, Text, View, ImageBackground, Image } from 'react-native';
import { Card, Icon, useTheme } from 'react-native-paper';
import { useSelector } from 'react-redux';

interface HistoryItem {
  transactionID: string;
  number: string;
  merchant: string;
  nominal: number;
  status: boolean;
  date: string;
}

interface RootState {
  history: HistoryItem[];  // Adjust this to match your actual structure
}

function Transaksi({ navigation }) {
  const history = useSelector((state: RootState) => state.history);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.navigate('Homepage');
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [navigation])
  );
  const theme = useTheme();

  return (
    <View style={{ height: '100%', backgroundColor: theme.colors.background }}>
      {history.length === 0 ? (
        <View style={{ height: '100%', backgroundColor: theme.colors.background, alignItems: 'center', justifyContent: 'center' }}>
          <Icon size={50} source={() => (<Image style={{ width: 300, height: 300, borderRadius: 150, resizeMode: 'center', backgroundColor: theme.colors.surfaceVariant }} source={require('../assets/no-data.png')} />)} />
          <Text style={{ fontSize: 20, marginTop: 50, textAlign: 'center', color: theme.colors.onBackground }}>
            Tidak ada data transaksi
          </Text>
        </View>
      ) :
        <FlatList
          data={history}
          keyExtractor={(item) => item.transactionID}
          renderItem={({ item }) => (
            <Card
              style={{ backgroundColor: theme.colors.secondaryContainer, padding: 16, paddingHorizontal: 24, marginBottom: 10 }}
              onPress={() => navigation.navigate('DetailTransaksi', { item })}
            >
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                  <Text style={{ fontSize: 16, color: theme.colors.onSecondaryContainer }}>{item.transactionID}</Text>
                  <Text style={{ fontSize: 16, color: theme.colors.onSecondaryContainer }}>{item.merchant.toUpperCase()}</Text>
                  <Text style={{ fontSize: 16, color: item.status ? '#52b788' : 'red' }}>
                    {item.status ? 'Berhasil' : 'Gagal'}
                  </Text>
                </View>
                <View>
                  <Text style={{ fontSize: 16, color: theme.colors.onSecondaryContainer, textAlign: 'right' }}>{item.date}</Text>
                  <Text style={{ fontSize: 16, color: theme.colors.onSecondaryContainer, textAlign: 'right' }}>{item.nominal.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</Text>
                </View>
              </View>
            </Card>
          )}
          contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 16 }}
        />
      }
    </View>
  );
}

export default Transaksi;
