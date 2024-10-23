import React from 'react'
import { Text, View } from 'react-native'
import { Icon } from 'react-native-paper'
import { useFocusEffect } from '@react-navigation/native';
import { BackHandler } from 'react-native';

const success = true


function Success({ navigation }) {
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => true;
      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  );
  setTimeout(() => {
    navigation.navigate('History')
  }, 2000);
  return (
    <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: success ? '#2dc653' : '#e5383b' }}>
      {success ? (
        <>
          <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Pembayaran Berhasil</Text>
          <Icon size={200} source='check-circle' color='white' />
          <Text style={{ color: 'white', fontSize: 28, fontWeight: 'bold', marginTop: 8 }}>Rp 6.500</Text>
          <Text style={{ color: 'white', fontSize: 16, marginTop: 16 }}>Terima kasih telah berbelanja di All-U-Need</Text>
          <Text style={{ color: 'white', fontSize: 16, marginTop: 8 }}>Saldo kamu sudah ditarik, sisa saldo</Text>
          <Text style={{ color: 'white', fontSize: 16, marginTop: 8 }}>kamu sekarang adalah Rp 96.000</Text>
        </>
      ) : (
        <>
          <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Pembayaran Gagal</Text>
          <Icon size={200} source='alert-circle' color='white' />
          <Text style={{ color: 'white', fontSize: 16, marginTop: 16 }}>Terjadi kesalahan saat melakukan pembayaran</Text>
          <Text style={{ color: 'white', fontSize: 16, marginTop: 8 }}>Saldo kamu tidak berkurang</Text>
          <Text style={{ color: 'white', fontSize: 16, marginTop: 8 }}>Silakan coba lagi</Text>
        </>
      )}
    </View>
  )
}

export default Success