import {
  ImageBackground,
  Text,
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
  Modal,
  FlatList,
  Dimensions,
} from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';

import MyCarousel from './MyCarousel';

import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import auth from '@react-native-firebase/auth';
import {Banner} from './Banner';
import {data} from './SliderData';
import Cart from './Cart';
import React, {useState, useEffect} from 'react';
import MyTab from './MyTab';

const {width} = Dimensions.get('window');

export const Sandbox = ({navigation}) => {
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState([]);

  // useEffect(() => {
  //   axios.get('http://localhost:7098/api/get-catogery').then(response => {
  //     if (response.data.length > 0) {
  //       console.log(response.data);
  //       setValue(response.data);
  //     }
  //   });
  // }, []);

  const handleImagePress = () => {
    navigation.navigate('painting');
  };
  const Press = () => {
    navigation.navigate('Homecleaning');
  };
  const handleImage = e => {
    console.log(e, 'ppp');
    if (e === 1) {
      navigation.navigate('Servicerequest', {
        datas: {
          CategoryName: 'Laundry Service',
          ServiceName: 'Dry Cleaning',
        },
      });
    } else if (e === 2) {
      navigation.navigate('Servicerequest', {
        datas: {
          CategoryName: 'Services',
          ServiceName: 'Printer & Scanner',
        },
      });
    } else if (e === 3) {
      navigation.navigate('Servicerequest', {
        datas: {
          CategoryName: 'Services',
          ServiceName: 'Juicer , Mixer , Grinder Fault Rectification',
        },
      });
    } else if (e === 4) {
      navigation.navigate('Servicerequest', {
        datas: {
          CategoryName: 'Installation',
          ServiceName: 'TV & DTH',
        },
      });
    } else if (e === 5) {
      navigation.navigate('Servicerequest', {
        datas: {
          CategoryName: 'Services',
          ServiceName: 'AC Full Service',
        },
      });
    } else if (e === 6) {
      navigation.navigate('Servicerequest', {
        datas: {
          CategoryName: 'Installation',
          ServiceName: 'Furniture Installation',
        },
      });
    } else if (e === 7) {
      navigation.navigate('Servicerequest', {
        datas: {
          CategoryName: 'Home Cleaning',
          ServiceName: 'Home Disinfection & Sanitation',
        },
      });
    } else if (e === 8) {
      navigation.navigate('Servicerequest', {
        datas: {
          CategoryName: 'Services',
          ServiceName: 'Desktop Computer Service',
        },
      });
    } else if (e === 9) {
      navigation.navigate('Servicerequest', {
        datas: {
          CategoryName: 'Interior',
          ServiceName: 'Home Interior',
        },
      });
    }
  };

  const handleImages = e => {
    console.log(e, 'ppp');
    if (e === 1) {
      navigation.navigate('Servicerequest', {
        datas: {
          CategoryName: 'IT Service',
          ServiceName: 'Website Designing',
        },
      });
    } else if (e === 2) {
      navigation.navigate('Servicerequest', {
        datas: {
          CategoryName: 'IT Service',
          ServiceName: 'GST Billing Software Offline',
        },
      });
    } else if (e === 3) {
      navigation.navigate('Servicerequest', {
        datas: {
          CategoryName: 'IT Service',
          ServiceName: 'GST Billing Software Online',
        },
      });
    } else if (e === 4) {
      navigation.navigate('Servicerequest', {
        datas: {
          CategoryName: 'IT Service',
          ServiceName: 'Customer Relationship management',
        },
      });
    } else if (e === 5) {
      navigation.navigate('Servicerequest', {
        datas: {
          CategoryName: 'IT Service',
          ServiceName: 'E-Commerce with Mobile Application',
        },
      });
    }
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#fff',
        flex: 1,
        height: 800,
        borderRadius: 20,
      }}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'blue',
            width: '110%',
            paddingVertical: 15,
            paddingHorizontal: 20,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: -15,
          }}>
          
          <Text style={{paddingLeft: 100, fontWeight: 'bold', color: '#fff'}}>
            CAPE CLOUDS
          </Text>
          <Ionicons
            name="person"
            size={30}
            color={'red'}
            style={{paddingLeft: 120}}
            onPress={() => setShowModal(true)}
          />
        </View>

        <Text
          style={{
            backgroundColor: '#fff',
            fontWeight: 'bold',
            fontSize: 20,
            color: '#000',
          }}>
          Categories
        </Text>

        <Cart navigation={navigation} />

        <View style={{marginTop: 5,
        }}>
          <FlatList
            data={data} //my data
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.slide}
                onPress={() => handleImage(item.key)}>
                <Image
                  source={item.image}
                  style={styles.img}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={{marginBottom: -60, marginTop: -25}}>
          <TouchableOpacity onPress={() => navigation.navigate('Agro Smart')}>
            <Image
              source={require('./Image/QWfIVD.jpg')}
              style={{width: 400, height: 200, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
        </View>
        <View style={{marginBottom: -60, marginTop: -8}}>
          <Image
            source={require('./Image/OeDhr7.jpg')}
            style={{width: 400, height: 200, resizeMode: 'contain'}}
          />
        </View>
        <View style={{marginBottom: -60, marginTop: -8}}>
          <TouchableOpacity onPress={() => navigation.navigate('Happy Home')}>
            <Image
              source={require('./Image/Pohz4o.jpg')}
              style={{width: 400, height: 200, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
        </View>

        <View style={{marginTop: 40}}>
          <MyCarousel />
        </View>
        <View style={{marginTop: 40}}>
          <FlatList
            data={Banner} //my data
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.slide}
                onPress={() => handleImages(item.key)}>
                <Image
                  source={item.image}
                  style={{width: 300, height: 400, resizeMode: 'contain'}}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            )}
          />
        </View>

        <Modal
          visible={showModal}
          onRequestClose={() => setShowModal(false)}
          transparent>
          <View
            style={{
              borderRadius: 10,
              backgroundColor: '#F5F5F5',
              height: 100,
              width: 350,
              marginTop: 55,
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
              marginHorizontal: 20,
            }}>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                width: 350,
              }}>
              <TouchableOpacity
                style={{
                  width: 350,
                  paddingTop: 30,
                  flexDirection: 'row',
                  paddingBottom: 10,
                }}
                onPress={() => navigation.navigate('profile')}>
                <Icon name="user" size={20} style={{paddingHorizontal: 5}} />
                <Text style={{textAlign: 'left'}}>Profile</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={{
                  width: 350,
                  paddingTop: 30,
                  flexDirection: 'row',
                  paddingBottom: 10,
                }}
                onPress={() => auth().signOut()}>
                <Icon name="user" size={20} style={{paddingHorizontal: 5}} />
                <Text style={{textAlign: 'left'}}>logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
     
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    backgroundColor: 'white',
    display: 'flex',
  },

  box: {
    flex: 1,
    paddingLeft: 40,
    color: '#000',
    fontWeight: 'bold',
    paddingTop: 10,
  },
  boxes: {
    flex: 1,
    paddingLeft: 10,
    color: '#000',
    fontWeight: 'bold',
    paddingTop: 10,
  },
  boxess: {
    flex: 1,
    paddingLeft: 30,
    color: '#000',
    fontWeight: 'bold',
    paddingTop: 10,
  },
  boxOne: {
    flex: 1,
    backgroundColor: '#ddd',
    paddingLeft: 30,
    width: 100,
    margin: 10,
    height: 80,
    borderRadius: 10,
  },
  boxTwo: {
    flex: 1,
    backgroundColor: '#ddd',
    paddingLeft: 30,
    width: 100,
    margin: 10,
    height: 80,
    borderRadius: 10,
  },
  boxThree: {
    flex: 1,
    backgroundColor: '#ddd',
    paddingLeft: 30,
    width: 100,
    margin: 10,
    height: 80,
    borderRadius: 10,
  },
  slide: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: 200,
  },
  card: {
    backgroundColor: 'cyan',
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 30,
    borderRadius: 10,
  },
});
