import React from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MatchPlayerDetails from '../../components/MatchesPlayerDetails'
import { Fonts } from '../style'
const FindGames = ({navigation}) => {
  const handleNavigate = () => {
    navigation.navigate('CustomizeProfile');
}
  return (
    <ScrollView style={styles.form} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
       
    <View style={styles.MainContainer}>
    <StatusBar translucent={true} backgroundColor={'transparent'}/>
    <View style={styles.rowContainer}>
   
    <Text style={styles.paragraphsHeading}>
                Matches happening near you 
     </Text>
     <View style={[styles.MainGroundContainer,{paddingTop:20}]} > 
     <TouchableOpacity onPress={() => navigation.navigate('ParticularGroundScreen')}>
<MatchPlayerDetails   />
</TouchableOpacity>
<View style={styles.GroundContainer}>
<Text style={styles.Groundname}>Arsenal Vs Chelsea</Text>
<Text style={styles.DistanceTExt}>300m away</Text></View>
     </View>

     <View style={styles.MainGroundContainer} > 
<MatchPlayerDetails/>
<View style={styles.GroundContainer}>
<Text style={styles.Groundname}>Madrid Vs ?</Text>
<Text style={styles.DistanceTExt}>500m away</Text></View>
     </View>

     <View style={styles.MainGroundContainer} > 
<MatchPlayerDetails/>
<View style={styles.GroundContainer}>
<Text style={styles.Groundname}>Arsenal Vs Chelsea</Text>
<Text style={styles.DistanceTExt}>1200m away</Text></View>
     </View>

     <View style={styles.MainGroundContainer} > 
<MatchPlayerDetails/>
<View style={styles.GroundContainer}>
<Text style={styles.Groundname}>Arsenal Vs Chelsea</Text>
<Text style={styles.DistanceTExt}>1300m away</Text></View>
     </View>

     <View style={styles.MainGroundContainer} > 
<MatchPlayerDetails/>
<View style={styles.GroundContainer}>
<Text style={styles.Groundname}>Arsenal Vs Chelsea</Text>
<Text style={styles.DistanceTExt}>300m away</Text></View>
     </View>
  </View>
 </View>
 </ScrollView>
  )
}
const styles = StyleSheet.create({
  MainGroundContainer:{
  
    paddingBottom:15
  },
  GroundContainer:{
    flexDirection: 'row',
    justifyContent: "space-between",
    width: '100%',
    alignItems:'flex-start',
    paddingLeft:5,
    paddingRight:5,
    paddingTop:10 
  },
  Groundname:{
fontSize:16,
color:'#61646B',
fontFamily:'WorkSans-Medium',
  },
  DistanceTExt:{
    fontFamily:'WorkSans-Medium',
    fontSize:14,
    color:'#AFB1B6'
    
  },
  paragraphsHeading:{
    fontSize:18,
    color:'black',
    letterSpacing:0.3,
  width:'auto',
  lineHeight: 36,
  fontFamily:Fonts.SAMIBOLD,
  marginLeft:2,
  marginTop:20
},
  MainContainer:{
    width:'auto',
    backgroundColor:'white',
    flex:1,
    paddingLeft:15,
    paddingRight:20,
    paddingBottom:20
},
form: {
  backgroundColor: '#fff',
  display: 'flex',
  width: 'auto',
  // borderRadius: 8,
  // shadowColor: 'rgba(0, 0, 0, 0.1)',
  // shadowOffset: { width: 0, height: 10 },
  // shadowRadius: 15,
  // shadowOpacity: 1,
  position: 'relative',
  paddingTop: 20,
  height:'auto',
  paddingBottom:20


},
})

export default FindGames