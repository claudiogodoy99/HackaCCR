import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button,Dimensions, Image  } from 'react-native';
import MapView, {PROVIDER_GOOGLE, AnimatedRegion, Animated } from 'react-native-maps';
import Constants from 'expo-constants';

import Modal from 'react-native-modal';
import Video from 'react-native-video';
import * as Permissions from 'expo-permissions';


export default class Mapa extends React.Component {

  _conectarPulseira = async () => {
    //aqui entraria a conecção com a smart band
  }

  state = {
    isModalVisible: false,
    status: 'Start'
  };

  _geoLocation = async () => {
    const { status } = Permissions.getAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      const { status } = await Permissions.askAsync(Permissions.LOCATION);

    }
  }

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };


  
  
  render() {
    this._conectarPulseira();
    this._geoLocation();

    return (
      <View style={styles.container}>
       
        <Modal isVisible={this.state.isModalVisible}>
          <View style={{ flex: 1 }}>
            <Image source={require('./videoMock.png')} style={styles.backgroundVideo}/>
            <Button title="Voltar" onPress={this.toggleModal} />
          </View>
        </Modal>
          {/* <Button title="Simular limite te tempo" onPress={this.speak} />
          <Button title="Simular sinais de sono" onPress={this.speak2} />
          <Button title="Você apresenta sinais de fadiga" onPress={this.speak3} />
          <Button title="Ver Video" onPress={this.toggleModal} /> */}
          <MapView 
            style={styles.mapStyle} 
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            followsUserLocation={true}
            showsMyLocationButton={true}
            showsTraffic={true}
            customMapStyle={mapStyle}
            initialRegion={{
              latitude: -23.6665219,
              longitude: -46.5109832,
              latitudeDelta: 1.1922,
              longitudeDelta: 1.1421,
            }}
          >
            <MapView.Marker draggable
              coordinate={{
                latitude: -23.7104603,
                longitude: -46.4928909,
              }}
              title="Parada de Caminhoneiros: 5 estrelas"
            />
            <MapView.Marker draggable
              coordinate={{
                latitude: -23.6821604,
                longitude: -46.8754845,
              }}
              title="Parada de Caminhoneiros: 4 estrelas"
            />
            <MapView.Marker draggable
              coordinate={{
                latitude: -23.8046745,
                longitude: -46.6718345,
              }}
              title="Parada de Caminhoneiros: 4 estrelas"
            />
          </MapView>
          
      </View>
    );
  } 
}

mapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#263c3f"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6b9a76"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#38414e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#212a37"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9ca5b3"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#1f2835"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#f3d19c"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2f3948"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#515c6d"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 100,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
