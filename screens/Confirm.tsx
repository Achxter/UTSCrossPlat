import React from 'react'
import { Image, Text, View } from 'react-native'
import { Button, Card, Divider, Icon, IconButton } from 'react-native-paper'
import { useSelector } from 'react-redux'

function Confirm({ navigation }) {
  const ID = useSelector((state: { ID: { value: string } }) => state.ID.value)
  const merchant = useSelector((state: { merchant: { value: string } }) => state.merchant.value)
  const nominal = useSelector((state: { nominal: { value: number } }) => state.nominal.value)
  const saldo = useSelector((state: { saldo: { value: number } }) => state.saldo.value)
  const merchantImages = {
    'telkomsel': require('../assets/logo-telkomsel.png'),
    'indosat': require('../assets/logo-indosat.png'),
    'xl': require('../assets/logo-xl.png'),
    'tri': require('../assets/logo-tri.png'),
    'smartfren': require('../assets/logo-smartfren.png'),
    'pln': require('../assets/logo-pln.png'),
    'bpjs': require('../assets/logo-bpjs.png'),
  };
  const imgSource = merchantImages[merchant] || require('../assets/icon.png');

  return (
    <View style={{ height: '100%' }}>
      <View style={{ backgroundColor: "orange", alignItems: 'center', width: '100%' }}>
        <Card style={{ width: '90%', paddingRight: 24, paddingVertical: 8, marginVertical: 16 }}>
          <Card.Title
            title={merchant.toUpperCase()}
            titleStyle={{ fontSize: 18, marginBottom: -6, fontWeight: 'bold' }}
            subtitle={ID}
            left={() => (
              <Icon size={45} source={imgSource} />
            )}
            right={() => (
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{nominal.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</Text>
            )}
          />
        </Card>
      </View>
      <View style={{ marginHorizontal: 8, paddingHorizontal: 16, paddingVertical: 24, backgroundColor: 'white', marginTop: 30, borderRadius: 8 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Metode Pembayaran</Text>
        <Card.Title
          title="Saldo All-U-Need"
          titleStyle={{ fontSize: 16, fontWeight: 'bold', marginBottom: -6 }}
          subtitle={saldo.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
          left={() => (
            <IconButton mode='contained' size={35} icon={() => (
              <Icon size={35} source={require('../assets/saldo.png')} />
            )} />
          )}
          leftStyle={{ marginLeft: -24, marginRight: 24 }}
          right={() => (
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{nominal.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</Text>
          )}
        />
        <Divider style={{ height: 2 }} />
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 30 }}>Detail Pembayaran</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
          <Text style={{ fontSize: 16 }}>Harga</Text>
          <Text style={{ fontSize: 16 }}>{nominal.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
          <Text style={{ fontSize: 16 }}>Biaya Tambahan</Text>
          <Text style={{ fontSize: 16 }}>Rp 0</Text>
        </View>
        <Divider style={{ marginVertical: 20, height: 2 }} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Total Pembayaran</Text>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{nominal.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</Text>
        </View>
      </View>
      <Button style={{
        width: '90%',
        borderRadius: 100,
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        paddingVertical: 6
      }}
        mode="contained-tonal"
        onPress={() => navigation.navigate('InsertPin')}
        disabled={nominal > saldo} >
        <Text style={{ fontSize: 16 }}>
          Konfirmasi
        </Text>
      </Button>
    </View>
  )
}

export default Confirm