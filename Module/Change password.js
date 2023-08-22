import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import React from 'react';


const Changepassword = ({handlepasswordok}) => {
  const handleFormSubmit = values => {
    // Handle form submission logic here
    console.log(values);
    handlepasswordok();
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      
        margin: '20px',
      }}>
      <View style={{backgroundColor: 'white', padding: 20}}>
        <Formik
          initialValues={{
            currentpassword: '',
            newpassword: '',
            confirmnewpassword: '',
           
          }}
          onSubmit={handleFormSubmit}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={styles.container}>
              <Text style={styles.label}> Current Password:</Text>
              <TextInput
                onChangeText={handleChange(' currentpassword')}
                value={values.currentpassword}
                placeholder="current password"
                style={styles.box}
              />

              <Text style={styles.label}>New Password:</Text>
              <TextInput
                onChangeText={handleChange('newpassword')}
                value={values.newpassword}
                placeholder="Enter your new password"
                style={styles.box}
              />
              <Text style={styles.label}>Confirm New Password:</Text>
              <TextInput
                onChangeText={handleChange('confirmnewpassword')}
                value={values.confirmnewpassword}
                placeholder="Enter your confirm new password"
                style={styles.box}
              />
              {/* add mode fields */}
              <View style={styles.buttonContainer}>
                <Button onPress={handleSubmit} title="Submit" />
              </View>
              
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  container: {
    // paddingHorizontal: 0,
    
    // paddingVertical: 20,
    width:'100%',
    padding:40,
    backgroundColor: '#eee',
  },
  box: {
    // borderWidth: 1,
    // borderColor: '#ccc',
    // width: '100%',
    // height: 60,
    
    // fontSize: 14,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    fontSize: 14,
    width:'auto',
    textAlign: 'left', 
    
    
   
  },
 
  buttonContainer: {
    width: '100%',

    paddingVertical: 10,
    textAlign:"right"
  },

});
export default Changepassword;
