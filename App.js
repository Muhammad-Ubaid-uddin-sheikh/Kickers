import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar, StyleSheet, } from 'react-native';
import AppNavigator from './src/routes/AppNavigator';

const App = () => {
    return (
        <NavigationContainer>
          <StatusBar  barStyle="dark-content"  />
            <AppNavigator />
        </NavigationContainer>
    );
};

export default App;

const styles = StyleSheet.create({

});