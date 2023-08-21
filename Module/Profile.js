// import {View, Text, Image, Modal, Button} from 'react-native';
// import React, {useState} from 'react';
// import EditProfile from './EditProfile';

// export const Profile = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const handleOk = () => {
//     setIsVisible(false);
//   };
//   return (
//     <View>
//       {/* <View>
//         <Image source={} />
//       </View> */}
//       <View
//         style={{display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
//         <View
//           style={{
//             flex: '0.5',
//             paddingRight: '10px',
//           }}>
//           <Text style={{textAlign: 'right'}}>Name</Text>
//           <Text style={{textAlign: 'right'}}>Email</Text>
//           <Text style={{textAlign: 'right'}}>Phone</Text>
//           <Text style={{textAlign: 'right'}}>Address</Text>
//           <Text style={{textAlign: 'right'}}>City</Text>
//           <Text style={{textAlign: 'right'}}>District</Text>
//           <Text style={{textAlign: 'right'}}>State</Text>
//           <Text style={{textAlign: 'right'}}>PinCode</Text>
//           <Text style={{textAlign: 'right'}}>Service Center</Text>
//         </View>
//         <View style={{flex: '0.5', paddingLeft: '10px'}}>
//           <Text style={{textAlign: 'left'}}>: Sike</Text>
//           <Text style={{textAlign: 'left'}}>: boiii@gmail.com</Text>
//           <Text style={{textAlign: 'left'}}>: 898989898989</Text>
//           <Text style={{textAlign: 'left'}}>: jhkfdgsg</Text>
//           <Text style={{textAlign: 'left'}}>: Ngl</Text>
//           <Text style={{textAlign: 'left'}}>: KK</Text>
//           <Text style={{textAlign: 'left'}}>: TN</Text>
//           <Text style={{textAlign: 'left'}}>: 6666666</Text>
//           <Text style={{textAlign: 'left'}}>: Default</Text>
//         </View>
//         <View>
//           <View style={{width: '100%', marginBottom: '10px'}}>
//             <Button   title ="Edit Profile"
//               style={{backgroundColor: 'green', color: 'white'}}
//               onPress={() => setIsVisible(true)}/>

//           </View>
//           <View style={{width: '100%', marginBottom: '10px'}}>
//             <Button title='Change password'
//               style={{backgroundColor: 'green', color: 'white'}}
//               onPress={() => setIsVisible(true)}/>

//           </View>
//         </View>
//       </View>
//       <Modal
//         visible={isVisible}
//         animationType="slide"
//         onRequestClose={() => setIsVisible(false)}>
//         <EditProfile handleOk={handleOk}/>
//       </Modal>
//     </View>
//   );
// };

import {View, Text, Image, Modal, Button, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import EditProfile from './EditProfile';
const Profile = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleOk = () => {
    setIsVisible(false);
  };

  return (
    <View>
      <View
        style={{display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
        <View style={styles.container}>
        <View style={styles.imageContainer}>
        {/* Provide a valid image source */}
        <Image source={require('./Image/user.png')} style={styles.image} />
      </View>
          <View style={styles.infoContainer}>
            <View style={styles.labelColumn}>
              <Text style={styles.labelText}>Name</Text>
              <Text style={styles.labelText}>Email</Text>
              <Text style={styles.labelText}>Phone</Text>
              <Text style={styles.labelText}>Address</Text>
              <Text style={styles.labelText}>City</Text>
              <Text style={styles.labelText}>District</Text>
              <Text style={styles.labelText}>State</Text>
              <Text style={styles.labelText}>PinCode</Text>
              <Text style={styles.labelText}>Service Center</Text>
            </View>
            <View style={styles.valueColumn}>
              <Text style={styles.valueText}>: Sike</Text>
              <Text style={styles.valueText}>: </Text>
              <Text style={styles.valueText}>: 898989898989</Text>
              <Text style={styles.valueText}>: jhkfdgsg</Text>
              <Text style={styles.valueText}>: Ngl</Text>
              <Text style={styles.valueText}>: KK</Text>
              <Text style={styles.valueText}>: TN</Text>
              <Text style={styles.valueText}>: 6666666</Text>
              <Text style={styles.valueText}>: Default</Text>
            </View>
          </View>
        </View>
      </View>
     
         <View style={styles.buttonContainer}>
          <Button
            title="Edit Profile"
            style={{backgroundColor: 'green', color: 'white'}}
            onPress={() => setIsVisible(true)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Change password"
            style={{backgroundColor: 'green', color: 'white'}}
            onPress={() => setIsVisible(true)}
          />
        </View>
   
      <Modal
        visible={isVisible}
        animationType="slide"
        onRequestClose={() => setIsVisible(false)}>
        <EditProfile handleOk={handleOk}/>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 100,
    backgroundColor:'#fff'
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    
    
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  labelColumn: {
    flex: 0.5,
    paddingRight: 10,
  },
  labelText: {
    textAlign: 'right',
  },
  valueColumn: {
    flex: 0.5,
    paddingLeft: 10,
  },
  valueText: {
    textAlign: 'left',
  },
  buttonContainer: {
   width: '100%',
   paddingHorizontal: 20,
   paddingVertical: 5,
   backgroundColor:'#fff'
   
  },
});
export default Profile;
