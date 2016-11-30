import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import MapComponent from './Map';


class App extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                var initialPosition = JSON.stringify(position);
                this.setState({ initialPosition });
            },
            (error) => alert(JSON.stringify(error)),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    }

    render() {
        return (
            
                <MapComponent />
            
        );
    }

    
}

export default App;