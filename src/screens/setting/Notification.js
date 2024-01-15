import React from 'react'
import { View ,Text,ScrollView,StyleSheet,} from 'react-native'

const Notificaciones= () => {
  return (
    <ScrollView backgroundColor={'white'}>
    <View style={styles.MainContainer}>
        <Text style={{color:'black'}}>
Notificaciones
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
export default Notificaciones
