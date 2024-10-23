import React from 'react'
import { Text, View, Image, Dimensions, StyleSheet, ImageBackground } from 'react-native';
import { Card, Divider, Icon, IconButton } from 'react-native-paper';
import Carousel from 'react-native-reanimated-carousel';

const carouselData = [
  { id: 1, title: 'Promo 1', image: require('../assets/carousel1.jpg') },
  { id: 2, title: 'Promo 2', image: require('../assets/carousel2.png') },
  { id: 3, title: 'Promo 3', image: require('../assets/carousel3.webp') }, // Corrected file extension
];

function Homepage({ navigation }) {
  const { width } = Dimensions.get('window');
  return (
    <View style={{ height: '100%', paddingHorizontal: 16, backgroundColor: '#FFFFFF', justifyContent: 'center' }}>
      <Card style={{ marginTop: 20, overflow: 'hidden' }}>
        <ImageBackground style={{ padding: 16 }} imageStyle={{ opacity: 0.2, left: 80, right: -80, bottom: -300 }} source={require('../assets/logo-umn.png')}>
          <Text>Welcome,</Text>
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 4 }}>
            Hans Philemon Limanza
          </Text>
          <Divider style={{ marginTop: 16 }} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
            <Text style={{ fontSize: 18 }}>Saldo</Text>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Rp 100.000</Text>
          </View>
        </ImageBackground>
      </Card>
      <View style={{ marginVertical: 36, gap: 16 }}>
        <Card onPress={() => navigation.navigate('Catalogue', { category: 'pulsa' })}>
          <Card.Title
            title="Pulsa"
            left={(props) => <Icon {...props} source={require('../assets/pulsa.png')} />}
          />
        </Card>
        <Card onPress={() => navigation.navigate('Catalogue', { category: 'token' })}>
          <Card.Title
            title="Token Listrik"
            left={(props) => <Icon {...props} source={require('../assets/token.png')} />}
          />
        </Card>
        <Card onPress={() => navigation.navigate('Catalogue', { category: 'bpjs' })}>
          <Card.Title
            title="BPJS"
            left={(props) => <Icon {...props} source={require('../assets/bpjs.png')} />}
          />
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