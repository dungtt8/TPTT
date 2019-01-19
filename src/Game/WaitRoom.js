import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import { SendMessage, readMessageData, readUserData } from '../../Network/FirebaseAPI';
import Icon from 'react-native-vector-icons/FontAwesome'

import Global from '../../Util/Global';
import { OutRoom } from '../../Network/API';

export default class WaitRoom extends Component {

  roomInfo = this.props.navigation.getParam('roomInfo', null)
  
  constructor(props) {
    super(props);
    this.state = {
        messages:[]
    };
    
  }
  // componentWillMount() {
  //   this.setState({
  //     messages: [
  //       {
  //         _id: 1,
  //         text: 'Hello developer',
  //         createdAt: new Date(),
  //         user: {
  //           _id: 2,
  //           name: 'React Native',
  //           avatar: 'https://placeimg.com/140/140/any',
  //         },
  //       },
  //     ],
  //   })
  // }

  onSend(messages = []) {
    // console.log(messages)
    SendMessage(messages)
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
    // console.log(this.state.messages)
  }

  componentDidMount = () => {
    readUserData((result) =>{
      
    })
    readMessageData((result)=>{
      // console.log( result)
      for( var key in result){
        // this.setState(prevState => ({
        //   messages: GiftedChat.append(prevState.messages, result[key].messages[0]),
        // }))

        this.setState({
              messages: [
                {
                  _id: 1,
                  text: 'Hello developer',
                  createdAt: new Date(),
                  user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                  },
                },
              ],
            })
      }
      // console.log(this.state.messages)
      return result
    })
    
  };
  
  checkAdminRoom = () => {
    if (Global.currentUser.userName == this.roomInfo.rootUser.userName){
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
    if (Global.currentUser.userName != this.roomInfo.rootUser.userName){
      OutRoom(Global.currentUser, this.roomInfo)
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
                   <Text>{this.roomInfo.roomName}</Text>
                    
                </View>
                <View style = {styles.rightHeader}>
                    <Text style={{fontSize:16, color:"#fff", margin:5}}>{this.roomInfo.users.length}</Text>
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
    backgroundColor:"#9999ff"
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