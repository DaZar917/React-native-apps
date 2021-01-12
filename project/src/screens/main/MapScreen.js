import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, PermissionsAndroid, SafeAreaView, Platform, ImageBackground } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { geolocated } from "react-geolocated";
const AppBackgroundColor = '#3BBD1C'
import MapView, { Marker, Callout } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps {PROVIDER_GOOGLE}
import { Dimensions } from 'react-native';
import { useTranslation } from 'react-i18next';
import { StatusBar } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
const { height, width } = Dimensions.get('screen')
import Geolocation from '@react-native-community/geolocation';
import { TouchableOpacity } from 'react-native';
const MapScreen = ({ route, navigation }) => {
  const { color } = route.params;
  const [
    currentLongitude,
    setCurrentLongitude
  ] = useState('-122.08400000000002');

  const [
    currentLatitude,
    setCurrentLatitude
  ] = useState('37.421998333333335');
  const [
    locationStatus,
    setLocationStatus
  ] = useState('');

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        getOneTimeLocation();
        subscribeLocationLocation();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your location',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            getOneTimeLocation();
            subscribeLocationLocation();
          } else {
            setLocationStatus('Permission Denied');
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };
    requestLocationPermission();
    return () => {
      Geolocation.clearWatch(watchID);
    };
  }, []);

  const getOneTimeLocation = () => {
    setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(
      (position) => {
        setLocationStatus('You are Here');
        const currentLongitude =
          JSON.stringify(position.coords.longitude);
        const currentLatitude =
          JSON.stringify(position.coords.latitude);
        setCurrentLongitude(currentLongitude);
        setCurrentLatitude(currentLatitude);
      },
      (error) => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000
      },
    );
  };

  const subscribeLocationLocation = () => {
    watchID = Geolocation.watchPosition(
      (position) => {
        setLocationStatus('You are Here');
        console.log(position);
        const currentLongitude =
          JSON.stringify(position.coords.longitude);
        const currentLatitude =
          JSON.stringify(position.coords.latitude);
        setCurrentLongitude(currentLongitude);
        setCurrentLatitude(currentLatitude);
      },
      (error) => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 1000
      },
    );
  };
  const { t, i18n } = useTranslation();
  return (
    <Container>
      <Header style={{ backgroundColor: color }}>
        <StatusBar backgroundColor={color} />
        <Left>
          <Button transparent onPress={() => navigation.openDrawer()}>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>{t('Map')}</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name='md-map' />
          </Button>
        </Right>
      </Header>
      <Content style={{backgroundColor: color+'10',}}>
        <Container style={styles.container}>
          <MapView style={styles.map} region={{ latitude: parseFloat(currentLatitude), longitude: parseFloat(currentLongitude), latitudeDelta: 0.5, longitudeDelta: 0.5, }}>
            <MapView.Marker coordinate={{ latitude: parseFloat(currentLatitude), longitude: parseFloat(currentLongitude) }} title={t('You')} pinColor={'blue'} />
            {route.params.locations.map(marker => (
              <Marker key={marker.id} coordinate={marker.coordinates} title={marker.title} onCalloutPress={() => navigation.navigate("ShopInfo", {
                coordinates: marker.coordinates,
                title: marker.title,
                workHours: marker.workHours,
                uri: marker.uri,
                location: marker.location,
                phonenumber: marker.phonenumber,
                email: marker.email,
                rating: marker.rating,
                website: marker.website,
                icon: marker.icon,
                color:color
              })} >
                <Callout><View><Text>{t('Visit')} {marker.title}</Text></View></Callout>
              </Marker>
            ))}
          </MapView>
        </Container>
      </Content>
      <Footer>
        <FooterTab >
          <Button vertical active style={{ backgroundColor: color, borderRadius: 0 }} onPress={() => navigation.navigate('Home',{color:color})}>
            <Icon name="home" />
            <Text>{t('Home')}</Text>
          </Button>
          <Button vertical active style={{ backgroundColor: color, borderRadius: 0 }} onPress={() => navigation.navigate('Shops',{color:color})}>
            <Icon name="lock-closed" />
            <Text>{t('Shops')}</Text>
          </Button>
          <Button vertical active style={{ backgroundColor: color, borderRadius: 0 }} onPress={() => navigation.navigate('Libraries',{color:color})}>
            <Icon name="md-albums" />
            <Text>{t('Libraries')}</Text>
          </Button>
          <Button vertical active style={{ backgroundColor: color, borderRadius: 0 }} onPress={() => navigation.navigate('Books',{color:color})}>
            <Icon name="book" />
            <Text>{t('Books')}</Text>
          </Button>

        </FooterTab>
      </Footer>
    </Container>
  );

}

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerMap: {

    height: height,
    width: width,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: 'red',
  },
  pinText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
  },
});

