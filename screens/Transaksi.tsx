import { useFocusEffect } from '@react-navigation/native';
import React from 'react'
import { BackHandler, ScrollView, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { Card } from 'react-native-paper'

function Transaksi({ navigation }) {
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.navigate('Homepage');
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  );
  
  return (
    <ScrollView style={{ backgroundColor: '#FFFFFF', paddingHorizontal: 24 }}>
      <Card style={{ padding: 16, paddingHorizontal: 24 }} onPress={() => navigation.navigate('DetailTransaksi')}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text style={{ fontSize: 16 }}>ID 001</Text>
            <Text style={{ fontSize: 16, color: 'green' }}>Berhasil</Text>
          </View>
          <View>
            <Text style={{ fontSize: 16, textAlign: 'right' }}>22 Oct 2024, 14:29</Text>
            <Text style={{ fontSize: 16, textAlign: 'right' }}>Rp. 75.000,-</Text>
          </View>
        </View>
      </Card>
    </ScrollView>
  )
}

export default Transaksi