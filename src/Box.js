import React,{Component} from 'react';
import {StyleSheet,View, Text} from 'react-native';
 class Box extends Component{
     
     render(){
         return(
            <View style={styles.container}> 
                <View style={styles.box}>
                <View style={styles.inner}>
                    <Text style ={styles.text}>Buy Airtime</Text>
                </View>
                </View>

                <View style={styles.box}>
                <View style={styles.inner}>
                    <Text style ={styles.text}> Withdraw</Text>
                </View>
                </View>

                <View style={styles.box}>
                <View style={styles.inner}>
                    <Text style ={styles.text}>KPLC Tokens</Text>
                </View>
                </View>

                <View style={styles.box}>
                <View style={styles.inner}>
                    <Text style ={styles.text}>Inter Account Transfer</Text>
                </View>
                </View>

                <View style={styles.box}>
                <View style={styles.inner}>
                    <Text style ={styles.text}>Deposit</Text>
                </View>
                </View>

                <View style={styles.box}>
                <View style={styles.inner}>
                    <Text style ={styles.text}>Pesalink</Text>
                </View>
                </View>

                <View style={styles.box}>
                <View style={styles.inner}>
                    <Text style ={styles.text}>Loans</Text>
                </View>
                </View>

                <View style={styles.box}>
                <View style={styles.inner}>
                    <Text style ={styles.text}>Pay Utilities</Text>
                </View>
                </View>


                </View>

         );
     }
 }

 const styles=StyleSheet.create({
     container:{
        width: '100%',
        height:'85%',
        padding: 5,
        flexDirection:'row',
        flexWrap:'wrap'
     },
     box:{
         width:'50%',
         height:'25%',
         padding: 5
     },
     inner : {
         flex:1,
         backgroundColor:'#84bd00',
         alignItems:'center',
         justifyContent:'center'
     },
     text:{
         fontWeight:'bold',
         color:'#fff'
     }

 });

 export default Box;