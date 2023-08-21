// import { StyleSheet, Text, View } from 'react-native';
// import React, { useState } from 'react';
// import { CheckBox,Button } from 'react-native-elements';

// const Agro = ({navigation}) => {
//     const [checked, setChecked] = useState(false);
//  const [checked1, setchecked1] = useState(false);
//  const [checked2, setChecked2] = useState(false);
//  const [checked3, setchecked3] = useState(false);
//  const [checked4, setchecked4] = useState(false);
//     const handleCheck = () => {
//       setChecked(!checked);
//     };
//     const handleCheck1 = () => {
//       setchecked1(!checked);
//     };
//     const handleCheck2 = () => {
//       setChecked2(!checked);
//     };
//     const handleCheck3 = () => {
//       setchecked3(!checked);
//     };
//     const handleCheck4 = () => {
//       setchecked4 (!checked);
//     };
//   return (
//     <><View >
//           <Text style={styles.topic}>Agro Smart</Text>
//       </View>
//       <View style={styles.container}>
//       <CheckBox title="Agro Consultancy Services" style={styles.check} checked={checked} onPress={handleCheck} />
//       <CheckBox title="Soil Analysis" style={styles.check} checked={checked1} onPress={handleCheck1} />
//       <CheckBox title="Fertilizer Recommendation" style={styles.check} checked={checked2} onPress={handleCheck2} />
//       <CheckBox title="Marketing Tie Ups" style={styles.check} checked={checked3} onPress={handleCheck3} />
//       <CheckBox title="Financial Support" style={styles.check} checked={checked4} onPress={handleCheck4} />
//       <Button onPress={handleCheck} title="Submit" color="#007bff" />
      
//           </View></>
//   )
// }

// export default Agro

// const styles = StyleSheet.create({
//     container: {

//         backgroundColor: "white",
        
//         width:"80%",
//         marginHorizontal:50,
//         marginVertical:30,

//       },
//       check:{
//         borderColor: "white"
//       },
//       topic :{
        
//         fontWeight:"bold",
//         fontSize:30,
//         marginTop:16,
//         marginLeft:10,
//         color:"#000000"
//         },

    
// })

import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet,Button } from 'react-native';
import { Checkbox } from 'react-native-paper';

const Agro = () => {
  const [checkboxes, setCheckboxes] = useState({
    field1: false,
    field2: false,
    field3: false,
    field4: false,
    field5: false,
  }); 

  const handleCheckboxToggle = (field) => {
    setCheckboxes((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const handleSubmit = () => {
    // Do something with the checkbox values
    console.log('Checkbox values:', checkboxes);
  };

  return (
    <ImageBackground
      source={require('./Image/crops.jpg')}
      style={styles.container}
    >
      <View style={styles.checkboxContainer}>
        <Checkbox.Android
          status={checkboxes.field1 ? 'checked' : 'unchecked'}
          onPress={() => handleCheckboxToggle('field1')}
        />
        <Text style={styles.checkboxLabel}>Agro Consultancy Services</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <Checkbox.Android
          status={checkboxes.field2 ? 'checked' : 'unchecked'}
          onPress={() => handleCheckboxToggle('field2')}
        />
        <Text style={styles.checkboxLabel}>Soil Analysis</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <Checkbox.Android
          status={checkboxes.field3 ? 'checked' : 'unchecked'}
          onPress={() => handleCheckboxToggle('field3')}
        />
        <Text style={styles.checkboxLabel}>Fertilizer Recommendation</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <Checkbox.Android
          status={checkboxes.field4 ? 'checked' : 'unchecked'}
          onPress={() => handleCheckboxToggle('field4')}
        />
        <Text style={styles.checkboxLabel}>Marketing Tie Ups</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <Checkbox.Android
          status={checkboxes.field5 ? 'checked' : 'unchecked'}
          onPress={() => handleCheckboxToggle('field5')}
        />
        <Text style={styles.checkboxLabel}>Financial Support</Text>
      </View>
      <Button
        title="Submit"
        onPress={handleSubmit}
        color="green"
        labelStyle={{ color: 'white' }}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    padding: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  checkboxLabel: {
    marginLeft: 8,
    color:'black',
    fontSize:16
  },
});

export default Agro;