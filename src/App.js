import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import codePush from 'react-native-code-push';
import MapComponent from './Map';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            initialPosition: {}
        }
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                var initialPosition = JSON.stringify(position);
                this.setState({ initialPosition });
                alert(initialPosition);
            },
            (error) => alert(JSON.stringify(error)),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    }

    render() {
        return (

            <MapComponent initialPosition={this.state.initialPosition}/>

        );
    }

}

export default codePush(App);