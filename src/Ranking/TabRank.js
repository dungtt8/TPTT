import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'


import Icon from 'react-native-vector-icons/FontAwesome';
import { RootContainer } from './NavigatorConfig';


export default class TabRank extends Component {
  render() {
    return (
      <View>
        <View style={styles.header}>
            <TouchableOpacity style={styles.leftHeader}
                onPress={()=> {this.props.navigation.goBack()}}>
                <Icon
                    name = 'long-arrow-left'
                    color= '#fff'
                    size= {20}
                />
            </TouchableOpacity>
            <View style={styles.midHeader}>
                <Text style = {styles.titleHeader}>Bảng xếp hạng</Text>
            </View>
            <TouchableOpacity style = {styles.rightHeader}
                onPress = {()=> this.props.navigation.navigate('Change')}>
                <Icon
                    name = "exchange"
                    color= '#fff'
                    size = {20}
                />
            </TouchableOpacity>
        </View>

        <RootContainer/>
      </View>
    )
  }
}

    const styles = StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:'#9999ff',
            alignItems:'center'
        },
        header:{
            height:50,
            width:'90%',
            margin: 10,
            flexDirection: 'row',
        },
        leftHeader:{
            flex:1,
            alignItems:'flex-start',
            justifyContent:'center',
        },
        midHeader:{
            flex:3,
            justifyContent: 'center',
            alignItems: 'center',
    
        },
        rightHeader:{
            flex:1,
            alignItems:'flex-end',
            justifyContent:'center'
        },
        titleHeader:{
            fontSize:20,
    
        },
    })