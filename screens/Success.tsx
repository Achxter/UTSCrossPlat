import React from 'react'
import { Text, View } from 'react-native'
import { Button, Icon, useTheme } from 'react-native-paper'
import { useFocusEffect } from '@react-navigation/native';
import { BackHandler } from 'react-native';
import { useSelector } from 'react-redux';

function Success({ navigation }) {
  const nominal = useSelector((state: { nominal: { value: number } }) => state.nominal.value);
  const saldo = useSelector((state: { saldo: { value: number } }) => state.saldo.value);
  const status = useSelector((state: { status: { value: boolean } }) => state.status.value);
  const theme = useTheme();

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => true;
      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  );
  return (
    <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: status ? '#0077b6' : '#e5383b' }}>
      {status ? (
        <>
          <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Pembayaran Berhasil</Text>
          <Icon size={200} source='check-circle' color='white' />
          <Text style={{ color: 'white', fontSize: 28, fontWeight: 'bold', marginTop: 8 }}>{nominal.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</Text>
          <Text style={{ color: 'white', fontSize: 16, marginTop: 16 }}>Terima kasih telah berbelanja di All-U-Need</Text>
          <Text style={{ color: 'white', fontSize: 16, marginTop: 8 }}>Saldo kamu sudah ditarik, sisa saldo</Text>
          <Text style={{ color: 'white', fontSize: 16, marginTop: 8 }}>kamu sekarang adalah {saldo.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</Text>
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
      <Button
        style={{ backgroundColor: theme.colors.primary, position: 'absolute', bottom: 50, width: '60%' }}
        mode='contained-tonal'
        onPress={() => navigation.navigate('Homepage')}
      >
        <Text style={{ color: theme.colors.onPrimary }}>
          Tutup
        </Text>
      </Button>
    </View>
  )
}

export default Success