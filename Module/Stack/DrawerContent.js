import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const DrawerContent = ({ navigation }) => {
  const navigateToScreen = screenName => () => {
    navigation.navigate(screenName);
  };

  return (
    <View>
      <TouchableOpacity onPress={navigateToScreen('Home')}>
        <Text>Home</Text>
      </TouchableOpacity>
      {/* Add more menu items here */}
    </View>
  );
};

export { DrawerContent };
