import React, { useEffect } from 'react'
import { Image, StatusBar, StyleSheet, View } from 'react-native'

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Home')
        }, 3000)
    }, [])
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#61646B'} />
            <Image style={styles.logo} source={require('../../assets/launch_screen.png')} />
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#61646B',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 500,
        height: 400,
        objectFit: 'cover'

    }
});