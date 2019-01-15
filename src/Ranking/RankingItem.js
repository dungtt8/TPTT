import React, { Component } from 'react'
import {
    View, Text, StyleSheet, Image
} from 'react-native';

import {Avatar} from 'react-native-elements'

export default class RankingItem extends Component{
    constructor(props){
        super(props)
    }
  render() {
    return (
      <View style={styles.container}>
        {/* {console.log(this.props.name)} */}
        <View style={styles.stt}>
            <Text># {this.props.index}</Text>
        </View>

        <View style={styles.info}>
            <Avatar
                small
                rounded
                source={{uri: this.props.avatar}}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
            />
            <Text style = {styles.infoName}>{this.props.name}</Text>
        </View>

        <View style={styles.score}>
            <Text>{this.props.score}</Text>
            <Image
                source={require('../../Media/coin.png')}
                style={styles.iconScore}
            />
        </View>

      </View>
    )
  }
}
const styles = StyleSheet.create({
    container:{
        height:50,
        width:'100%',
        flexDirection: 'row'
    },
    stt:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    info:{
        flex:3,
        justifyContent:'flex-start',
        alignItems:"center",
        flexDirection:'row'
    },
    infoName:{
        fontSize:14,
        // color:'#fff',
        margin:5
    },
    score:{
        flex:2,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:"center"
    },
    iconScore:{
        height:20,
        width:20,
        margin:5
    }
})