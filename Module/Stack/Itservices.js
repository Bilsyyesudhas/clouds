// import React from 'react';
// import { View, Image, SafeAreaView,Text,TouchableOpacity } from 'react-native';

// const Itservices = ({navigation}) => {
//   const handleimage1=()=>{
//     const newvalues={
//       CategoryName:'ITService',
//       ServiceName:'Customer Relationship management'
//     }
//     navigation.navigate('Servicerequest', {datas: newvalues});
//   }
//   const handleimage2=()=>{
//     const newvalues={
//       CategoryName:'ITService',
//       ServiceName:'GST Billing Software Offline'
//     }
//     navigation.navigate('Servicerequest', {datas: newvalues});
//   }
//   const handleimage3=()=>{
//     const newvalues={
//       CategoryName:'ITService',
//       ServiceName:'GST Billing Software Online'
//     }
//     navigation.navigate('Servicerequest', {datas: newvalues});
//   }
//   const handleimage4=()=>{
//     const newvalues={
//       CategoryName:'ITService',
//       ServiceName:'Website Designing'
//     }
//     navigation.navigate('Servicerequest', {datas: newvalues});
//   }
//   const handleimage5=()=>{
//     const newvalues={
//       CategoryName:'ITService',
//       ServiceName:'E-Commerce with Mobile Application'
//     }
//     navigation.navigate('Servicerequest', {datas: newvalues});
//   }
//   return (
//     <SafeAreaView>

//     <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginHorizontal:20,paddingTop:10 }}>
//     <TouchableOpacity onPress={handleimage1}>
//       <Image
//         source={require('../service/sQltRw.png')}
//         style={{ width: 100, height: 100, borderRadius: 10,
//           backgroundColor:'#C4C3D0' }}
//       />
//       </TouchableOpacity>
//       <TouchableOpacity onPress={handleimage2}>
//       <Image
//         source={require('../service/v9avLi.png')}
//         style={{ width: 100, height: 100, borderRadius: 10,
//           backgroundColor:'#C4C3D0'}}
//       />
//       </TouchableOpacity>
//       <TouchableOpacity onPress={handleimage3}>
//           <Image
//         source={require('../service/Y3SLVT.png')}
//         style={{ width: 100, height: 100, borderRadius: 10,
//           backgroundColor:'#C4C3D0' }}
//       />
// </TouchableOpacity>
   
//     </View>
//     <View style={{ flexDirection: 'row', justifyContent:'space-between',marginHorizontal:20, }}>
//       <Text style={{ fontSize: 13,color:"#000",width:100,textAlign:"center",padding:10}}>Customer Relationship management</Text>
//       <Text style={{ fontSize: 13,color:"#000",width:100,textAlign:"center",padding:10}}>GST Billing Software Offline</Text>
//       <Text style={{ fontSize: 13,color:"#000",width:100,textAlign:"center",padding:10}}>GST Billing Software Online</Text>
      
//     </View>

//     <View style={{ flexDirection: 'row', justifyContent: 'flex-start',marginHorizontal:20,paddingTop:30 }}>
//     <TouchableOpacity onPress={handleimage4}>
//       <Image
//         source={require('../service/bBFakl.png')}
//         style={{ width: 100, height: 100 , borderRadius: 10,
//           backgroundColor:'#C4C3D0'}}
//       />
//       </TouchableOpacity>
//       <TouchableOpacity onPress={handleimage5}>
//       <Image
//         source={require('../service/6XLzOK.png')}
//         style={{ width: 100, height: 100,marginHorizontal:30, borderRadius: 10,
//           backgroundColor:'#C4C3D0'}}
//       />
//     </TouchableOpacity>

   
//     </View>
//     <View style={{ flexDirection: 'row', justifyContent:'flex-start',marginHorizontal:20, }}>
//       <Text style={{ fontSize: 13,color:"#000",width:100,textAlign:"center",padding:10}}>Website Designing</Text>
      
//       <Text style={{ fontSize: 13,color:"#000",width:100,marginHorizontal:30,textAlign:"center",padding:10}}>E-Commerce with Mobile Application</Text>
      
//     </View>
 



//     </SafeAreaView>
//   );
// };

// export default Itservices;


import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const  Itservices = ({ navigation }) => {
  const array = [
    {
      key: '1',
      titleImageSource: require('../service/sQltRw.png'),
      subtitle: 'Customer Relationship management',
    },
    {
      key: '2',
      titleImageSource: require('../service/v9avLi.png'),
      subtitle: 'GST Billing Software Offline',
    },
    {
      key: '3',
      titleImageSource: require('../service/Y3SLVT.png'),
      subtitle: 'GST Billing Software Online',
    },
    {
      key: '4',
      titleImageSource: require('../service/bBFakl.png'),
      subtitle: 'Website Designing ',
    },
       
      
    
     {
      key: '5',
      titleImageSource:require('../service/6XLzOK.png'),
      subtitle:'E-Commerce with Mobile Application',
      
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
              CategoryName:'ITService',
                   ServiceName:'Customer Relationship management'
            },
          });
        break;
          
        case '2':
          navigation.navigate('Servicerequest', {
            datas: {
    CategoryName:'ITService',
    ServiceName:'GST Billing Software Offline'
            },
          });
        break;
         
        case '3':
          navigation.navigate('Servicerequest', {
            datas: {
                 CategoryName:'ITService',
    ServiceName:'GST Billing Software Online'
            },
          });
        break;
          case '4':
            navigation.navigate('Servicerequest', {
              datas: {
                  CategoryName:'ITService',
                  ServiceName:'Website Designing'
              },
            });
          break;
          case '5':
            navigation.navigate('Servicerequest', {
              datas: {
                  CategoryName:'ITService',
                  ServiceName:'E-Commerce with Mobile Application'
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

export default Itservices ;

