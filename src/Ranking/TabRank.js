import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

import {createMaterialTopTabNavigator, createAppContainer, createBottomTabNavigator, createTabNavigator} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome';
import Rank from './Rank';
import NavigatorConfig from './NavigatorConfig';


export default class TabRank extends Component {
  render() {
    return (
      <View style = {styles.container}>
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

        <NavigatorConfig/>
      </View>
    )
  }
}

// const RankingStack = createMaterialTopTabNavigator({
//     Total_:{
//         screen: Demo,
//         navigationOptions:{title:'Total'}
//     },
//     Day_: {
//         screen: Demo,
//         navigationOptions: { title: 'Day' }
//     },
//     // Week_: {
//     //     screen: Rank,
//     //     navigationOptions: { title: 'Week' }
//     // },
//     // Month_: {
//     //     screen: Rank,
//     //     navigationOptions: { title: 'Month'}
//     // }
// }, {

//         initialRouteName: 'Total_',
//         // animationEnabled: false,
//         // swipeEnabled: false,
//         // lazyLoad: true,
//         tabBarOptions: {
//             indicatorStyle: {
//                 activeTintColor: 'yellow',
//                 backgroundColor: 'red',
//                 labelStyle: {
//                     fontSize: 30,
//                     color: 'red',
//                     margin: 0,
//                     padding: 0,
//                 },
//             },
//             style: {

//                 width: '100%',
//                 height: 40,
//                 backgroundColor: 'Transparent',
//                 left: 0,
//                 right: 0,

//             }
//         }
//     })

//     console.log(">>>><<<<<<<<<<")
//  export const RootContainer = createAppContainer(RankingStack)

    const styles = StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:'#ffb3b3',
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