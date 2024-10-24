import React from 'react';
import { Text, View, Image } from 'react-native';
import { Divider, useTheme } from 'react-native-paper';

function DetailTransaksi({ route }) {
  const { item } = route.params;
  const merchantImages = {
    'telkomsel': require('../assets/logo-telkomsel.png'),
    'indosat': require('../assets/logo-indosat.png'),
    'xl': require('../assets/logo-xl.png'),
    'tri': require('../assets/logo-tri.png'),
    'smartfren': require('../assets/logo-smartfren.png'),
    'pln': require('../assets/logo-pln.png'),
    'bpjs': require('../assets/logo-bpjs.png'),
  };
  const imgSource = merchantImages[item.merchant] || require('../assets/icon.png');
  const theme = useTheme();

  return (
    <View style={{ backgroundColor: theme.colors.surfaceVariant, marginVertical: 50, marginHorizontal: 16, padding: 16, alignItems: 'center', borderRadius: 20 }}>
      <Image
        style={{ width: 80, height: 80 }}
        source={imgSource}
      />
      <Divider style={{ backgroundColor: theme.colors.secondary, height: 1, marginVertical: 20, width: '100%' }} />
      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 18, color: theme.colors.secondary }}>Transaksi ID</Text>
        <Text style={{ fontSize: 18, color: theme.colors.secondary }}>{item.transactionID}</Text>
      </View>
      <Divider style={{ backgroundColor: theme.colors.secondary, height: 1, marginVertical: 20, width: '100%' }} />
      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 18, color: theme.colors.secondary }}>Username</Text>
        <Text style={{ fontSize: 18, color: theme.colors.secondary }}>Hans Philemon Limanza</Text>
      </View>
      <Divider style={{ backgroundColor: theme.colors.secondary, height: 1, marginVertical: 20, width: '100%' }} />
      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 18, color: theme.colors.secondary }}>No. Pelanggan</Text>
        <Text style={{ fontSize: 18, color: theme.colors.secondary }}>{item.number}</Text>
      </View>
      <Divider style={{ backgroundColor: theme.colors.secondary, height: 1, marginVertical: 20, width: '100%' }} />
      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 18, color: theme.colors.secondary }}>Merchant</Text>
        <Text style={{ fontSize: 18, color: theme.colors.secondary }}>{item.merchant.toUpperCase()}</Text>
      </View>
      <Divider style={{ backgroundColor: theme.colors.secondary, height: 1, marginVertical: 20, width: '100%' }} />
      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 18, color: theme.colors.secondary }}>Tanggal Transaksi</Text>
        <Text style={{ fontSize: 18, color: theme.colors.secondary }}>{item.date}</Text>
      </View>
      <Divider style={{ backgroundColor: theme.colors.secondary, height: 1, marginVertical: 20, width: '100%' }} />
      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 18, color: theme.colors.secondary }}>Status</Text>
        <Text style={{ color: item.status ? 'green' : 'red', fontSize: 18 }}>{item.status ? 'Berhasil' : 'Gagal'}</Text>
      </View>
      <Divider style={{ backgroundColor: theme.colors.secondary, height: 1, marginVertical: 20, width: '100%' }} />
      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 18, color: theme.colors.secondary }}>Jumlah</Text>
        <Text style={{ fontSize: 18, color: theme.colors.secondary }}>{item.nominal.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</Text>
      </View>
      <Divider style={{ backgroundColor: theme.colors.secondary, height: 1, marginVertical: 20, width: '100%' }} />
    </View>
  );
}

export default DetailTransaksi;