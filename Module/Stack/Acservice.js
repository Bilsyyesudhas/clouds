import React from 'react';
import { View, Image, SafeAreaView,Text,TouchableOpacity } from 'react-native';

const Acservice = ({navigation}) => {
  const handleimage1=()=>{
    const newvalues={
      CategoryName:'Painting & Water proofing',
      ServiceName:'Painting'
    }
    navigation.navigate('Servicerequest', {datas: newvalues});
  }

  const handleimage2=()=>{
    const newvalues={
      CategoryName:'Painting & Water proofing',
      ServiceName:'Water Proofing'
    }
    navigation.navigate('Servicerequest', {datas: newvalues});
  }

  const handleimage3=()=>{
    const newvalues={
      CategoryName:'Painting & Water proofing',
      ServiceName:'Painting'
    }
    navigation.navigate('Servicerequest', {datas: newvalues});
  }

  const handleimage4=()=>{
    const newvalues={
      CategoryName:'Painting & Water proofing',
      ServiceName:'Water Proofing'
    }
    navigation.navigate('Servicerequest', {datas: newvalues});
  }
  const handleimage5=()=>{
    const newvalues={
      CategoryName:'Painting & Water proofing',
      ServiceName:'Painting'
    }
    navigation.navigate('Servicerequest', {datas: newvalues});
  }

  const handleimage6=()=>{
    const newvalues={
      CategoryName:'Painting & Water proofing',
      ServiceName:'Water Proofing'
    }
    navigation.navigate('Servicerequest', {datas: newvalues});
  }
  return (
    <SafeAreaView>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginHorizontal:20 }}>
    <TouchableOpacity onPress={handleimage1}>
    <Image
        source={require('../service/CwhdpB.png')}
        style={{ width: 100, height: 100 }}
      />
    </TouchableOpacity>
    <TouchableOpacity onPress={handleimage2}>
      <Image
        source={require('../service/L8Ryrz.png')}
        style={{ width: 100, height: 100 }}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleimage3}>
      <Image
        source={require('../service/oZNOH0.png')}
        style={{ width: 100, height: 100 }}
      />
      </TouchableOpacity>
    </View>

    <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginHorizontal:20 }}>
      <Text style={{ fontSize: 13,color:"black",width:100}}>AcRepairService</Text>
      <Text style={{ fontSize: 13,color:"black",width:100}}>AirCoolerService</Text>
      <Text style={{ fontSize: 13 ,color:"black"}}>RefrigeratorService</Text>
    </View>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginHorizontal:20,paddingTop:30 }}>
    <TouchableOpacity onPress={handleimage4}>
      <Image
        source={require('../service/NjOXWF.png')}
        style={{ width: 100, height: 100 }}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleimage5}>
      <Image
        source={require('../service/kEuYV0.png')}
        style={{ width: 100, height: 100 }}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleimage6}>
      <Image
        source={require('../service/oNHi7l.png')}
        style={{ width: 100, height: 100 }}
      />
      </TouchableOpacity>
    </View>

    <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginHorizontal:20, }}>
      <Text style={{ fontSize: 13,color:"red",width:100}}>Washing Machine Service</Text>
      <Text style={{ fontSize: 13,color:"red",width:100}}>(RO) Water purifier Service</Text>
      <Text style={{ fontSize: 13 ,color:"red",width:100}}>Water Heater or Geyser Service</Text>
    </View>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginHorizontal:20,paddingTop:30 }}>
    <TouchableOpacity onPress={handleimage7}>
      <Image
        source={require('../service/MjfA96.png')}
        style={{ width: 100, height: 100 }}
      />
      </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginHorizontal:20, }}>
      <Text style={{ fontSize: 13,color:"red",width:100}}>Microwave Repair</Text>
      </View>


    </SafeAreaView>
  );
};

export default Acservice;