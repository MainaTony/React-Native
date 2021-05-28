import React,{Component} from 'react';
import {StyleSheet,View, Text} from 'react-native';
 class Header extends Component{
     
     render(){
         return(
            <View style={styles.header}> 
                <Text> KCB GROUP </Text>
                </View>

         );
     }
 }

 const styles=StyleSheet.create({
     header:{
         width:'100%',
         height:'15%',
         alignItems:'center',
         justifyContent:'center',
         backgroundColor:'#84bd00'
     }

 });

 export default Header;