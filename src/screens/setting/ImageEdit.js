import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet,Text } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import ImageCropPicker from 'react-native-image-crop-picker';

const ProfileScreen = () => {
  const [profileImage, setProfileImage] = useState(null);

  const selectImage = () => {
    ImagePicker.showImagePicker(
      { title: 'Select Image', cancelButtonTitle: 'Cancel', takePhotoButtonTitle: 'Take Photo', chooseFromLibraryButtonTitle: 'Choose from Library' },
      (response) => {
        if (!response.didCancel && !response.error) {
          cropImage(response.uri);
        }
      }
    );
  };

  const cropImage = (uri) => {
    ImageCropPicker.openCropper({
      path: uri,
      width: 300,
      height: 300,
      cropping: true,
    }).then((image) => {
      setProfileImage(image.path);
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={selectImage}>
        <View style={styles.imageContainer}>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          ) : (
            <Text>No Image Selected</Text>
          )}
        </View>
        <Text>Edit Photo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: 'hidden',
    backgroundColor: '#eee',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
});

export default ProfileScreen;
