// import React from 'react';
// import { View, Image, SafeAreaView,Text,TouchableOpacity } from 'react-native';

// const Tv = ({navigation}) => {
//   const handleimage1=()=>{
//     const newvalues={
//       CategoryName:'TV & Computer',
//       ServiceName:'Painting'
//     }
//     navigation.navigate('Servicerequest', {datas: newvalues});
//   }
//   const handleimage2=()=>{
//     const newvalues={
//       CategoryName:'TV & Computer',
//       ServiceName:'Computer Service'
//     }
//     navigation.navigate('Servicerequest', {datas: newvalues});
//   }
//   const handleimage3=()=>{
//     const newvalues={
//       CategoryName:'TV & Computer',
//       ServiceName:'Laptop Service'
//     }
//     navigation.navigate('Servicerequest', {datas: newvalues});
//   }
//   const handleimage4=()=>{
//     const newvalues={
//       CategoryName:'TV & Computer',
//       ServiceName:'Printer'
//     }
//     navigation.navigate('Servicerequest', {datas: newvalues});
//   }
//   const handleimage5=()=>{
//     const newvalues={
//       CategoryName:'TV & Computer',
//       ServiceName:'DTH Service'
//     }
//     navigation.navigate('Servicerequest', {datas: newvalues});
//   }
//   return (
//     <SafeAreaView>

//     <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginHorizontal:20,paddingTop:30 }}>
//     <TouchableOpacity onPress={handleimage1}>
//       <Image
//         source={require('../service/fIF73F.png')}
//         style={{ width: 100, height: 100, borderRadius: 10,
//           backgroundColor:'#C4C3D0' }}
//       />
//       </TouchableOpacity>
//       <TouchableOpacity onPress={handleimage2}>
//       <Image
//         source={require('../service/FcQYwD.png')}
//         style={{ width: 100, height: 100 ,
//           borderRadius: 10,
//           backgroundColor:'#C4C3D0'}}
//       />
//       </TouchableOpacity>
//       <TouchableOpacity onPress={handleimage3}>
//           <Image
//         source={require('../service/Kvz5tv.png')}
//         style={{ width: 100, height: 100 ,
//           borderRadius: 10,
//           backgroundColor:'#C4C3D0'}}
//       />
// </TouchableOpacity>
   
//     </View>
//     <View style={{ flexDirection: 'row', justifyContent:'space-between',marginHorizontal:20, }}>
//       <Text style={{  fontSize: 13,width:100, color: '#000',textAlign:"center",padding:10}}>LED (or) LCD TV</Text>
//       <Text style={{  fontSize: 13,width:100, color: '#000',textAlign:"center",padding:10}}>Computer Service</Text>
//       <Text style={{  fontSize: 13,width:100, color: '#000',textAlign:"center",padding:10}}>Laptop Service</Text>
      
//     </View>

//     <View style={{ flexDirection: 'row', justifyContent: 'flex-start',marginHorizontal:20,paddingTop:30 }}>
//     <TouchableOpacity onPress={handleimage4}>
//       <Image
//         source={require('../service/JH6U0o.png')}
//         style={{ width: 100, height: 100,
//           borderRadius: 10,
//           backgroundColor:'#C4C3D0'}}
//       />
//       </TouchableOpacity>
//       <TouchableOpacity onPress={handleimage5} >
//       <Image
//         source={require('../service/bpItRy.png')}
//         style={{ width: 100, height: 100,marginHorizontal:20 ,
//           borderRadius: 10,
//           backgroundColor:'#C4C3D0'}}
//       />
//     </TouchableOpacity>

   
//     </View>
//     <View style={{ flexDirection: 'row', justifyContent:'flex-start',marginHorizontal:20, }}>
//       <Text style={{ fontSize: 13,width:100, color: '#000',textAlign:"center",padding:10}}>Printer</Text>
      
//       <Text style={{  fontSize: 13,width:100, color: '#000',textAlign:"center",padding:10,marginHorizontal:20}}>DTH Service</Text>
      
//     </View>
 



//     </SafeAreaView>
//   );
// };

// export default Tv;


import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Tv  = ({ navigation }) => {
  const array = [
    {
      key: '1',
      titleImageSource: require('../service/fIF73F.png'),
      subtitle: 'LED (or) LCD TV',
    },
    {
      key: '2',
      titleImageSource: require('../service/FcQYwD.png'),
      subtitle: 'Computer Service',
    },
    {
      key: '3',
      titleImageSource: require('../service/Kvz5tv.png'),
      subtitle: 'Laptop Service',
    },
    {
      key: '4',
      titleImageSource: require('../service/JH6U0o.png'),
      subtitle: 'Printer',
    },
       {
      key: '5',
      titleImageSource: require('../service/bpItRy.png'),
      subtitle: 'DTH Service',
    },
       
    {
      key: '6',
      titleImageSource:'',
      subtitle:'',
      
    },
  ];

  const handleImagePress = (key) => {
   
    switch (key) {
        case '1':
          navigation.navigate('Servicerequest', {
            datas: {
              CategoryName:'TV & Computer',
                     ServiceName:'Painting'
            },
          });
        break;
          
        case '2':
          navigation.navigate('Servicerequest', {
            datas: {
                 CategoryName:'TV & Computer',
ServiceName:'Computer Service'
            },
          });
        break;
         
        case '3':
          navigation.navigate('Servicerequest', {
            datas: {
              CategoryName:'TV & Computer',
  ServiceName:'Laptop Service'
            },
          });
        break;
          case '4':
            navigation.navigate('Servicerequest', {
              datas: {
                   CategoryName:'TV & Computer',
ServiceName:'Printer'
              },
            });
          break;
        case '5':
          navigation.navigate('Servicerequest', {
            datas: {
                   CategoryName:'TV & Computer',
       ServiceName:'DTH Service'
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
        borderRadius: 20, // Add border radius
      },});

export default Tv;