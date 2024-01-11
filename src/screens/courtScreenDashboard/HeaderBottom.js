import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CalendarScreen from './courtInnerScreen/Clender';
import AnalyticsScreen from './courtInnerScreen/Menu';
import SettingsScreen from './courtInnerScreen/Estadisticas';
import MaterialCommunityIcons from 'react-native-vector-icons/Fontisto';
import { TouchableOpacity, View, } from 'react-native';
import SettingIcon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { Fonts } from '../style';
import IconName from 'react-native-vector-icons/Entypo'
import Menu from 'react-native-vector-icons/Ionicons'
const Tab = createBottomTabNavigator();

function MyTabs() {
    const navigation= useNavigation()
  const handleNavigate = () => {
    navigation.navigate('Setting');
}
  return (
    <Tab.Navigator screenOptions={{ headerStyle: {
        backgroundColor: 'white',shadowColor: 'white',} }} tabBarOptions={{
        activeTintColor: 'rgba(64, 134, 57, 1)', // Change the active tab icon color
        inactiveTintColor: 'black', // Change the inactive tab icon color
        labelStyle: {
          fontSize: 12,
        },
      }}
      >
      <Tab.Screen options={{title:'Hola, John',
       headerRight: () => (
        <View style={{flexDirection:'row',gap:-10}}>

        <TouchableOpacity onPress={handleNavigate}>
          <View >
          <SettingIcon name="setting" size={23} color='black' style={{ marginRight: 18 }} />
          </View>
        </TouchableOpacity>
        </View>
      ),
          tabBarLabel: 'Calendario',
          tabBarIcon: ({ color, }) => (
            <IconName name="calendar" color={color} size={20} />
          ), headerTitleAlign: 'start', headerTintColor: '#408639', headerTitleStyle: {
            color: 'rgba(0, 0, 0, 1)', fontSize: 27, fontFamily: Fonts.MEDIUM , marginLeft: 0, fontWeight:700// You can customize the style further
           },
        }} name="CalendarScreen" component={CalendarScreen} />
      <Tab.Screen
      options={{title:'Hola, John',
      headerRight: () => (
       <View style={{flexDirection:'row',gap:-10}}>

       <TouchableOpacity onPress={handleNavigate}>
         <View >
         <SettingIcon name="setting" size={23} color='black' style={{ marginRight: 18 }} />
         </View>
       </TouchableOpacity>
       </View>
     ),
         tabBarLabel: 'Menú',
         tabBarIcon: ({ color, }) => (
           <IconName name="menu" color={color} size={20} />
         ), headerTitleAlign: 'start', headerTintColor: '#408639', headerTitleStyle: {
           color: 'rgba(0, 0, 0, 1)', fontSize: 27, fontFamily: Fonts.MEDIUM , marginLeft: 0, fontWeight:700// You can customize the style further
          },
       }} name="AnalyticsScreen" component={AnalyticsScreen} />
      <Tab.Screen 
      options={{title:'Estadísticas',
      headerRight: () => (
       <View style={{flexDirection:'row',gap:-10}}>

       <TouchableOpacity onPress={handleNavigate}>
         <View >
         <SettingIcon name="setting" size={23} color='black' style={{ marginRight: 18 }} />
         </View>
       </TouchableOpacity>
       </View>
     ),
         tabBarLabel: 'Estadísticas',
         tabBarIcon: ({ color, }) => (
           <IconName name="bar-graph" color={color} size={20} />
         ), headerTitleAlign: 'start', headerTintColor: '#408639', headerTitleStyle: {
           color: 'rgba(0, 0, 0, 1)', fontSize: 27, fontFamily: Fonts.MEDIUM , marginLeft: 0, fontWeight:700// You can customize the style further
          },
       }} name="SettingsScreen" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
export default MyTabs
