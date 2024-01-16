import React, { useState } from 'react';
import { View, Text, TextInput, Modal, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Button from '../../components/ButtonTransparentBlack'
import NewIcons from 'react-native-vector-icons/Fontisto'
import { Fonts } from '../style';
const DropdownInputExample = () => {
  const options = ['Zurdo', 'Diestro',];

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setModalVisible(false);
  };

  return (
    <View style={styles.inputContainer}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <TextInput
          style={styles.input}
          placeholder="Pie dominante"
          value={selectedOption}
          editable={false}
          placeholderTextColor="rgba(33, 33, 33, 0.60)"
          letterSpacing={0.6}
        />
      </TouchableOpacity>
      <NewIcons name='angle-down' style={styles.eyeIcon} size={17} />
      <Modal
       animationIn="slideInUp"
       animationOut="slideOutDown"
        visible={modalVisible}
       
        // visible={modalVisible}
        backgroundColor='black'
        transparent={true}
        
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={options}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.optionItem} onPress={() => handleOptionSelect(item)}>
                  <Text style={styles.optionText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Button text="Cancelar"  Link={() => setModalVisible(false)}  />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
    marginBottom: 8,
    width: 345,
    marginRight: 30
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
    fontFamily: 'Satoshi-Medium',
    backgroundColor: 'rgba(64, 134, 57, 0.05)'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: 300,
  },
  optionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#408639',
  },
  optionText: {
    fontSize: 16,
    color:'black',
    fontFamily:Fonts.MEDIUM
  },
  eyeIcon: {
    position: 'absolute',
    right: 30,
    top: 35,
    color: '#408639'
  },
 
});

export default DropdownInputExample;
