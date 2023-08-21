// import React from 'react';
// import { View, Image, SafeAreaView,Text,TouchableOpacity } from 'react-native';

// const Toolservice = ({navigation}) => {
//   const handleimage1=()=>{
//     const newvalues={
//       CategoryName:'Services',
//       ServiceName:'Printer & Scanner'
//     }
//     navigation.navigate('Servicerequest', {datas: newvalues});
//   }
//   const handleimage2=()=>{
//     const newvalues={
//       CategoryName:'Services',
//       ServiceName:'AC Full Service'
//     }
//     navigation.navigate('Servicerequest', {datas: newvalues});
//   }
//   const handleimage3=()=>{
//     const newvalues={
//       CategoryName:'Services',
//       ServiceName:'Juicer , Mixer , Grinder Fault Rectification'
//     }
//     navigation.navigate('Servicerequest', {datas: newvalues});
//   }
//   const handleimage4=()=>{
//     const newvalues={
//       CategoryName:'Services',
//       ServiceName:'Desktop Computer Service'
//     }
//     navigation.navigate('Servicerequest', {datas: newvalues});
//   }
//   return (
//     <SafeAreaView>

//     <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginHorizontal:20,paddingTop:30 }}>
//     <TouchableOpacity onPress={handleimage1}>
//       <Image
//         source={require('../service/qf142P.png')}
//         style={{ width: 100, height: 100, borderRadius: 10,
//           backgroundColor:'#C4C3D0' }}
//       />
//       </TouchableOpacity>
//       <TouchableOpacity onPress={handleimage2}>
//       <Image
//         source={require('../service/tPxKAp.png')}
//         style={{ width: 100, height: 100 , borderRadius: 10,
//           backgroundColor:'#C4C3D0'}}
//       />
//       </TouchableOpacity>
//       <TouchableOpacity onPress={handleimage3}>
//       <Image
//         source={require('../service/6U3AJx.png')}
//         style={{ width: 100, height: 100, borderRadius: 10,
//           backgroundColor:'#C4C3D0' }}
//       />
//       </TouchableOpacity>
//     </View>

//     <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginHorizontal:20, }}>
//       <Text style={{ fontSize: 13,color:"#000",width:100,textAlign:"center",padding:10}}>Printer & Scanner</Text>
//       <Text style={{ fontSize: 13,color:"#000",width:100,marginHorizontal:10,textAlign:"center",padding:10}}>AC Full Service</Text>
//       <Text style={{ fontSize: 13 ,color:"#000",width:100,marginHorizontal:10,textAlign:"center",padding:10}}>Juicer , Mixer , Grinder Fault Rectification</Text>
//     </View>
//     <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginHorizontal:20,paddingTop:30 }}>
//      <TouchableOpacity onPress={handleimage4}>
//       <Image
//         source={require('../service/v19i7t.png')}
//         style={{ width: 100, height: 100, borderRadius: 10,
//           backgroundColor:'#C4C3D0' }}
//       />
//       </TouchableOpacity>
//       </View>
//       <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginHorizontal:20, }}>
//       <Text style={{ fontSize: 13,color:"#000",width:100,textAlign:"center",padding:10}}>Desktop Computer Service</Text>
//       </View>


//     </SafeAreaView>
//   );
// };

// export default Toolservice;



import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Toolservice  = ({ navigation }) => {
  const array = [
    {
      key: '1',
      titleImageSource: require('../service/qf142P.png'),
      subtitle: 'Printer & Scanner',
    },
    {
      key: '2',
      titleImageSource: require('../service/tPxKAp.png'),
      subtitle: 'AC Full Service',
    },
    {
      key: '3',
      titleImageSource: require('../service/6U3AJx.png'),
      subtitle: 'Juicer , Mixer , Grinder Fault Rectification',
    },
    {
      key: '4',
      titleImageSource: require('../service/v19i7t.png'),
      subtitle: 'Desktop Computer Service ',
    },
       
      
    
     {
      key: '5',
      titleImageSource:'',
      subtitle:'',
      
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
          CategoryName:'Services',
     ServiceName:'Printer & Scanner'
            },
          });
        break;
          
        case '2':
          navigation.navigate('Servicerequest', {
            datas: {
          CategoryName:'Services',
 ServiceName:'AC Full Service'
            },
          });
        break;
         
        case '3':
          navigation.navigate('Servicerequest', {
            datas: {
              CategoryName:'Services',
                 ServiceName:'Juicer , Mixer , Grinder Fault Rectification'
            },
          });
        break;
          case '4':
            navigation.navigate('Servicerequest', {
              datas: {
              CategoryName:'Services',
ServiceName:'Desktop Computer Service'
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

export default Toolservice ;