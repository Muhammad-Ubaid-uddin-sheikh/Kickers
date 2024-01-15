import React from 'react'
import { View ,Text,ScrollView,StyleSheet,} from 'react-native'

const Editarperfil = () => {
  return (
    <ScrollView backgroundColor={'white'}>
    <View style={styles.MainContainer}>
        <Text style={{color:'black'}}>
Security
        </Text>
    </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  MainContainer:{
    width:'auto',
    backgroundColor:'white',
    flex:1,
   
},
})
export default Editarperfil
