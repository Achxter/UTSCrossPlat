import React from 'react'
import { Text, View } from 'react-native'
import { Card, Icon, Searchbar, useTheme } from 'react-native-paper'
import catalogueData from './catalogue.json'
import { useDispatch } from 'react-redux'
import { currentID } from '../reducers/IDSlice'
import { currentMerchant } from '../reducers/merchantSlice'
import { currentNominal } from '../reducers/nominalSlice'

function validatePhoneNumber(phoneNumber) {
  const operators = {
    telkomsel: ['0852', '0853', '0811', '0812', '0813', '0821', '0822', '0823', '0851'],
    indosat: ['0855', '0856', '0857', '0858', '0814', '0815', '0816'],
    xl: ['0817', '0818', '0819', '0859', '0877', '0878'],
    axis: ['0832', '0833', '0838'],
    tri: ['0895', '0896', '0897', '0898', '0899'],
    smartfren: ['0881', '0882', '0883', '0884', '0885', '0886', '0887', '0888', '0889'],
  };

  if (!phoneNumber.startsWith('08') || phoneNumber.length < 10 || phoneNumber.length > 13) {
    return '1';
  }

  const prefix = phoneNumber.slice(0, 4);
  for (const [operator, prefixes] of Object.entries(operators)) {
    if (prefixes.includes(prefix)) {
      return `${operator}`;
    }
  }

  return '2';
}

function validatePLNNumber(plnNumber) {
  if (!/^[1-9]\d{0,11}$/.test(plnNumber)) {
    return '0';
  }
  return '1';
}

function validateBPJSNumber(bpjsNumber) {
  if (!/^0\d{12}$/.test(bpjsNumber)) {
    return '0';
  }
  return '1';
}

function Catalogue({ route, navigation }) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [alert, setAlert] = React.useState('');
  const { category } = route.params;
  const { pulsa, token, bpjs } = catalogueData.catalogue;
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <View style={{ paddingHorizontal: 16, marginTop: 16 }}>
      {category === 'pulsa' && (
        <View>
          <Searchbar
            placeholder="Contoh: 085123456789"
            onChangeText={(text) => {
              setSearchQuery(text);
              if (validatePhoneNumber(text) == '1') {
                setAlert('Nomor tidak dikenali.');
              } else if (validatePhoneNumber(text) == '2') {
                setAlert('Operator tidak dikenali.');
              } else {
                setAlert('');
              }
            }}
            value={searchQuery}
            clearIcon='close'
            keyboardType='phone-pad'
          />
          <Text style={{ color: theme.colors.error, textAlign: 'center', fontSize: 20 }}>{alert}</Text>
          {searchQuery.length >= 10 && alert === '' && (
            <View>
              <Text style={{ fontSize: 20, marginVertical: 16, textAlign: 'center', color: theme.colors.onBackground }}>Pilih Nominal Pulsa</Text>
              {pulsa.amounts.map((item) => (
                <Card
                  key={item.amount.toString()}
                  style={{ marginVertical: 6, paddingVertical: 20, backgroundColor: theme.colors.secondaryContainer }}
                  onPress={() => {
                    dispatch(currentID(searchQuery));
                    dispatch(currentMerchant(validatePhoneNumber(searchQuery)));
                    dispatch(currentNominal(item.chargedAmount));
                    navigation.navigate('Confirm');
                  }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <Text style={{ fontSize: 20, color: theme.colors.onSecondaryContainer }}>
                      {item.amount.toLocaleString('id-ID')}
                    </Text>
                    <Icon source='arrow-right-circle' color={theme.colors.onSecondaryContainer} size={30} />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: theme.colors.onSecondaryContainer }}>
                      {item.chargedAmount.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
                    </Text>
                  </View>
                </Card>
              ))}
            </View>
          )}
        </View>
      )}
      {category === 'token' && (
        <View>
          <Searchbar
            placeholder="Masukkan ID Pelanggan PLN"
            onChangeText={(text) => {
              setSearchQuery(text);
              if (validatePLNNumber(text) == '0') {
                setAlert('ID Pelanggan tidak valid.');
              } else {
                setAlert('');
              }
            }}
            value={searchQuery}
            clearIcon='close'
            keyboardType='phone-pad'
          />
          <Text style={{ color: 'red', textAlign: 'center', fontSize: 20 }}>{alert}</Text>
          {searchQuery.length >= 11 && alert === '' && (
            <View>
              <Text style={{ fontSize: 20, marginVertical: 16, textAlign: 'center' }}>Pilih Nominal Token Listrik</Text>
              {token.amounts.map((item) => (
                <Card
                  key={item.amount.toString()}
                  style={{ marginVertical: 6, paddingVertical: 20 }}
                  onPress={() => {
                    dispatch(currentID(searchQuery));
                    dispatch(currentMerchant('pln'));
                    dispatch(currentNominal(item.chargedAmount));
                    navigation.navigate('Confirm');
                  }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <Text style={{ fontSize: 20, color: 'primary' }}>
                      {item.amount.toLocaleString('id-ID')}
                    </Text>
                    <Icon source='arrow-right-circle' size={30} />
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                      {item.chargedAmount.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
                    </Text>
                  </View>
                </Card>
              ))}
            </View>
          )}
        </View>
      )}
      {category === 'bpjs' && (
        <View>
          <Searchbar
            placeholder="Masukkan ID Peserta BPJS"
            onChangeText={(text) => {
              setSearchQuery(text);
              if (validateBPJSNumber(text) == '0') {
                setAlert('Nomor BPJS tidak valid.');
              } else {
                setAlert('');
              }
            }}
            value={searchQuery}
            clearIcon='close'
            keyboardType='phone-pad'
          />
          <Text style={{ color: 'red', textAlign: 'center', fontSize: 20 }}>{alert}</Text>
          {searchQuery.length == 13 && alert === '' && (
            <View>
              <Text style={{ fontSize: 20, marginVertical: 16, textAlign: 'center' }}>Pilih Durasi BPJS</Text>
              {bpjs.amounts.map((item) => (
                <Card
                  key={item.amount.toString()}
                  style={{ marginVertical: 6, paddingVertical: 20 }}
                  onPress={() => {
                    dispatch(currentID(searchQuery));
                    dispatch(currentMerchant('bpjs'));
                    dispatch(currentNominal(item.chargedAmount));
                    navigation.navigate('Confirm');
                  }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <Text style={{ fontSize: 20, color: 'primary' }}>
                      {item.bulan} bulan
                    </Text>
                    <Icon source='arrow-right-circle' size={30} />
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                      {item.chargedAmount.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
                    </Text>
                  </View>
                </Card>
              ))}
            </View>
          )}
        </View>
      )}
    </View >
  )
}

export default Catalogue