import React,{Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Header from './src/Header';
import Box from './src/Box';

class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Header />
        <Box />       
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container: {
    flex:1,
  }
 
});

export default App;
