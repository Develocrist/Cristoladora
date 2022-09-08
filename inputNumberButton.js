
import { Component, useState } from 'react';
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Switch,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class InputNumberButton extends Component{
  render (){
    const {value, handleOnPress} = this.props;

    return(
        <View style={styles.container}>
        <TouchableOpacity style={styles.container}
        onPress={()=> handleOnPress(value)}>
            <Text style={styles.text}>{value}</Text>
        </TouchableOpacity>

        </View>
        
    )
  }

}
const styles = StyleSheet.create({
    container:{
      flex:1,
      margin: 2,
      backgroundColor: '#227093',
      justifyContent:'center',
      alignItems:'center'
    },
    text:{
        color:'white',
        fontSize: 26,

    }
    
  });
  
  
  