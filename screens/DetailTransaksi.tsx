import React from 'react'
import { Text, View } from 'react-native'
import { Divider, Icon } from 'react-native-paper'

function DetailTransaksi() {
  return (
    <View style={{ backgroundColor: '#FFFFFF', marginVertical: 'auto', marginHorizontal: 16, padding: 16, alignItems: 'center' }}>
      <Icon
        size={80}
        source={require('../assets/logo-telkomsel.png')} />
      <Divider style={{ height: 1, marginVertical: 20, width: '100%' }} />
      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 18 }}>ID Transaction</Text>
        <Text style={{ fontSize: 18 }}>ID 001</Text>
      </View>
      <Divider style={{ height: 1, marginVertical: 20, width: '100%' }} />
      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 18 }}>Username</Text>
        <Text style={{ fontSize: 18 }}>Hans Philemon Limanza</Text>
      </View>
      <Divider style={{ height: 1, marginVertical: 20, width: '100%' }} />
      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 18 }}>Merchant</Text>
        <Text style={{ fontSize: 18 }}>Telkomsel</Text>
      </View>
      <Divider style={{ height: 1, marginVertical: 20, width: '100%' }} />
      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 18 }}>Tanggal Transaksi</Text>
        <Text style={{ fontSize: 18 }}>22 Oct 2024, 16:42</Text>
      </View>
      <Divider style={{ height: 1, marginVertical: 20, width: '100%' }} />
      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 18 }}>Status</Text>
        <Text style={{ color: 'green', fontSize: 18 }}>Berhasil</Text>
      </View>
      <Divider style={{ height: 1, marginVertical: 20, width: '100%' }} />
    </View>
  )
}

export default DetailTransaksi