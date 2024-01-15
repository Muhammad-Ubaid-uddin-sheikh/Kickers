import React from 'react';
import { Text, View, StatusBar, StyleSheet, Image, ScrollView} from 'react-native'
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
                            <ImageEdit/>
                            </View>
                            <View style={styles.ShoeConText} >
                                <Text style={styles.textPoints} >Jake Garcia</Text>
                                <Text style={styles.paragraph} >Disponible</Text>
                            </View>
                        </View>
                        
                    </View>
                    {/* <Text style={styles.paragraphsHeading}>
                    Matches happening near you 
         </Text> */}
         </View>
    <View style={styles.buttonContainer}>
        {/* <ButtonEditDashboard Link={handlePrefrences} /> */}
        <ButtonEditDashboard TextButton="Editar perfil" FontName="person-outline" Link={()=>navigation.navigate('EditProfile')}/>
        <ButtonEditDashboard TextButton="Pago" FontName="card-outline" Link={()=>navigation.navigate('Pago')}/>
        {/* <CheckPlayer NameFont="log-out-outline" TextButton="Check Player Leaderboardsss" /> */}
        {/* <ButtonEditDashboard TextButton="Check Player Leaderboard" FontName="log-out-outline"/> */}
        {/* {/* <CheckPlayer NameFont="bell" TextButton="Check Player Leaderboard" /> */}
        {/* <CheckPlayer NameFont="log-out-outline" TextButton="Check Player Leaderboard" /> */}
        <CheckPlayer NameFont="bell-outline" TextButton="Notificaciones" Link={()=>navigation.navigate('Notification')} />
        <ButtonEditDashboard TextButton="Privacidad" FontName="shield-checkmark-outline" Link={()=>navigation.navigate('Privacy')}/>
         <ButtonEditDashboard TextButton="Seguridad" FontName="lock-closed-outline" Link={()=>navigation.navigate('Security')}/> 
         <ButtonEditDashboard TextButton="Cerrar sesión" FontName="log-out-outline" Link={()=>navigation.navigate('Logout')}/> 
        </View>
         <View style={styles.nextButton}>
                        {/* <Button text="Start an instant match" Link={handleNavigate} /> */}
                    </View>
        </View>
        </ScrollView>
      )
    }
    const styles = StyleSheet.create({
        ShoeConText:{
            paddingTop:20
        },
        rowContainer:{  paddingLeft:20,
        paddingRight:20,},
    
        row: {
            flexDirection: 'row', // Arrange points and text horizontally
            alignItems: 'top', // Center content vertically
            gap: 30,
        },
        textPoints: {
            fontSize: 22,
            lineHeight: 24,
            color: '#000',
            marginTop: 10,
            

        },
        ShoeCon: {
            textAlign: 'center',
            justifyContent: 'center',
            width:85
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
        paragraph: {
            fontSize:15,
            color:'#61646B',
            letterSpacing:0.1,
          width:'auto',

          fontFamily: 'Satoshi-Medium'
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
          fontFamily: 'Satoshi-Medium',
          marginLeft:2,
          marginTop:20
        }
    })


export default Setting
