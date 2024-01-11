import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet,ScrollView, FlatList } from 'react-native';
import PlayerData from './PlayerData';

const YourComponent = () => {
 

  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // Update the current date and time every second
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const monthsInThreeWords = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const currentDay = daysOfWeek[currentDateTime.getDay()];
  const currentMonth = monthsInThreeWords[currentDateTime.getMonth()];
  const currentDate = currentDateTime.getDate();
  // const currentYear = currentDateTime.getFullYear();
  // const currentTime = `${currentDateTime.getHours()}:${currentDateTime.getMinutes()}:${currentDateTime.getSeconds()}`;

  return (
    <View style={styles.container}>
      <Text style={[styles.header,{paddingTop:8}]}>{currentDay} <Text >{`${currentDate} ${currentMonth} `}| 1:00h </Text></Text>
      
      <Text style={styles.paragraph}>300 miles away. Hollywood.</Text>
      <View style={styles.avatarContainer}>
        <PlayerData/>
      {/* {Object.values(DataObj).map((data, index) => (
        <AvatarPlayer key={index} Namw={data.name} Rank={data.rank} Profile={data.image} />
      ))} */}
      
        {/* <AvatarPlayer Name="Gabriela" Rank="C" Profile='../assets/Avatar.png' /> */}
        {/* <View style={styles.avatar}>
          <Image source={require('../assets/Avatar.png')} style={styles.avatarImage} />
          <Text style={styles.avatarName}>Gabriela </Text>
          <Text style={styles.avatarNameEDit}>C</Text>
        </View>
        <View style={styles.avatar}>
          <Image source={require('../assets/Avatar.png')} style={styles.avatarImage} />
          <Text style={styles.avatarName}>Gabriela </Text>
          <Text style={styles.avatarNameEDit}>OG</Text>
        </View>
        <View style={styles.avatar}>
          <Image source={require('../assets/Avatar.png')} style={styles.avatarImage} />
          <Text style={styles.avatarName}>Gabriela</Text>
          <Text style={styles.avatarNameEDit}>OT</Text>
        </View>
        <View style={styles.avatar}>
          <Image source={require('../assets/Avatar.png')} style={styles.avatarImage} />
          <Text style={styles.avatarName}>Gabriela</Text>
          <Text style={styles.avatarNameEDit}>R</Text>
        </View>
        <View style={styles.avatar}>
          <Image source={require('../assets/Avatar.png')} style={styles.avatarImage} />
          <Text style={styles.avatarName}>Gabriela </Text>
          <Text style={styles.avatarNameEDit}>QB</Text>
        </View>
        <View style={styles.avatar}>
          <Image source={require('../assets/Frame.png')} style={styles.avatarImage} />
          {/* <Text style={styles.avatarName}>{`Gabriela \n C`}</Text> */}
        {/* </View>  */}
        {/* Add more avatars as needed */}
      </View>
      <View style={styles.containerThird}>
        <Text style={[styles.header,{fontSize:12}]}>Friendly | <Text style={styles.innerTExtLevel}>Level 1.5 - 2.5 </Text></Text>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  innerTExtLevel:{
    color: '#909090',
    fontSize: 12,
    letterSpacing:0.2,
    fontFamily:'WorkSans-Medium',
  },
  containerThird:{
borderTopWidth: 1,
borderColor:'rgba(157, 157, 157, 0.50);',
marginTop:18,
paddingTop:10,
paddingBottom:10,
flex:1,
justifyContent:'center'
  },
  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 'auto',
gap:11,
    alignItems:'flex-start',
    // paddingLeft:10, 
      paddingRight:15,
       flexWrap: 'wrap',
       height:'auto'
  },
  container: {
    borderRadius:10,
    borderColor:'#A6A6A6',
    borderWidth: 1,
    backgroundColor:'#F2F2F2',
    width:'a',
height:'auto',
letterSpacing:0.2,

  },
  header: {
  
    fontSize: 14,
    color:'#474747',
    fontFamily:'WorkSans-Medium',
    // paddingTop:8,
    paddingLeft:10,
      paddingRight:15,
  },
  // subHeader: {
  //   fontSize: 16,
  //   marginBottom: 10,
  //   color:'black'
  // },
  paragraph: {
    fontSize: 12,
    marginBottom: 15,
    color:'#959595',
    letterSpacing:0.5,
    fontFamily:'WorkSans-Medium',
    paddingLeft:10,
      paddingRight:15,
      // paddingLeft:5,
  },
 
});

export default YourComponent;
