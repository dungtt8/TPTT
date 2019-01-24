import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign'

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style= {styles.container}>
            <View style = {styles.icon}><Icon name = 'home' color = '#fff' size={20}/></View>
            <Text style = {styles.name}>{this.props.RoomName}</Text>
            <Text style = {styles.idRoom}>ID: {this.props.RoomID}</Text>
            <Text style = {styles.timeStart}>{this.props.StartTime}</Text>
            <Text style = {styles.member}>Join: {this.props.Member}</Text>
        </View>
    );
  }
}

const styles= StyleSheet.create({
    container:{
        width:'100%',
        height:50,
        marginBottom: 2,
        flexDirection: 'row',
        paddingHorizontal: 10,
        backgroundColor: '#ff80aa',
        alignItems: 'center',
        justifyContent: 'center',
    },
    name:{
        flex:5,
        color:'#fff999',
        fontSize: 16
    },
    idRoom:{
        flex:3
    },
    timeStart:{
        flex:5
    },
    member:{
        flex:2
    },
    icon:{
        flex:1
    }
})