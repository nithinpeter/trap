import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import MapView from 'react-native-maps';
import DATA from './data-source/index.json';

class MapComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            region: {
                latitude: -33.868833,
                longitude: 151.210778,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            markers: this._getMarkers()
        }
        this.onRegionChange = this.onRegionChange.bind(this);
    }


    onRegionChange(region) {
        this.setState({ region });
    }

    _getMarkers() {
        console.log(DATA.features)
        const markers = DATA.features.map((item) => {
            return {
                latlng: {
                    latitude: item.geometry.coordinates[1],
                    longitude: item.geometry.coordinates[0],
                },
                properties: item.properties,
            };
        })
        console.log(markers);
        return markers;
    }

    render() {
        return (<View style={styles.container}>
            <MapView
                style={styles.map}
                region={this.state.region}
                onRegionChange={this.onRegionChange}>
                {
                    this.state.markers.map((marker, index) => (
                        <MapView.Marker
                            key={index}
                            coordinate={marker.latlng} />
                    ))
                }
            </MapView>
        </View>)
    }

}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
})

export default MapComponent;