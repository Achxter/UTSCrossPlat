import React from 'react'
import { Image, Text, View } from 'react-native'
import { Button, Card, Divider, Icon, IconButton } from 'react-native-paper'

function Confirm({ navigation }) {
  return (
    <View style={{ height: '100%' }}>
      <View style={{ backgroundColor: "orange", alignItems: 'center', width: '100%' }}>
        <Card style={{ width: '90%', paddingRight: 24, paddingVertical: 8, marginVertical: 16 }}>
          <Card.Title
            title="Telkomsel"
            titleStyle={{ fontSize: 18, marginBottom: -6, fontWeight: 'bold' }}
            subtitle="085156014116"
            left={() => (
              <Icon size={45} source={require('../assets/logo-telkomsel.png')} />
            )}
            right={() => (
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Rp 6.500</Text>
            )}
          >
          </Card.Title>
        </Card>
      </View>
      <View style={{ marginHorizontal: 8, paddingHorizontal: 16, paddingVertical: 24, backgroundColor: 'white', marginTop: 30, borderRadius: 8 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Metode Pembayaran</Text>
        <Card.Title
          title="Saldo All-U-Need"
          titleStyle={{ fontSize: 16, fontWeight: 'bold', marginBottom: -6 }}
          subtitle="Rp 90.000"
          left={() => (
            <IconButton mode='contained' size={35} icon={() => (
              <Icon size={35} source={require('../assets/saldo.png')} />
            )} />
          )}
          leftStyle={{ marginLeft: -24, marginRight: 24 }}
          right={() => (
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Rp 6.500</Text>
          )}
        />
        <Divider style={{ height: 2 }} />
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 30 }}>Detail Pembayaran</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
          <Text style={{ fontSize: 16 }}>Harga</Text>
          <Text style={{ fontSize: 16 }}>Rp 6.500</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
          <Text style={{ fontSize: 16 }}>Biaya Tambahan</Text>
          <Text style={{ fontSize: 16 }}>Rp 0</Text>
        </View>
        <Divider style={{ marginVertical: 20, height: 2 }} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Total Pembayaran</Text>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Rp 6.500</Text>
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
        mode="contained-tonal" onPress={() => navigation.navigate('InsertPin')}>
        <Text style={{ fontSize: 16 }}>
          Konfirmasi
        </Text>
      </Button>
    </View>
  )
}

export default Confirm