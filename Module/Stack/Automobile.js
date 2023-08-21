

import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const Automobile = ({navigation}) => {
  const array = [
    {
      key: '1',
      titleImageSource: require('../service/M4ZMSz.png'),
      subtitle: 'Car Repair',
    },
    {
      key: '2',
      titleImageSource: require('../service/z8cwtK.png'),
      subtitle: 'Car Wash',
    },
    {
      key: '3',
      titleImageSource: require('../service/GAsKcE.png'),
      subtitle: 'Car Puncher',
    },
    {
      key: '4',
      titleImageSource: require('../service/tzQ4qL.png'),
      subtitle: 'Other Services',
    },

    {
      key: '5',
      titleImageSource: '',
      subtitle: '',
    },
    {
      key: '6',
      titleImageSource: '',
      subtitle: '',
    },
  ];

  const handleImagePress = key => {
    switch (key) {
      case '1':
        navigation.navigate('Servicerequest', {
          datas: {
            CategoryName: 'Auto Mobile Service',
            ServiceName: 'Car Repair',
          },
        });
        break;

      case '2':
        navigation.navigate('Servicerequest', {
          datas: {
            CategoryName: 'Auto Mobile Service',
            ServiceName: 'Car Wash',
          },
        });
        break;

      case '3':
        navigation.navigate('Servicerequest', {
          datas: {
            CategoryName: 'Auto Mobile Service',
            ServiceName: 'Car Puncher',
          },
        });
        break;
      case '4':
        navigation.navigate('Servicerequest', {
          datas: {
            CategoryName: 'Auto Mobile Service',
            ServiceName: 'Other Service',
          },
        });
        break;
    }
  };
  const columnsPerRow = 3;
  const itemsToShow =
    array.length % columnsPerRow === 1 ? array.length - 1 : array.length;

  return (
    <View style={styles.container}>
      {array.map(element => (
        <TouchableOpacity
          key={element.key}
          style={styles.column}
          onPress={() => handleImagePress(element.key)}>
          {element.titleImageSource ? (
            <Image source={element.titleImageSource} style={styles.image} />
          ) : (
            <View style={styles.emptyImage} />
          )}
          <Text style={styles.text}>{element.subtitle}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 13,
    width: 100,
    color: '#000',
    paddingTop: 10,
    textAlign: 'center',
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  column: {
    width: '29%',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 100,
    backgroundColor: '#C4C3D0',
    borderRadius: 20, // Add border radius
    resizeMode: 'cover',
  },
  emptyImage: {
    width: 100,
    height: 100,
    backgroundColor: 'none',
    borderRadius: 20, // Add border radius
  },
});

export default Automobile;
