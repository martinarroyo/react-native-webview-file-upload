/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';

import App from './App'

class WebviewFileUploadAndroid extends Component {
    render() {
        return (
            <View style={{height: Dimensions.get('window').height}}>
                <App />
            </View>
        );
    }
}

AppRegistry.registerComponent('WebviewFileUploadAndroid', () => WebviewFileUploadAndroid);
