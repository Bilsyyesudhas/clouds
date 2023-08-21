// import React from 'react';
// import { View, Image, SafeAreaView,Text,TouchableOpacity } from 'react-native';

// const Homecleaning = ({navigation}) => {
//   const handleimage1=()=>{
//     const newvalues={
//       CategoryName:'Home Cleaning',
//       ServiceName:'Home Cleaning'
//     }
//     navigation.navigate('Servicerequest', {datas: newvalues});
//   }

//   const handleimage2=()=>{
//     const newvalues={
//       CategoryName:'Home Cleaning',
//       ServiceName:'Bathroom Cleaning'
//     }
//     navigation.navigate('Servicerequest', {datas: newvalues});
//   }

//   const handleimage3=()=>{
//     const newvalues={
//       CategoryName:'Home Cleaning',
//       ServiceName:'Kitchen Cleaning'
//     }
//     navigation.navigate('Servicerequest', {datas: newvalues});
//   }

//   const handleimage4=()=>{
//     const newvalues={
//       CategoryName:'Home Cleaning',
//       ServiceName:'Pest Control'
//     }
//     navigation.navigate('Servicerequest', {datas: newvalues});
//   }
//   const handleimage5=()=>{
//     const newvalues={
//       CategoryName:'Home Cleaning',
//       ServiceName:'Home Disinfection & Sanitation'
//     }
//     navigation.navigate('Servicerequest', {datas: newvalues});
//   }

  
//   return (
//     <SafeAreaView>

//     <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginHorizontal:20,paddingTop:30 }}>
//     <TouchableOpacity onPress={handleimage1}>
//       <Image
//         source={require('../service/TnmhQl.png')}
//         style={{ width: 100, height: 100 ,
//           borderRadius: 10, 
//           backgroundColor: '#C4C3D0'}}
//       />
//       </TouchableOpacity>
//       <TouchableOpacity onPress={handleimage2}>
//       <Image
//         source={require('../service/TnmhQl.png')}
//         style={{ width: 100, height: 100,
//           borderRadius: 10, 
//           backgroundColor: '#C4C3D0' }}
//       />
//       </TouchableOpacity>
//       <TouchableOpacity onPress={handleimage3}>
//           <Image
//         source={require('../service/oLeEW6.png')}
//         style={{ width: 100, height: 100, borderRadius: 10, 
//           backgroundColor: '#C4C3D0' }}
//       />

//    </TouchableOpacity>
//     </View>
//     <View style={{ flexDirection: 'row', justifyContent:'space-between',marginHorizontal:20, }}>
//       <Text style={{ fontSize: 13,width:100, color: '#000',textAlign:"center",padding:10}}>Home Cleaning</Text>
//       <Text style={{ fontSize: 13,width:100, color: '#000',textAlign:"center",padding:10}}>Bathroom Cleaning</Text>
//       <Text style={{ fontSize: 13,width:100, color: '#000',textAlign:"center",padding:10}}>Kitchen Cleaning</Text>
      
//     </View>

//     <View style={{ flexDirection: 'row', justifyContent: 'flex-start',marginHorizontal:20,paddingTop:30 }}>
//     <TouchableOpacity onPress={handleimage4}>
//       <Image
//         source={require('../service/n4buB7.png')}
//         style={{ width: 100, height: 100,
//          borderRadius: 10, 
//         backgroundColor: '#C4C3D0' }}
//       />
//       </TouchableOpacity>
//       <TouchableOpacity onPress={handleimage5}>
//       <Image
//         source={require('../service/z6N7c3.png')}
//         style={{ width: 100, height: 100,marginHorizontal:20 ,
//           borderRadius: 10, 
//           backgroundColor: '#C4C3D0'}}
//       />
//     </TouchableOpacity>

   
//     </View>
//     <View style={{ flexDirection: 'row', justifyContent:'flex-start',marginHorizontal:20, }}>
//       <Text style={{ fontSize: 13,width:100, color: '#000',textAlign:"center",padding:10}}>Pest Control</Text>
      
//       <Text style={{ fontSize: 13,width:100,marginHorizontal:20, color: '#000',textAlign:"center",padding:10}}>Home Disinfection & Sanitation</Text>
      
//     </View>
 



//     </SafeAreaView>
//   );
// };

// export default Homecleaning;



import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Homecleaning  = ({ navigation }) => {
  const array = [
    {
      key: '1',
      titleImageSource: require('../service/TnmhQl.png'),
      subtitle: 'Home Cleaning',
    },
    {
      key: '2',
      titleImageSource: require('../service/TnmhQl.png'),
      subtitle: ' Bathroom Cleaning',
    },
    {
      key: '3',
      titleImageSource: require('../service/oLeEW6.png'),
      subtitle: 'Kitchen Cleaning ',
    },
    {
      key: '4',
      titleImageSource: require('../service/n4buB7.png'),
      subtitle: 'Pest Control ',
    },
       {
      key: '5',
      titleImageSource: require('../service/z6N7c3.png'),
      subtitle: 'Home Disinfection & Sanitation',
    },
     
    
     {
      key: '6',
      titleImageSource:'',
      subtitle:'',
      
    },
    {
      key: '7',
      titleImageSource:'',
      subtitle:'',
      
    },
  ];

  const handleImagePress = (key) => {
   
    switch (key) {
        case '1':
          navigation.navigate('Servicerequest', {
            datas: {
              CategoryName:'Home Cleaning',
      ServiceName:'Home Cleaning'
            },
          });
        break;
          
        case '2':
          navigation.navigate('Servicerequest', {
            datas: {
              CategoryName:'Home Cleaning',
                 ServiceName:'Bathroom Cleaning'
            },
          });
        break;
         
        case '3':
          navigation.navigate('Servicerequest', {
            datas: {
                    CategoryName:'Home Cleaning',
      ServiceName:'Kitchen Cleaning'
            },
          });
        break;
          case '4':
            navigation.navigate('Servicerequest', {
              datas: {
                CategoryName:'Home Cleaning',
                   ServiceName:'Pest Control'
              },
            });
          break;
        case '5':
          navigation.navigate('Servicerequest', {
            datas: {
              CategoryName:'Home Cleaning',
      ServiceName:'Home Disinfection & Sanitation'
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

export default Homecleaning;
