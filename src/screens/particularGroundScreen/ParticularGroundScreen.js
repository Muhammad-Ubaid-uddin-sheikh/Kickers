import React from 'react'
import { ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native'
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import  Icons  from 'react-native-vector-icons/AntDesign';
const ParticularGroundScreen = () => {
  return (
    
    <View style={styles.container}>
        
    <ImageBackground 
      source={require('../../assets/Ground.jpg')}
      style={styles.backgroundImage}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16 ,}}>
      <StatusBar translucent={true} backgroundColor={'transparent'}/>
        {/* <TouchableOpacity onPress={handleBackPress}> */}
          <Icon name="keyboard-arrow-left"  color="rgba(118, 118, 118, 1)" size={35} />
        {/* </TouchableOpacity> */}
        {/* <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>asdasd</Text> */}
        <Icons name="staro"  color="white" size={35} />
      </View>
    </ImageBackground>

    {/* <View style={styles.MainContainer}>
       
        <Text>ParticularGroundScreen</Text>
    </View> */}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    marginTop: 0,
    padding:0
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // This ensures the image covers the entire screen
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    padding:0
  },
})

export default ParticularGroundScreen