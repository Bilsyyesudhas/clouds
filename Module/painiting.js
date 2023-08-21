// import React from 'react';
// import { View, Image, SafeAreaView,Text,TouchableOpacity } from 'react-native';

// const Painting = ({navigation}) => {
//   const handleimage1=()=>{
//     const newvalues={
//       CategoryName:'Painting & Water proofing',
//       ServiceName:'Painting'
//     }
//     navigation.navigate('Servicerequest', {datas: newvalues});
//   }

//   const handleimage2=()=>{
//     const newvalues={
//       CategoryName:'Painting & Water proofing',
//       ServiceName:'Water Proofing'
//     }
//     navigation.navigate('Servicerequest', {datas: newvalues});
//   }
//   return (
//     <SafeAreaView>

//     <View style={{ flexDirection: 'row', justifyContent: 'flex-start',marginHorizontal:20,paddingTop:30 }}>
//       <TouchableOpacity onPress={handleimage1}>
//       <Image
//         source={require('./service/L6tlBv.png')}
//         style={{ width: 100, height: 100 ,
//           borderRadius: 10, 
//           backgroundColor: '#C4C3D0'}}
//       />
//       </TouchableOpacity>
//       <TouchableOpacity onPress={handleimage2}>
//       <Image
//         source={require('./service/LhmRUA.png')}
//         style={{ width: 100, height: 100,
//           marginHorizontal:20,
//           borderRadius: 10, 
//           backgroundColor: '#C4C3D0' }}
//       />
//    </TouchableOpacity>
//     </View>

//     <View style={{ flexDirection: 'row', justifyContent:'flex-start',marginHorizontal:20, }}>
//       <Text style={{ fontSize: 13,width:100, color: '#000',textAlign:"center",padding:10}}>Painting</Text>
//       <Text style={{ fontSize: 13,width:100,marginHorizontal:15, color: '#000',textAlign:"center",padding:10}}>Water Proofing</Text>
      
//     </View>
 



//     </SafeAreaView>
//   );
// };

// export default Painting;



import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Painting = ({ navigation }) => {
  const array = [
    {
      key: '1',
      titleImageSource: require('./service/L6tlBv.png'),
      subtitle: 'Painting',
    },
    {
      key: '2',
      titleImageSource: require('./service/LhmRUA.png'),
      subtitle: 'Water Proofing',
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
              CategoryName:'Painting & Water proofing',
             ServiceName:'Painting'
            },
          });
        break;
        
        case '2':
          navigation.navigate('Servicerequest', {
            datas: {
              CategoryName:'Painting & Water proofing',
                    ServiceName:'Water Proofing'
            },
          });
        
        
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

export default Painting ;
