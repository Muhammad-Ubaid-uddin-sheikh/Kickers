import React, { useState } from 'react';
import { Text, View, StatusBar, StyleSheet, ScrollView,} from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay';
import CheckPlayer from '../../components/CustomButton'
import ButtonEditDashboard from '../../components/ButtonEditDashboard'
import ImageEdit from './ImageEdit'
import Modal from 'react-native-modal';
import Button from '../../components/ButtonTransparentBlack';
import { Fonts } from '../style';
const Setting = ({navigation}) => {
    const [isLoggingOut, setIsLoggingOut] = useState(false);
const [isLogoutModalVisible, setLogoutModalVisible] = useState(false);

  const showLogoutModal = () => {
    setLogoutModalVisible(true);
  };

  const hideLogoutModal = () => {
    setLogoutModalVisible(false);
  };

  const handleLogout = () => {
    setIsLoggingOut(true);

    setTimeout(() => {
      // Hide spinner
      setIsLoggingOut(false);


      navigation.navigate('LoginScreen')
    }, 500);
    hideLogoutModal();
   
   
  };
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
                   
         </View>
    <View style={styles.buttonContainer}>
       
        <ButtonEditDashboard TextButton="Editar perfil" FontName="person-outline" Link={()=>navigation.navigate('EditProfile')}/>
        <ButtonEditDashboard TextButton="Pago" FontName="card-outline" Link={()=>navigation.navigate('Pago')}/>
        <CheckPlayer NameFont="bell-outline" TextButton="Notificaciones" Link={()=>navigation.navigate('Notification')} />
        <ButtonEditDashboard TextButton="Privacidad" FontName="shield-checkmark-outline" Link={()=>navigation.navigate('Privacy')}/>
         <ButtonEditDashboard TextButton="Seguridad" FontName="lock-closed-outline" Link={()=>navigation.navigate('Security')}/> 
         <View>
         <ButtonEditDashboard TextButton="Cerrar sesión" FontName="log-out-outline" Link={showLogoutModal}/> 
         
        <Modal
        isVisible={isLogoutModalVisible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        onBackdropPress={hideLogoutModal}
        onBackButtonPress={hideLogoutModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.paragraphsHeadingMain}>¿Quieres cerrar sesión?</Text>
            <Text style={styles.paragraphspoup}>Agradecem os tu visita. Nos vemos pronto.</Text>

            <View style={styles.containerButton}>
            <View style={styles.mainContent}> 
                <Button text="Cancelar"  ColorIcon="white" Link={hideLogoutModal} ColorText="#212121" />
                </View>
            <View style={styles.mainContent} >
                 <Button text="Cerrar sesión"  Link={handleLogout} />
                 <Spinner
        visible={isLoggingOut}
        textContent={'Logging out...'}
        textStyle={styles.loaderText}
        animation="fade"
        overlayColor="rgba(0, 0, 0, 0.7)"
        color="white" 
      />
                 </View>
            
                </View>
              
          </View>
        </View>
      </Modal>
         </View>
        
        </View>
         <View style={styles.nextButton}>
                     
                    </View>
        </View>
        </ScrollView>
      )
    }
    const styles = StyleSheet.create({
        loaderText:{
            color:'white',
            fontFamily:Fonts.BOLD
        },
        containerButton:{// Arrange points and text horizontally
            alignItems: 'center', // Center content vertically
            justifyContent:'space-between',
            width:'auto',
            position:'relative',
            flexDirection: 'row',
            gap:10
        },
        mainContent: {
            textAlign: 'center',
        justifyContent: 'center',
       width:'auto',
          },
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
          paragraphspoup:{
            fontSize:14,
            color:'#424242',
            letterSpacing:0.1,
            fontFamily: 'Satoshi-Medium',
            paddingTop:18,
            paddingBottom:10,
            textAlign:"left",
            width:300,
          },
          paragraphsHeadingMain:{
            fontSize:20,
            color:'black',
            letterSpacing:0.1,
            fontFamily: 'Satoshi-Medium',
            fontWeight:'bold',
            textAlign:"left",
            width:300,
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
        },  
        buttonText: {
            fontSize: 18,
            color: 'blue',
            textDecorationLine: 'underline',
          },
          modalContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width:'auto',
            

        
          },
          modalContent: {
            backgroundColor: 'white',
            padding: 25,
            borderRadius: 20,
            alignItems: 'center',
            
          },
    })


export default Setting
