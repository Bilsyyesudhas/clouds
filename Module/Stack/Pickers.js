import React from 'react';
import { View, Image, SafeAreaView,Text,TouchableOpacity } from 'react-native';

const Pickers = ({navigation}) => {
  const handleimage1=()=>{
    const newvalues={
      CategoryName:'Packers & Movers',
      ServiceName:'Home Shifting'
    }
    navigation.navigate('Servicerequest', {datas: newvalues});
  }
  const handleimage2=()=>{
    const newvalues={
      CategoryName:'Packers & Movers',
      ServiceName:'Others'
    }
    navigation.navigate('Servicerequest', {datas: newvalues});
  }
  return (
    <SafeAreaView>

    <View style={{ flexDirection: 'row', justifyContent: 'flex-start',marginHorizontal:20,paddingTop:30 }}>
    <TouchableOpacity onPress={handleimage1}>
      <Image
        source={require('../service/O3ui4K.png')}
        style={{ width: 100, height: 100, borderRadius: 10,
          backgroundColor:'#C4C3D0' }}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleimage2}>
      <Image
        source={require('../service/repy5P.png')}
        style={{ width: 100, height: 100,marginHorizontal:30, borderRadius: 10,
          backgroundColor:'#C4C3D0'}}
      />
    </TouchableOpacity>

   
    </View>
    <View style={{ flexDirection: 'row', justifyContent:'flex-start',marginHorizontal:20, }}>
      <Text style={{ fontSize: 13,color:"#000",width:100,textAlign:"center",padding:10}}>Home Shifting</Text>
      
      <Text style={{ fontSize: 13,color:"#000",width:100,marginHorizontal:20,textAlign:"center",padding:10}}>Others</Text>
      
    </View>
 



    </SafeAreaView>
  );
};

export default Pickers;