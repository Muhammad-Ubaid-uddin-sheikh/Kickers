import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar,} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import Button from '../../components/Button';
import { Fonts } from '../style';
const App = ({navigation}) => {

  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!isPasswordVisible);
  };
  return (

    <View style={styles.form}>
      <StatusBar  barStyle="dark-content"/>
      <Text style={styles.heading}>Log in Court Owner</Text>
      {/* <Text style={styles.headingSub}>Court Owner </Text> */}
      <Text style={styles.paragraphs}>
        Manage your account, check notifications,
        comment on videos, and more
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username / email"
          keyboardType="email-address"
          placeholderTextColor="rgba(33, 33, 33, 0.60)"
          letterSpacing={0.2}
        />

      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="rgba(33, 33, 33, 0.60)"
          secureTextEntry={!isPasswordVisible}
          value={password}
          letterSpacing={0.2}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.eyeIcon} onPress={togglePasswordVisibility}>
          <Text style={styles.eyeText}>{isPasswordVisible ? <Icon name="eye" style={styles.eyeIcon} size={17} /> : <Icon name="eye-slash" style={styles.eyeIcon} size={17} />}</Text>
        </TouchableOpacity>
      </View>

      <Button text='Log In' Link={()=>navigation.navigate('CourtDashboard')} />
      <Text style={styles.informationText}>Forgot Password?</Text>
      <View style={styles.SinupText}>
        <TouchableOpacity style={styles.linkText}>
          <Text style={styles.informationText}> Don’t have an account? <Text style={styles.TextLink} onPress={() => navigation.navigate('CourtSingup')} >Sign Up Today!</Text> </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // This ensures the image covers the entire screen
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    padding: 0
  },
  TextLink: {
    fontSize: 13,
    lineHeight: 24,
    color: '#408639',
    fontWeight: '600',
    fontFamily: 'WorkSans-Regular',
    letterSpacing: 0.4
  },
  SinupText: {
    position: 'absolute',
    bottom: 25,
    fontFamily: 'WorkSans-Regular',
    textAlign: 'center',

  },
  image: {
    width: 20,
    height: 25,
    objectFit: 'contain'
  },
  form: {
    backgroundColor: '#fff',
    // display: 'flex',
    width: 'auto',
    borderRadius: 8,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 15,
    shadowOpacity: 1,
    position: 'relative',
    paddingLeft: 12,
    paddingRight: 12,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 28,
    marginBottom: 10,
    color: 'black',
    textAlign: 'center',
    fontFamily: Fonts.SAMIBOLD,
  },
  paragraphs: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 15,
    color: '#61646B',
    letterSpacing: 0.3,
    width: 350,
    lineHeight: 25,
    marginTop: 6,
    fontFamily: 'WorkSans-Regular'
  },
  inputContainer: {
    position: 'relative',

    width: 345,
    marginLeft: 22,
    marginRight: 30,

  },
  input: {
    marginTop: 12,
    paddingLeft: 12,
    padding: 16,
    paddingRight: 40,
    fontSize: 14,
    lineHeight: 20,
    width: 345,
    borderRadius: 12,
    borderWidth: 0.25,
    borderColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 1,
    color: '#212121',
    fontFamily: 'WorkSans-Regular',
    backgroundColor: 'rgba(64, 134, 57, 0.05)'
  },
  iconContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    padding: 16,
    justifyContent: 'center',
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    top: 35,
    color: 'rgba(64, 134, 57, 1)'
  },
  eyeText: {
    fontSize: 20,
  },
  informationText: {
    fontSize: 14,
    lineHeight: 24,
    color: '#61646B',
    textAlign: 'center',
    letterSpacing: 0.9,
    marginTop: 15,
    fontFamily: 'WorkSans-Regular'
  },
  button: {
    backgroundColor: '#212121',
    padding: 15,
    marginTop: 20,
    borderRadius: 12,
    borderColor: '#61646B',
    borderWidth: 0.5, // Set the border width
    fontFamily: 'Work Sans',
    color: '#EFEFF0',
    marginLeft: 20,
    marginRight: 28,
    width: 345

  },

});

export default App;
