import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, StatusBar, FlatList, Image, TouchableOpacity, TextInput, } from 'react-native'
import ColoredLine from '../../components/LineComponet';
import Button from '../../components/Button';
import { Fonts } from '../style';
import Icons from 'react-native-vector-icons/EvilIcons'
const CustomizeProfile = ({ navigation }) => {
    const navigateToNextScreen = () => {

        if (selectedCountry) {

            navigation.navigate('CustomizeProfilePrefferd', { country: selectedCountry });
        } else {

            console.warn('Please select a country before navigating.');
        }
    };


    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all?fields=name,flags')
            .then((response) => response.json())
            .then((data) => {
                setCountries(data);
                setFilteredCountries(data);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={[styles.countryItem, selectedCountry === item && styles.selectedCountry]}
            onPress={() => handleCountrySelect(item)}
        >
            <Image style={styles.flag} source={{ uri: item.flags.png }} />
            <Text style={{ color: 'black' }}>{item.name.common}</Text>
        </TouchableOpacity>
    );

    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
    };

    const handleSearch = (text) => {
        setSearchText(text);
        const filtered = (countries || []).filter(
            (country) =>
                country.name?.common?.toLowerCase().includes(text.toLowerCase()) ||
                country.cca2?.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredCountries(filtered);
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'white'} />

            <View style={styles.MainContainer}>
                <ColoredLine flex={0.5} />
                <Text style={styles.MainHeading} >Selecciona tu país</Text>
                {/* <CountrySelection/> */}
                <View style={{ marginBottom: 150 }}>
                    {/* <CountrySelect/> */}
                    <View style={styles.inputMainContainner}>
                        <View style={styles.searchbarContainer}>
                            <Icons name='search' style={styles.Searchicon} size={30} />
                            <TextInput
                                style={styles.input}
                                placeholder="Buscar un país"
                                value={searchText}
                                onChangeText={handleSearch}
                                placeholderTextColor="rgba(33, 33, 33, 0.60)"
                            />
                        </View>

                        <FlatList
                            data={filteredCountries}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.cca3}
                        />

                    </View>
                </View>
                <View style={styles.nextButton}>

                    <Button text="Next" Link={navigateToNextScreen} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Searchicon: {
        position: 'absolute',
        top: 27,
        left: 10,
        color: 'black'
    },
    input: {
        marginTop: 12,
        paddingLeft: 42,
        padding: 16,
        marginBottom: 10,
        paddingRight: 40,
        fontSize: 14,
        lineHeight: 20,
        width: 360,
        borderRadius: 12,
        borderWidth: 0.25,
        borderColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,
        shadowOpacity: 1,
        color: '#212121',
        fontFamily: 'Satoshi-Medium',
        backgroundColor: 'rgba(64, 134, 57, 0.05)',

    },
    searchbarContainer: {
        position: 'relative',
        width: 360,
        flexDirection: 'row',
        marginLeft: 0
    },
    inputMainContainner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    countryItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 13,
        width: 350,


    },
    selectedCountry: {
        width: 340,
        borderRadius: 8,
        borderWidth: 0.25,
        borderColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,
        shadowOpacity: 1,
        color: '#212121',
        fontFamily: 'Satoshi-Medium',
        backgroundColor: 'rgba(64, 134, 57, 0.05)',
    },
    flag: {
        width: 30,
        height: 20,
        marginRight: 10,
    },
    container: {
        flex: 1,
        // Other container styles
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    MainContainer: {
        flex: 1,
        alignItems: 'center',
        width: 'auto',
        paddingLeft: 5,
        paddingRight: 5
    },
    MainHeading: {
        fontSize: 28,
        color: 'black',
        textAlign: 'center',
        fontFamily: Fonts.BOLD,
        width: 340,
        lineHeight: 36,
        marginTop: 30
    },
    ImageContainer: {
        marginTop: 30
    },
    nextButton: {
        position: 'absolute',
        bottom: 25,

    },

});

export default CustomizeProfile