import React from 'react'
import { Image, Text, View } from 'react-native'
import { Card, Divider, Switch, useTheme } from 'react-native-paper'
import { useSelector } from 'react-redux';
import { PreferencesContext } from '../preferenceContext';

function Profile() {
  const theme = useTheme();
  const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext);
  return (
    <View style={{
      height: '100%',
      alignItems: 'center',
      backgroundColor: 'theme.colors.background',
      paddingHorizontal: 16,
      gap: 16
    }}>
      <Image style={{
        marginTop: 50,
        aspectRatio: 1 / 1,
        width: 250,
        height: 250,
        resizeMode: 'cover',
        borderRadius: 150,
      }} source={require('../assets/hans.jpg')} />
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 20, color: theme.colors.onBackground }}>Hans Philemon Limanza</Text>
        <Text style={{ fontSize: 20, color: theme.colors.onBackground }}>00000070710</Text>
        <Text style={{ fontSize: 20, color: theme.colors.onBackground }}>09 Februari 2004</Text>
      </View>
      <Divider style={{ height: 1, width: '100%' }} />
      <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
        <Text style={{ fontSize: 16, color: theme.colors.onBackground }}>Language</Text>
        <Switch color={theme.colors.primary} disabled />
      </View>
      <Divider style={{ height: 1, width: '100%' }} />
      <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
        <Text style={{ fontSize: 16, color: theme.colors.onBackground }}>Dark Mode</Text>
        <Switch
          color={theme.colors.primary}
          value={isThemeDark}
          onValueChange={toggleTheme}
        />
      </View>
      <Divider style={{ height: 1, width: '100%' }} />
    </View>
  )
}

export default Profile