import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import Icon from 'react-native-vector-icons/FontAwesome'

import Global from '../../Util/Global';
import { OutRoom, SendMessage, GetStateAPI } from '../../Network/API';

export default class WaitRoom extends Component {

  // roomInfo = this.props.navigation.getParam('roomInfo', null)
  
  constructor(props) {
    super(props);
    this.state = {
        messages:[],
        roomInfo: this.props.navigation.getParam('roomInfo', null)
    };
    
  }
  
  onSend(messages = []) {
    SendMessage(messages, this.state.roomInfo, (room) => console.log(room))
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  componentDidMount = () => {
    GetStateAPI((state) => {
      for (key in state){
        if (state[key].roomID === this.state.roomInfo.roomID){
          this.setState({
            roomInfo: state[key]
          })

          var receiverMessage = state[key].messages[state[key].messages.length-1]
          if(receiverMessage[0].user.name != Global.currentUser.userName){
            this.setState(previousState => ({
              messages: GiftedChat.append(previousState.messages, receiverMessage)
            })
              )
          }
          break
        }
      }
    })
    
  };
  
  checkAdminRoom = () => {
    if (Global.currentUser.userName == this.state.roomInfo.rootUser.userName){
      return (
        <TouchableOpacity
          onPress = {()=> this.props.navigation.navigate('War')}>
          <Icon
          name = 'play-circle'
          color = "#fff"
          size = {30}
          style = {styles.iconStyle}
          />
        </TouchableOpacity>
      )
    }
    
  }

  _goBack(){
    if (Global.currentUser.userName != this.state.roomInfo.rootUser.userName){
      OutRoom(Global.currentUser, this.state.roomInfo)
      this.props.navigation.goBack()
    }else {
      alert("Can't get out your room")
    }
  }

  render() {
    return (
    <View style= {{flex:1}}>
      <View style={styles.header}>
                <View style={styles.leftHeader}>
                    <TouchableOpacity 
                        style={styles.leftHeader}
                        onPress={()=> this._goBack()}>
                    <Icon
                        name = 'long-arrow-left'
                        color= '#fff'
                        size= {30}
                    />
                </TouchableOpacity>
                </View>
                <View style= {styles.midHeader}>
                   <Text>{this.state.roomInfo.roomName}</Text>
                    
                </View>
                <View style = {styles.rightHeader}>
                    <Text style={{fontSize:16, color:"#fff", margin:5}}>{this.state.roomInfo.users.length}</Text>
                    <Icon
                      name = "users"
                      color = "#fff"
                      size = {25}
                      style = {styles.iconStyle}
                    />
                    {this.checkAdminRoom()}
                </View>

                
            </View>
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: Global.currentUser.userID,
          name: Global.currentUser.userName,
          avatar: Global.currentUser.userAvatar
        }}
      />
    </View>
      
    )
  }
}
 
const styles = StyleSheet.create({
  header:{
    height:50,
    width:'100%',
    flexDirection: 'row',
    backgroundColor:"#ffb3b3"
  },
  leftHeader:{
      flex:1,
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding:10
  },
  midHeader:{
      flex:2,
      
      justifyContent: 'center',
      alignItems: 'center',
  },
  rightHeader:{
      flex:1,
      flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding:5
  },
  iconStyle:{
    margin:5
  }
})