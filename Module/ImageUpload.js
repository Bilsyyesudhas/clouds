import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import axios from 'axios';
import ImagePicker from 'react-native-image-picker'; // Import ImagePicker

function ImageUpload() {
    const [selectedImage, setSelectedImage] = useState(null);
  
    const selectImage = () => {
      ImagePicker.showImagePicker({ title: 'Select Image' }, response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else {
          setSelectedImage(response);
        }
      });
    };
  
    const uploadImage = () => {
      if (!selectedImage) {
        console.log('Please select an image first');
        return;
      }
  
      const formData = new FormData();
      formData.append('image', {
        uri: selectedImage.uri,
        type: selectedImage.type,
        name: selectedImage.fileName,
      });
  
      axios
        .post('YOUR_UPLOAD_URL', formData)
        .then(response => {
          console.log('Image uploaded successfully', response.data);
        })
        .catch(error => {
          console.log('Image upload error', error);
        });
    };
  
    return (
      <View style={styles.container}>
        <Button title="Select Image" onPress={selectImage} />
        {selectedImage && (
          <View>
            <Image source={{ uri: selectedImage.uri }} style={styles.image} />
            <Button title="Upload Image" onPress={uploadImage} />
          </View>
        )}
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 200,
      height: 200,
      marginVertical: 20,
    },
  });
  
  export default ImageUpload;
  