import React from 'react';
import { Text, View, StatusBar, StyleSheet, Image, ScrollView} from 'react-native'
import { Fonts } from '../style';
import Button from '../../components/Button';
import VerticalSlider from './VerticalSlides';
import CheckPlayer from '../../components/CustomButton'
import ButtonEditDashboard from '../../components/ButtonEditDashboard'
const Dashboard = ({navigation}) => {
    const handleNavigate = () => {
        navigation.navigate('FindGames');
    }
    const handlePrefrences = () => {
        navigation.navigate('CustomizeProfile');
    }
    
  return (
    <ScrollView backgroundColor={'white'}>
    <View style={styles.MainContainer}>
        <View style={styles.rowContainer}>
        <StatusBar backgroundColor={'white'} />
        <Text style={styles.paragraphs}>
        What would you like to do today?
     </Text>

     <View style={styles.ShoeContainer}>
                    <View style={styles.row}>
                        <View style={styles.ShoeCon}>
                            <View style={styles.imageContainerBorder}>
                            <Image source={require('../../assets/reserveFeild.jpg')} style={{ width: 150, height: 130,objectFit:'contain',marginTop:5  }} /></View>
                            <Text style={styles.textPoints} >Reserve A Field</Text>
                        </View>
                        <View style={styles.ShoeCon}>
                        <View style={styles.imageContainerBorder}>
                            <Image source={require('../../assets/findMatch.jpg')} style={{ width: 150, height: 130,objectFit:'contain',marginBottom:5 }} /></View>
                            <Text style={styles.textPoints} >Find A Match</Text>
                        </View>
                    </View>

                </View>
                <Text style={styles.paragraphsHeading}>
                Matches happening near you 
     </Text>
     </View>
     <View ><VerticalSlider/></View>
<View style={styles.buttonContainer}>
    <ButtonEditDashboard Link={handlePrefrences} TextButton="Customize your preferences" FontName="football-outline"/>
    <CheckPlayer NameFont="signal-cellular-outline" TextButton="Check Player Leaderboard" />
   
    </View>
     <View style={styles.nextButton}>
                    <Button text="Start an instant match" Link={handleNavigate} />
                </View>
    </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    rowContainer:{  paddingLeft:15,
    paddingRight:15,},

    row: {
        flexDirection: 'row', // Arrange points and text horizontally
        alignItems: 'center', // Center content vertically
        gap: 10,
        justifyContent:'space-between'
    },
    imageContainerBorder:{
        borderWidth:1,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:18,
        borderColor:'rgba(0, 0, 0, 0.25)',
        padding:12
    },
    textPoints: {
        fontSize: 17,
        lineHeight: 24,
        color: '#000',
        marginTop: 10,
        fontFamily: Fonts.BOLD,
        marginLeft:2
    },
    ShoeCon: {
        textAlign: 'center',
        justifyContent: 'center',
        
    },
    ShoeContainer: {
        marginTop: 20,
            },
    MainContainer:{
        width:'auto',
        backgroundColor:'white',
        flex:1,
       
    },
    buttonContainer:{
        marginTop:30
    },
    paragraphs: {
        fontSize:18,
        color:'black',
        letterSpacing:0.1,
      width:'auto',
      lineHeight: 36,
      fontFamily:'WorkSans-Medium'
      },
      nextButton: {
        // position: 'absolute',
        // bottom: -20,
        marginBottom:20
    },
    paragraphsHeading:{
        fontSize:20,
        color:'black',
        letterSpacing:0.3,
      width:'auto',
      lineHeight: 36,
      fontFamily:'WorkSans-Medium',
      marginLeft:2,
      marginTop:20
    }
})

export default Dashboard