import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import React from 'react';


const EditProfile = ({handleOk}) => {
  const handleFormSubmit = values => {
    // Handle form submission logic here
    console.log(values);
    handleOk();
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: '20px',
      }}>
      <View style={{backgroundColor: 'white', padding: 20}}>
        <Formik
          initialValues={{
            username: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            state: '',
            district: '',
            pincode: '',
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
              <Text style={styles.label}>Username:</Text>
              <TextInput
                onChangeText={handleChange('username')}
                value={values.username}
                placeholder="Username"
                style={styles.box}
              />

              <Text style={styles.label}>Email:</Text>
              <TextInput
                onChangeText={handleChange('email')}
                value={values.email}
                placeholder="Enter your email"
                style={styles.box}
              />
              <Text style={styles.label}>Phone:</Text>
              <TextInput
                onChangeText={handleChange('email')}
                value={values.email}
                placeholder="Enter your Phone number"
                style={styles.box}
              />
              <Text style={styles.label}>Address:</Text>
              <TextInput
                onChangeText={handleChange('email')}
                value={values.email}
                placeholder="Enter your Address"
                multiline={true}
                style={styles.textarea}
              />
              <Text style={styles.label}>City:</Text>
              <TextInput
                onChangeText={handleChange('email')}
                value={values.email}
                placeholder="City"
                style={styles.box}
              />
              <Text style={styles.label}>State:</Text>
              <TextInput
                onChangeText={handleChange('email')}
                value={values.State}
                placeholder="State"
                style={styles.box}
              />
              <Text style={styles.label}>District:</Text>
              <TextInput
                onChangeText={handleChange('email')}
                value={values.District}
                placeholder="District"
                style={styles.box}
              />
              <Text style={styles.label}>Pin Code:</Text>
              
                <TextInput
                  onChangeText={handleChange('email')}
                  value={values.PinCode}
                  placeholder="Pin Code"
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
  textarea: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    fontSize: 14,
    height: 60, // Adjust the height as needed
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },

});
export default EditProfile;
