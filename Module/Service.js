// import React from 'react';
// import { View, Image, SafeAreaView,Text,TouchableOpacity } from 'react-native';

// const Service = ({navigation}) => {
//   const handleimage1=()=>{
//     const newvalues={
//       CategoryName:'AC & Home Appliances',
//       ServiceName:'AC Repair Service'
//     }
//     navigation.navigate('Servicerequest', {datas: newvalues});
//   }
//   const handleimage2=()=>{
//     const newvalues={
//       CategoryName:'AC & Home Appliances',
//       ServiceName:'Air Cooler Service'
//     }
//     navigation.navigate('Servicerequest', {datas: newvalues});
//   }
//   const handleimage3=()=>{
//     const newvalues={
//       CategoryName:'AC & Home Appliances',
//       ServiceName:'Refrigerator Service'
//     }
//     navigation.navigate('Servicerequest', {datas: newvalues});
//   }
//   const handleimage4=()=>{
//     const newvalues={
//       CategoryName:'AC & Home Appliances',
//       ServiceName:'Washing Machine Service'
//     }
//     navigation.navigate('Servicerequest', {datas: newvalues});
//   }
//   const handleimage5=()=>{
//     const newvalues={
//       CategoryName:'AC & Home Appliances',
//       ServiceName:'(RO) Water purifier Service'
//     }
//     navigation.navigate('Servicerequest', {datas: newvalues});
//   }
//   const handleimage6=()=>{
//     const newvalues={
//       CategoryName:'AC & Home Appliances',
//       ServiceName:'Water Heater or Geyser Service'
//     }
//     navigation.navigate('Servicerequest', {datas: newvalues});
//   }
//   const handleimage7=()=>{
//     const newvalues={
//       CategoryName:'AC & Home Appliances',
//       ServiceName:'Microwave  Repair'
//     }
//     navigation.navigate('Servicerequest', {datas: newvalues});
//   }
//   return (
//     <SafeAreaView>
//     <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginHorizontal:20 }}>
//     <TouchableOpacity onPress={handleimage1}>
//     <Image
//         source={require('./service/CwhdpB.png')}
//         style={{ width: 100, height: 100,
//           resizeMode: 'contain', 
//           borderRadius: 10, 
//           overflow: 'hidden',
//           backgroundColor: '#C4C3D0',
//         flex:1 }}
//       />
//           </TouchableOpacity>
//           <TouchableOpacity onPress={handleimage2}>
//       <Image
//         source={require('./service/L8Ryrz.png')}
//         style={{ width: 100, height: 100,
//           resizeMode: 'contain', 
//           borderRadius: 10, 
//           overflow: 'hidden',
//           backgroundColor: '#C4C3D0',
//         flex:1 }}
//       />
//       </TouchableOpacity>
//       <TouchableOpacity onPress={handleimage3}>
//       <Image
//         source={require('./service/oZNOH0.png')}
//         style={{ width: 100, height: 100 ,
//         borderRadius: 10, 
//         backgroundColor: '#C4C3D0',
//         }}
//       />
//       </TouchableOpacity>
//     </View>

//     <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginHorizontal:20 }}>
//       <View>
//       <Text style={{ fontSize: 13,width:100, color: '#000',  textAlign:"center",paddingTop: 10}}>
//         AcRepair</Text>
//        <Text style={{ fontSize: 13,width:100, color: '#000',  textAlign:"center"}}> Service</Text>
//         </View>
//         <View>
//       <Text style={{ fontSize: 13,width:100, color: '#000',  textAlign:"center",paddingTop: 10}}>
//         AirCooler</Text>
//        <Text style={{ fontSize: 13,width:100, color: '#000',  textAlign:"center"}}> Service</Text>
//         </View>
//       <View>
//       <Text style={{ fontSize: 13 ,width:100, color: '#000',textAlign:"center",paddingTop: 10}}>Refrigerator</Text>
//       <Text style={{ fontSize: 13 ,width:100, color: '#000',textAlign:"center"}}>Service</Text>
//       </View>
//     </View>
//     <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginHorizontal:20,paddingTop:30 }}>
//     <TouchableOpacity onPress={handleimage4}>
//       <Image
//         source={require('./service/NjOXWF.png')}
//         style={{ width: 100, height: 100 ,
//           borderRadius: 10, 
//           backgroundColor: '#C4C3D0'}}
//       />
//       </TouchableOpacity>
//       <TouchableOpacity onPress={handleimage5}>
//       <Image
//         source={require('./service/kEuYV0.png')}
//         style={{ width: 100, height: 100 , borderRadius: 10, 
//           backgroundColor: '#C4C3D0'}}
//       />
//       </TouchableOpacity>
//       <TouchableOpacity onPress={handleimage6}>
//       <Image
//         source={require('./service/oNHi7l.png')}
//         style={{ width: 100, height: 100 ,
//           borderRadius: 10, 
//           backgroundColor: '#C4C3D0'}}
//       />
//       </TouchableOpacity>
//     </View>

//     <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginHorizontal:20, }}>
//       <Text style={{ fontSize: 13,color:"red",width:100, color: '#000',textAlign:"center",paddingTop: 10}}>Washing Machine Service</Text>
//       <Text style={{ fontSize: 13,color:"red",width:100, color: '#000',textAlign:"center",paddingTop: 10}}>(RO) Water purifier Service</Text>
//       <Text style={{ fontSize: 13 ,color:"red",width:100, color: '#000',paddingTop: 10,textAlign:"center"}}>Water Heater or Geyser Service</Text>
//     </View>
//     <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginHorizontal:20,paddingTop:30 }}>
//     <TouchableOpacity onPress={handleimage7}>
//       <Image
//         source={require('./service/MjfA96.png')}
//         style={{ width: 100, height: 100 , borderRadius: 10, 
//           backgroundColor: '#C4C3D0'}}
//       />
//       </TouchableOpacity>
//       </View>
//       <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginHorizontal:20, }}>
//       <Text style={{ fontSize: 13,color:"red",width:100, color: '#000',paddingTop: 10,textAlign:"center"}}>Microwave Repair</Text>
//       </View>


//     </SafeAreaView>
//   );
// };

// export default Service;


import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Service  = ({ navigation }) => {
  const array = [
    {
      key: '1',
      titleImageSource: require('./service/CwhdpB.png'),
      subtitle: 'AcRepair Service',
    },
    {
      key: '2',
      titleImageSource: require('./service/L8Ryrz.png'),
      subtitle: ' AirCooler Service',
    },
    {
      key: '3',
      titleImageSource: require('./service/oZNOH0.png'),
      subtitle: 'Refrigerator Service ',
    },
    {
      key: '4',
      titleImageSource: require('./service/NjOXWF.png'),
      subtitle: 'Washing Machine Service ',
    },
       {
      key: '5',
      titleImageSource: require('./service/kEuYV0.png'),
      subtitle: '(RO) Water purifier Service',
    },
       {
      key: '6',
      titleImageSource: require('./service/oNHi7l.png'),
      subtitle: 'Water Heater or Geyser Service',
    },
       {
      key: '7',
      titleImageSource: require('./service/MjfA96.png'),
      subtitle: 'Microwave Repair ',
    },
      
    
     {
      key: '8',
      titleImageSource:'',
      subtitle:'',
      
    },
    {
      key: '9',
      titleImageSource:'',
      subtitle:'',
      
    },
  ];

  const handleImagePress = (key) => {
   
    switch (key) {
        case '1':
          navigation.navigate('Servicerequest', {
            datas: {
              CategoryName:'AC & Home Appliances',
   ServiceName:'AC Repair Service'
            },
          });
        break;
          
        case '2':
          navigation.navigate('Servicerequest', {
            datas: {
            CategoryName:'AC & Home Appliances',
      ServiceName:'Air Cooler Service'
            },
          });
        break;
         
        case '3':
          navigation.navigate('Servicerequest', {
            datas: {
              CategoryName:'AC & Home Appliances',
             ServiceName:'Refrigerator Service'
            },
          });
        break;
          case '4':
            navigation.navigate('Servicerequest', {
              datas: {
                CategoryName:'AC & Home Appliances',
                   ServiceName:'Washing Machine Service'
              },
            });
          break;
        case '5':
          navigation.navigate('Servicerequest', {
            datas: {
              CategoryName:'AC & Home Appliances',
              ServiceName:'(RO) Water purifier Service'
            },
          });
        break;
        case '6':
          navigation.navigate('Servicerequest', {
            datas: {
              CategoryName:'AC & Home Appliances',
                 ServiceName:'Water Heater or Geyser Service'
            },
          });
        break;
          case '7':
            navigation.navigate('Servicerequest', {
              datas: {
                CategoryName:'AC & Home Appliances',
  ServiceName:'Microwave  Repair'
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

export default Service ;
