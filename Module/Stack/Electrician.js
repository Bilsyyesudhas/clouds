// import React from 'react';
// import { View, Image, SafeAreaView,Text,TouchableOpacity } from 'react-native';

// const Electrician = ({navigation}) => {
//   const handleimage1=()=>{
//     const newvalues={
//       CategoryName:'Electrician , Plumber & Carpenter',
//       ServiceName:'Electrician'
//     }
//     navigation.navigate('Servicerequest', {datas: newvalues});
//   }
//   const handleimage2=()=>{
//     const newvalues={
//       CategoryName:'Electrician , Plumber & Carpenter',
//       ServiceName:'Plumber'
//     }
//     navigation.navigate('Servicerequest', {datas: newvalues});
//   }
//   const handleimage3=()=>{
//     const newvalues={
//       CategoryName:'Electrician , Plumber & Carpenter',
//       ServiceName:'Carpenter'
//     }
//     navigation.navigate('Servicerequest', {datas: newvalues});
//   }
  
//   return (
//     <SafeAreaView>

//     <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginHorizontal:20,paddingTop:30 }}>
//     <TouchableOpacity onPress={handleimage1}>
//       <Image
//         source={require('../service/OXkM1w.png')}
//         style={{ width: 100, height: 100, marginHorizontal:10,
//           borderRadius: 10, 
//           backgroundColor: '#C4C3D0' }}
//       />
//        </TouchableOpacity>
//        <TouchableOpacity onPress={handleimage2}>
//       <Image
//         source={require('../service/pjWCUG.png')}
//         style={{ width: 100, height: 100, marginHorizontal:10,
//           borderRadius: 10, 
//           backgroundColor: '#C4C3D0' }}
//       />
//       </TouchableOpacity>
//       <TouchableOpacity onPress={handleimage3}>
//           <Image
//         source={require('../service/4s2zp0.png')}
//         style={{ width: 100, height: 100, marginHorizontal:10,
//           borderRadius: 10, 
//           backgroundColor: '#C4C3D0' }}
//       />
// </TouchableOpacity>
   
//     </View>
//     <View style={{ flexDirection: 'row', justifyContent:'space-between',marginHorizontal:20,paddingTop:8 }}>
//       <Text style={{ fontSize: 13,width:100,marginHorizontal:10, color: '#000',textAlign:"center",padding:8}}>Electrician</Text>
//       <Text style={{ fontSize: 13,width:100,marginHorizontal:10, color: '#000',textAlign:"center",padding:8}}>Plumber</Text>
//       <Text style={{ fontSize: 13,width:100,marginHorizontal:10, color: '#000',textAlign:"center",padding:8}}>Carpenter</Text>
      
//     </View>


 



//     </SafeAreaView>
//   );
// };

// export default Electrician;



import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Electrician = ({ navigation }) => {
  const array = [
    {
      key: '1',
      titleImageSource: require('../service/OXkM1w.png'),
      subtitle: 'Electrician',
    },
    {
      key: '2',
      titleImageSource: require('../service/pjWCUG.png'),
      subtitle: 'Plumber',
    },
    {
      key: '3',
      titleImageSource: require('../service/4s2zp0.png'),
      subtitle: 'Carpenter',
    },
   
    
 
      ];

  const handleImagePress = (key) => {
   
    switch (key) {
        case '1':
          navigation.navigate('Servicerequest', {
            datas: {
             CategoryName:'Electrician , Plumber & Carpenter',
 ServiceName:'Electrician'
            },
          });
        break;
          
        case '2':
          navigation.navigate('Servicerequest', {
            datas: {
                    CategoryName:'Electrician , Plumber & Carpenter',
      ServiceName:'Plumber'
            },
          });
        break;
         
        case '3':
          navigation.navigate('Servicerequest', {
            datas: {
          CategoryName:'Electrician , Plumber & Carpenter',
      ServiceName:'Carpenter'
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
        borderRadius: 20, // Add border radius
      },});

export default Electrician ;