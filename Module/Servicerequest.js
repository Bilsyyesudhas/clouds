import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import checkIcon from './Image/checkIcon.png';

export const Servicerequest = ({navigation, route}) => {
  const {datas} = route.params;
  console.log(datas, 'lll');
  //===== state to Set category name  =====
  const [category, setCategory] = useState('');

  //===== state to Set service name  =====
  const [service, setService] = useState('');

  //===== state to show modal  =====
  const [modalVisible, setModalVisible] = useState(false);

  //===== functions for modal starts  =====
  const handleOpenModal = () => {
    setModalVisible(true);
  };
  const handleCloseModal = () => {
    setModalVisible(false);
    navigation.navigate('Home');
  };
  //===== functions for modal ends  =====

  //===== handle submit button click =====
  const handleOnpress = () => {
    setModalVisible(true);
  };

  return (
    <View>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: 'black',
          marginTop: 10,
        }}>
        Service Request
      </Text>

      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={{
          fontSize: 13,
          
          color: 'black',
          paddingHorizontal: 10,
          paddingTop:5
          
        }}>Category Name *</Text>
          <TextInput
            placeholder="text"
            style={styles.input}
            value={datas.CategoryName}
            color={'#000'}
            editable={false}
          />
          <Text style={{
          fontSize: 13,
          paddingTop:5,
          color: 'black',
          paddingHorizontal: 10,
          
        }}>Service Name*</Text>
          <TextInput
            placeholder="text"
            style={styles.input}
            value={datas.ServiceName}
            color={'#000'}
            editable={false}
          />
          <View style={styles.button}>
            <Button title="Submit" color={'green'} onPress={handleOnpress} />
          </View>
        </View>
      </View>

      {/* Modal  */}
      <Modal
        visible={modalVisible}
        animationType='fade'
        transparent={true}
        onRequestClose={handleCloseModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={{alignItems: 'center'}}>
              <Image source={checkIcon} style={styles.icon} />
            </View>
            <View style={{marginVertical: 20}}>
              <Text style={{textAlign: 'center'}}>
                Service Request Successfull
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  color: '#000',
                }}>
                *GET A CALL FROM US SHORTLY*
              </Text>
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <Button title=" Ok  " onPress={handleCloseModal} />
            </View>
          </View>
        </View>
      </Modal>

      {/* modal ends */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 30,
  },
  card: {
    backgroundColor: 'white',
    height: 250,
    width: 350,
    borderRadius: 10,
    elevation: 5,
  },
  input: {
    maxWidth: 350,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 8,
    marginTop: 20,
    borderRadius: 5,
    marginHorizontal: 10,
    backgroundColor: '#ececec',
  },
  button: {
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    width: 400,
    
  },
  icon: {
    width: 80,
    height: 80,
  },
});
