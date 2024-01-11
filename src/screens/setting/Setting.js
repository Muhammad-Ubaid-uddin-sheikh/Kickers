import React from 'react';
import { Text, View, StatusBar, StyleSheet, Image, ScrollView} from 'react-native'
import { Fonts } from '../style';
import Button from '../../components/Button';
// import VerticalSlider from './VerticalSlides';
import CheckPlayer from '../../components/CustomButton'
import ButtonEditDashboard from '../../components/ButtonEditDashboard'
import ImageEdit from './ImageEdit'
const Setting = ({navigation}) => {
  return (

        <ScrollView backgroundColor={'white'}>
        <View style={styles.MainContainer}>
            <View style={styles.rowContainer}>
            <StatusBar backgroundColor={'white'} />
            {/* <Text style={styles.paragraphs}>
            What would you like to do today?
         </Text> */}
    
         <View style={styles.ShoeContainer}>
                        <View style={styles.row}>
                            
                            <View style={styles.ShoeCon}>
                                <Image source={require('../../assets/profile.jpg')} style={{ width: 100, height: 100,objectFit:'cover',borderRadius:100 }} />
                            </View>
                            <View style={styles.ShoeCon}>
                                <Text style={styles.textPoints} >Find A Match</Text>
                            </View>
                        </View>
                        {/* <ImageEdit/> */}
                    </View>
                    {/* <Text style={styles.paragraphsHeading}>
                    Matches happening near you 
         </Text> */}
         </View>
    <View style={styles.buttonContainer}>
        {/* <ButtonEditDashboard Link={handlePrefrences} /> */}
        <CheckPlayer NameFont="account" TextButton="Editar perfil" />
        <CheckPlayer NameFont="bell" TextButton="Check Player Leaderboard" />
        {/* <CheckPlayer NameFont="log-out-outline" TextButton="Check Player Leaderboardsss" /> */}
        {/* <ButtonEditDashboard TextButton="Check Player Leaderboard" FontName="log-out-outline"/> */}
        {/* <CheckPlayer NameFont="bell" TextButton="Check Player Leaderboard" />
        <CheckPlayer NameFont="log-out-outline" TextButton="Check Player Leaderboard" />
        <ButtonEditDashboard TextButton="Check Player Leaderboard" FontName="log-out-outline"/>
         <ButtonEditDashboard TextButton="Check Player Leaderboard" FontName="wallet-outline"/> */}
        </View>
         <View style={styles.nextButton}>
                        {/* <Button text="Start an instant match" Link={handleNavigate} /> */}
                    </View>
        </View>
        </ScrollView>
      )
    }
    const styles = StyleSheet.create({
        rowContainer:{  paddingLeft:20,
        paddingRight:20,},
    
        row: {
            flexDirection: 'row', // Arrange points and text horizontally
            alignItems: 'center', // Center content vertically
            gap: 30,
        },
        textPoints: {
            fontSize: 22,
            lineHeight: 24,
            color: '#000',
            marginTop: 10,
            fontFamily: Fonts.EXTRABOLD,

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


export default Setting
