import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Cart = ({ navigation }) => {
  const array = [
    {
      key: '1',
      titleImageSource: require('./Image/ac.jpg'),
      subtitle: 'AC & Home Appliances',
    },
    {
      key: '2',
      titleImageSource: require('./Image/image2.jpg'),
      subtitle: ' Painting & Water proofing',
    },
    {
      key: '3',
      titleImageSource: require('./Image/image3.jpg'),
      subtitle: ' Home Cleaning ',
    },
       {
      key: '4',
      titleImageSource: require('./service/xFoSIh.png'),
      subtitle: ' Electrician,plumber & carpenter',
    },
       {
      key: '5',
      titleImageSource: require('./Image/image5.jpg'),
      subtitle: 'Tv & Computer',
    },
       {
      key: '6',
      titleImageSource: require('./Image/image6.jpg'),
      subtitle: ' CCTV',
    },
       {
      key: '7',
      titleImageSource: require('./Image/image7.jpg'),
      subtitle: 'Inverter Service ',
    },
       {
      key: '8',
      titleImageSource: require('./service/VKZ8aK.png'),
      subtitle: 'Laundry Service ',
    },
       {
      key: '9',
      titleImageSource: require('./Image/image9.jpg'),
      subtitle: ' Event mangement ',
    },
    {
      key: '10',
      titleImageSource: require('./service/7Vo9NR.png'),
      subtitle: 'Beauty Parlour ',
    },
    {
      key: '11',
      titleImageSource: require('./service/IPIgvZ.png'),
      subtitle: ' Tailoring ',
    },
    {
      key: '12',
      titleImageSource: require('./service/HekrAJ.png'),
      subtitle: 'Auto Mobile Service ',
    },
    {
      key: '13',
      titleImageSource: require('./service/4JsMvd.png'),
      subtitle: ' Interior ',
    },
    {
      key: '14',
      titleImageSource: require('./service/ErqKyv.png'),
      subtitle: ' Installation ',
    },
    {
      key: '15',
      titleImageSource: require('./service/lFggHb.png'),
      subtitle: '    Services',
    },
    {
      key: '16',
      titleImageSource: require('./service/Bh43Dk.png'),
      subtitle: ' Packers & Movers ',
    },
    {
      key: '17',
      titleImageSource: require('./service/nCm7ps.png'),
      subtitle: ' IT Service ',
    },
     {
      key: '18',
      titleImageSource:'',
      subtitle:'',
      
    },
  ];

  const handleImagePress = (key) => {
   
    switch (key) {
        case '1':
            navigation.navigate('Service');
          break;
        case '2':
          navigation.navigate('painting');
          break;
        case '3':
          navigation.navigate('Homecleaning');
          break;
          case '4':
            navigation.navigate('Electrician');
          break;
        case '5':
          navigation.navigate('Tv');
          break;
        case '6':
          navigation.navigate('Cctv');
          break;
          case '7':
            navigation.navigate('Inverter');
          break;
        case '8':
          navigation.navigate('Laundry');
          break;
        case '9':
          navigation.navigate('Eventmanagement');
          break;
          case '10':
            navigation.navigate('Beautyparlour');
          break;
        case '11':
          navigation.navigate('Tailoring');
          break;
        case '12':
          navigation.navigate('Automobile');
          break;
          case '13':
            navigation.navigate('Interior');
          break;
        case '14':
          navigation.navigate('Installation');
          break;
        case '15':
          navigation.navigate('Toolservice');
          break;
          case '16':
            navigation.navigate('PackersandMovers');
          break;
        case '17':
          navigation.navigate('ITservices');
        
      }
  };
const columnsPerRow = 3;
  const itemsToShow = array.length % columnsPerRow === 1 ? array.length - 1 : array.length;

  return (
    <View style={styles.container}>
      {array.map(element => (
        <TouchableOpacity
          key={element.key}
          style={styles.column}
          onPress={() => handleImagePress(element.key)}
        >
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
        paddingVertical:30,
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
        backgroundColor: 'white',
        borderRadius: 20, // Add border radius
      },});

export default Cart;
