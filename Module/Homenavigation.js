import { StyleSheet, Text, View } from 'react-native'
import React ,{useEffect,useState}from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Sandbox } from './sandbox';
import Loginpage from './Loginpage';
import Service from './Service';
import Painting from './painiting';
import Homecleaning from './Stack/Homecleaning';
import Electrician from './Stack/Electrician';
import Tv from "./Stack/Tv";
import Cctv from './Stack/Cctv';
import Inverter from './Stack/Inverter';
import Laundry from './Stack/Laundry';
import Eventmanagement from './Stack/Eventmanagement';
import Beautyparlour from './Stack/Beautyparlour';
import Tailoring from './Stack/Tailoring';
import Automobile from './Stack/Automobile';
import Interior from './Stack/Interior';
import Installation from './Stack/Installation';
import Toolservice from './Stack/Toolservice';
import Pickers from './Stack/Pickers';
import Itservices from './Stack/Itservices';
import { Servicerequest } from './Servicerequest';
import auth from '@react-native-firebase/auth'
import LoginScreen from './LoginScreen';
import * as firebase from '@react-native-firebase/app' 
// import Sliderstack from './Sliderstack';
export default function Homenavigation() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);
  const firebaseConfig = {
    apiKey: "AIzaSyCP9wScWAuwmbServMyZ970yhiGPcyPKws",
    authDomain: "todoapp-eeeb7.firebaseapp.com",
    projectId: "capecloud-b64b1",
    storageBucket: "gs://capecloud-b64b1.appspot.com/",
    messagingSenderId: "715067470333",
    appId: "1:715067470333:android:ca0688ebc76e3d0aeb2994"
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => {
      setUser(user);
      if (initializing) {
        setInitializing(false);
      }
    });

return subscriber;  
  }, []);
  try {
    firebase.initializeApp(firebaseConfig);
  } catch (error) {
  }

  if (initializing) {
    return null; 
  }
 
  const Stack=createStackNavigator()
  return (
    <NavigationContainer>
       <Stack.Navigator>
       
             {user ? (
                <>
                  <Stack.Screen name="Home" component={Sandbox} options={{
        headerShown:(false),
          
          }} /> 
           <Stack.Screen name="Service" component={Service} />
        <Stack.Screen name="painting" component={Painting} />
        <Stack.Screen name="Homecleaning" component={Homecleaning}/>
        <Stack.Screen name="Electrician" component={Electrician}/>
        <Stack.Screen name="Tv" component={Tv}/>
        <Stack.Screen name="Cctv" component={Cctv}/>
        <Stack.Screen name="Inverter" component={Inverter}/>
        <Stack.Screen name="Laundry" component={Laundry}/>
        <Stack.Screen name="Eventmanagement" component={Eventmanagement}/>
        <Stack.Screen name="Beautyparlour" component={Beautyparlour}/>
        <Stack.Screen name="Tailoring" component={Tailoring}/>
        <Stack.Screen name="Automobile" component={Automobile}/>
        <Stack.Screen name="Interior" component={Interior}/>
        <Stack.Screen name="Installation" component={Installation}/>
        <Stack.Screen name="Toolservice" component={Toolservice}/>
        <Stack.Screen name="PackersandMovers" component={Pickers}/>
        <Stack.Screen name="ITservices" component={Itservices}/>
        <Stack.Screen name="Servicerequest" component={Servicerequest}/>
        {/* <Stack.Screen name="Sliderstack" component={Sliderstack}
        options={{headerShown:(false),}}/> */}
                </>
              ) : (
                <>
                   <Stack.Screen name="login" component={LoginScreen}/>
                  
                  
                </>
              )}
      
              
      
              

        
        </Stack.Navigator> 
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})