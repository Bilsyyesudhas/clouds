// import {StyleSheet, Text, View,TextInput} from 'react-native';
// import React, {useState} from 'react';
// import {Table, Row, Rows} from 'react-native-table-component';
// import {SelectList} from 'react-native-dropdown-select-list';

// const SmartHistory = ({navigation}) => {
//   // Define table data
//   const [selected, setSelected] = React.useState('');
//   const data = [
//     {key: '1', value: '10'},
//     {key: '2', value: '25'},
//     {key: '3', value: '50'},
//     {key: '4', value: '100'},
//   ];

//   const tableHead = ['S.No', 'Phone', 'Requests', 'createdAt'];
//   const tableData = [
//     ['Data 1', 'Data 2', 'Data 3', 'Data 4'],
//     ['Data 4', 'Data 5', 'Data 6', 'Data 4'],
//     ['Data 7', 'Data 8', 'Data 9', 'Data 4'],
//     ['Data 7', 'Data 8', 'Data 9', 'Data 4'],
//   ];
//   const handleSearch = () => {
//     onSearch(searchText); // Pass the search text to the parent component
//   };
//   const [searchText, setSearchText] = useState('');

//   return (
//     <View style={styles.container}>
//       <Text>SmartHistory</Text>
//       <View style={styles.option}>
//         <Text style={styles.texta}>Show</Text>
//         <SelectList
//           setSelected={val => setSelected(val)}
//           data={data}
//           search={false}
//           defaultOption={{key: '1', value: '10'}}
//           save="value"
//           options={{
//             headerShown: false,
//           }}
//         />
//         <Text style={styles.texta}>entries</Text>
           
//       </View>
//       <TextInput
//         style={styles.input}
//         placeholder="Search..."
//         value={searchText}
//         onChangeText={setSearchText}
//         onSubmitEditing={handleSearch}
//       />
//       <View style={styles.view}>
//       <Table borderStyle={styles.table}>
//         <Row data={tableHead} style={styles.head} textStyle={styles.text} />
//         <Rows data={tableData} textStyle={styles.text} />
//       </Table>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     paddingTop: 30,
//     backgroundColor: '#fff',
//   },
//   table: {
//     borderWidth: 1,
//     borderColor: '#c8e1ff',
//   },
//   head: {
//     height: 40,
//     backgroundColor: '#f1f8ff',
//   },
//   view: {
//     marginVertical: 30,
//   },
//   option: {
//     width: '20%',
//     flexDirection: 'row',
//     textAlign: 'center',
//   },

//   texta: {
//     margin: 6,
//     textAlign: 'center',
//     fontSize: 15,
//   },
 
//   text: {
//     margin: 6,
//     textAlign: 'center',
//   },
// });

// export default SmartHistory;
import {StyleSheet, Text, View,TextInput} from 'react-native';
import React, {useState} from 'react';
import {Table, Row, Rows} from 'react-native-table-component';
import {SelectList} from 'react-native-dropdown-select-list';

export default function SmartHistory ({navigation}) {  
  const [selected, setSelected] = React.useState('');
const data = [
  {key: '1', value: '10'},
  {key: '2', value: '25'},
  {key: '3', value: '50'},
  {key: '4', value: '100'},
];

const tableHead = ['Id', 'Catagory', 'Service','Status' ,'Date'];
const tableData = [
  [' 1', 'Data 2', 'Data 3','open','Data'],
  ['2', 'Data 5', 'Data 6', 'open','Data'],
  ['3', 'Data 8', 'Data 9', 'open','Data'],
  ['4', 'Data 8', 'Data 9', 'open','Data'],
];
const handleSearch = () => {
  onSearch(searchText); // Pass the search text to the parent component
};
const [searchText, setSearchText] = useState('');


return (
  <View style={styles.container}>
    <Text style={{fontSize:25,color:"black"}}>Agrosmart requested Table</Text>
    <View style={styles.option}>
      <Text style={styles.texta}>Show</Text>
     
      <SelectList
        setSelected={val => setSelected(val)}
        data={data}
        search={false}
        defaultOption={{key: '1', value: '10'}}
        save="value"
        options={{
          headerShown: false,
        }}
      />
      <Text style={styles.texta}>entries</Text>
         
    </View>
    <View style={{flexDirection:"row",padding:20}}> 
    <Text  style={{color:"black",fontSize:15,padding:5}}>Search:</Text>
    <TextInput
  style={styles.input}
  placeholder="Search..."
  value={searchText}
  onChangeText={setSearchText}
  onSubmitEditing={handleSearch} // Call handleSearch when Enter key is pressed
/>
</View>


    <View style={styles.view}>
    <Table borderStyle={styles.table}>
      <Row data={tableHead} style={styles.head} textStyle={styles.text} />
      <Rows data={tableData} textStyle={styles.text} />
    </Table>
    </View>
  </View>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  padding: 16,
  paddingTop: 30,
  backgroundColor: 'white',
  height: 10,
  width: 390,
  borderRadius: 10,
  elevation: 5,
  marginHorizontal:10,
  marginTop:30
},
table: {
  borderWidth: 1,
  borderColor: 'black',
},
head: {
  height: 40,
  backgroundColor: '#f1f8ff',
},
view: {
  marginVertical: 30,
},
option: {
  width: '20%',
  flexDirection: 'row',
  textAlign: 'center',
  marginTop:30,
marginHorizontal:40,

},

texta: {
  margin: 6,
  textAlign: 'center',
  fontSize: 16,
  color:"black"
},

text: {
  margin: 6,
  textAlign: 'center',
},
input:{

  borderWidth:1,
 height:40,
 width:"80%"
 
}
});







