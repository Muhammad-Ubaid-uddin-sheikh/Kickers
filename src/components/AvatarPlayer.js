import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Fonts } from '../screens/style'

const AvatarPlayer = ({name,rank,image}) => {
  return (
    <View style={styles.avatar}>
    <Image source={image} style={styles.avatarImage} />
    <Text style={styles.avatarName}>{name} </Text>
    <Text style={styles.avatarNameEDit}>{rank}</Text>
  </View>
  )
}

const styles = StyleSheet.create({
   
      
      avatar: {
        alignItems: 'center',
        color:'black' ,
    
      },
      avatarImage: {
        width: 39.024,
    height: 40,
        marginBottom: 2,
      },
      avatarName: {
        fontSize:8,
        color:'#959595',
        letterSpacing:0.2,
        textAlign:'center',
        fontFamily: Fonts.MEDIUM,
      },
      avatarNameEDit:{
        fontSize:8,
        color:'#414141',
        letterSpacing:0.2,
        textAlign:'center',
        fontFamily: Fonts.MEDIUM,
      }
})
export default AvatarPlayer