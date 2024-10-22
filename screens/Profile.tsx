import React from 'react'
import { Image, Text, View } from 'react-native'
import { Card, Divider, Switch } from 'react-native-paper'

function Profile() {
  return (
    <View style={{
      height: '100%',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      paddingHorizontal: 16,
      gap: 16
    }}>
      <Image style={{
        marginTop: 50,
        aspectRatio: 1 / 1,
        width: '100%',
        height: 250,
        resizeMode: 'cover',
        borderRadius: 150,
      }} source={require('../assets/hans.jpg')} />
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 20 }}>Hans Philemon Limanza</Text>
        <Text style={{ fontSize: 20 }}>00000070710</Text>
        <Text style={{ fontSize: 20 }}>09 Februari 2004</Text>
      </View>
      <Divider style={{ height: 1, width: '100%' }} />
      <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
        <Text style={{ fontSize: 16 }}>Language</Text>
        <Switch disabled />
      </View>
      <Divider style={{ height: 1, width: '100%' }} />
      <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
        <Text style={{ fontSize: 16 }}>Dark Mode</Text>
        <Switch />
      </View>
      <Divider style={{ height: 1, width: '100%' }} />
    </View>
  )
}

export default Profile