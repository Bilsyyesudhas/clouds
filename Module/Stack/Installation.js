// import React from 'react';
// import { View, Image, SafeAreaView,Text,TouchableOpacity } from 'react-native';

// const Installation = ({navigation}) => {
//   const handleimage1=()=>{
//     const newvalues={
//       CategoryName:'Installation',
//       ServiceName:'Furniture Installation'
//     }
//     navigation.navigate('Servicerequest', {datas: newvalues});
//   }
//   const handleimage2=()=>{
//     const newvalues={
//       CategoryName:'Installation',
//       ServiceName:'TV & DTH'
//     }
//     navigation.navigate('Servicerequest', {datas: newvalues});
//   }
//   return (
//     <SafeAreaView>

//     <View style={{ flexDirection: 'row', justifyContent: 'flex-start',marginHorizontal:20,paddingTop:30 }}>
//     <TouchableOpacity onPress={handleimage1}>
//       <Image
//         source={require('../service/lTHIMm.png')}
//         style={{ width: 100, height: 100, borderRadius: 10,
//           backgroundColor:'#C4C3D0' }}
//       />
//       </TouchableOpacity>
//       <TouchableOpacity onPress={handleimage2}>
//       <Image
//         source={require('../service/mwqXQI.png')}
//         style={{ width: 100, height: 100,marginHorizontal:40, borderRadius: 10,
//           backgroundColor:'#C4C3D0' }}
//       />
    
// </TouchableOpacity>
   
//     </View>
//     <View style={{ flexDirection: 'row', justifyContent:'flex-start',paddingTop:20 }}>
//       <Text style={{ fontSize: 13, color: '#000',width:100,marginHorizontal:10,textAlign:"center",padding:10}}>Furniture Installation</Text>
      
//       <Text style={{ fontSize: 13, color: '#000',width:100,marginHorizontal:30,textAlign:"center",padding:10}}>TV & DTH</Text>
      
//     </View>
 



//     </SafeAreaView>
//   );
// };

// export default Installation;


import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Installation = ({ navigation }) => {
  const array = [
    {
      key: '1',
      titleImageSource: require('../service/lTHIMm.png'),
      subtitle: 'Home Interior',
    },
   
    {
      key: '2',
      titleImageSource:require('../service/mwqXQI.png'),
      subtitle:'TV & DTH',
      
    },
    {
      key: '3',
      titleImageSource:'',
      subtitle:'',
      
    },
    
    
  ];

  const handleImagePress = (key) => {
   
    switch (key) {
        case '1':
          navigation.navigate('Servicerequest', {
            datas: {
      CategoryName:'Installation',
      ServiceName:'Furniture Installation'
            },
          });
        break;
        
        case '2':
          navigation.navigate('Servicerequest', {
            datas: {
            CategoryName:'Installation',
   ServiceName:'TV & DTH'
            },
          });
        break;
        
        
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
        backgroundColor: 'none',
        // Add border radius
      },});

export default Installation ;
