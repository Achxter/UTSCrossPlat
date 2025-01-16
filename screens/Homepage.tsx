import React from 'react'
import { Text, View, Image, Dimensions, StyleSheet, ImageBackground } from 'react-native';
import { Card, Divider, Icon, IconButton, useTheme } from 'react-native-paper';
import Carousel from 'react-native-reanimated-carousel';
import { useSelector } from 'react-redux'

const carouselData = [
  { id: 1, title: 'Promo 1', image: require('../assets/carousel1.png') },
  { id: 2, title: 'Promo 2', image: require('../assets/carousel2.png') },
  { id: 3, title: 'Promo 3', image: require('../assets/carousel3.png') },
];

function Homepage({ navigation }) {
  const theme = useTheme();
  const { width: windowWidth } = Dimensions.get('window');
  const width = windowWidth > 430 ? 430 : windowWidth;
  const saldo = useSelector((state: { saldo: { value: number } }) => state.saldo.value)
  return (
    <View style={{ height: '100%', paddingHorizontal: 16, backgroundColor: theme.colors.background, justifyContent: 'center' }}>
      <Card style={{ marginTop: 20, overflow: 'hidden' }}>
        <ImageBackground style={{ padding: 16 }} imageStyle={{ opacity: 0.2, left: 80, right: -80, bottom: -300 }} source={require('../assets/logo-umn.png')}>
          <Text style={{ color: theme.colors.onBackground }}>Welcome,</Text>
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 4, color: theme.colors.onBackground }}>
            Hans Philemon Limanza
          </Text>
          <Divider style={{ marginTop: 16 }} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
            <Text style={{ fontSize: 18, color: theme.colors.onBackground }}>Saldo</Text>
            <Text style={{ fontSize: 18, color: theme.colors.onBackground, fontWeight: 'bold' }}>{saldo.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</Text>
          </View>
        </ImageBackground>
      </Card>
      <View style={{ marginVertical: 36, gap: 16 }}>
        <Card style={{ overflow: 'hidden' }} onPress={() => navigation.navigate('Catalogue', { category: 'pulsa' })}>
          <ImageBackground imageStyle={{ opacity: 0.2, left: 200, right: 20, bottom: -80 }} source={require('../assets/pulsa.png')}>
            <Card.Title
              title="Pulsa"
              left={(props) => <IconButton mode='contained' {...props} icon={() => <Icon size={45} source={require('../assets/pulsa.png')} />} />}
              leftStyle={{ marginRight: 28 }}
            />
          </ImageBackground>
        </Card>
        <Card style={{ overflow: 'hidden' }} onPress={() => navigation.navigate('Catalogue', { category: 'token' })}>
          <ImageBackground imageStyle={{ opacity: 0.2, left: 190, right: 30, bottom: -80 }} source={require('../assets/token.png')}>
            <Card.Title
              title="Token Listrik"
              left={(props) => <IconButton mode='contained' {...props} icon={() => <Icon size={45} source={require('../assets/token.png')} />} />}
              leftStyle={{ marginRight: 28 }} />
          </ImageBackground>
        </Card>
        <Card style={{ overflow: 'hidden' }} onPress={() => navigation.navigate('Catalogue', { category: 'bpjs' })}>
          <ImageBackground imageStyle={{ opacity: 0.2, left: 180, right: 40, bottom: -80 }} source={require('../assets/bpjs.png')}>
            <Card.Title
              title="BPJS"
              left={(props) => <IconButton mode='contained' {...props} icon={() => <Icon size={45} source={require('../assets/bpjs.png')} />} />}
              leftStyle={{ marginRight: 28 }} />
          </ImageBackground>
        </Card>
      </View>
      <Carousel
        loop
        width={width - 32}
        height={width / 2}
        autoPlay={true}
        data={carouselData}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <View key={item.id} style={styles.carouselItem}>
            <Image
              source={item.image}
              style={styles.carouselImage}
              resizeMode="cover"
            />
            <Text style={styles.carouselText}>{item.title}</Text>
          </View>
        )}
      />

    </View >
  )
}

const styles = StyleSheet.create({
  carouselItem: {
    flex: 1,
    marginHorizontal: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  carouselImage: {
    width: '100%',
    height: '100%',
  },
  carouselText: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 5,
    borderRadius: 5,
    fontSize: 16,
  },
});

export default Homepage