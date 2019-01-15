import React, { Component } from 'react';
import { 
    View, Text, StyleSheet, TouchableOpacity, TextInput, ActivityIndicator, FlatList, KeyboardAvoidingView
} from 'react-native';

import _ from 'lodash';
import Icon from 'react-native-vector-icons/FontAwesome'

import {GetRoom, JoinRoom} from '../../Network/API'
import ItemRoom from './FlatListItem/ItemRoom';
import Modal from 'react-native-modal';

export default class InitRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoaded:false,
        listRoom:[],
        listFullRoom:[]
    };
  }

  componentDidMount(){
      GetRoom().then(res=>{
          this.setState({
              listRoom:res,
              listFullRoom:res,
              isLoaded: true,
              query:'',
              isVisible:false,
              isVisible2:false,
              password:'',
              GoID:''
          })
      })
  }

  _renderItem = ({item}) =>(
      <TouchableOpacity onPress={()=> this.goItemRoom({item})}>
            <ItemRoom
                RoomName = {item.RoomName}
                RoomID = {item.RoomID}
                CreateTime = {item.CreateTime}
                Member = {item.Member}
            />
      </TouchableOpacity>
      
  )

  goItemRoom({item}){
      console.log(item.RoomID)
      this.setState({
        GoID:item.RoomID,  
        isVisible:true})
  }

  _joinRoom(){
      this.setState({isVisible:false,
    isLoaded:false})
    console.log(this.state.GoID, this.state.password)
    JoinRoom(this.state.GoID, this.state.password).then(res =>{
        this.setState({isLoaded:true})
    })
  }

  handleInput(searchInput){
      const list = _.filter(this.state.listFullRoom, room => {
          if (room.RoomID.includes(searchInput) || room.RoomName.includes(searchInput)){
              return true
          }else return false
      })
      this.setState({
          listRoom:list,
          query:searchInput
      })
  }

  render() {
      if(!this.state.isLoaded){
          return(
             <ActivityIndicator size = "large" color = "#fff333" />
          )
      }
    return (
      <View style = {styles.container}>
            <View style={styles.header}>
                <View style={styles.leftHeader}>
                    <TouchableOpacity 
                        style={styles.leftHeader}
                        onPress={()=> {this.props.navigation.goBack()}}>
                    <Icon
                        name = 'long-arrow-left'
                        color= '#fff'
                        size= {30}
                    />
                </TouchableOpacity>
                </View>
                <View style= {styles.midHeader}>
                    <View style={styles.searchBar}>
                        <TextInput
                            onChangeText={(searchInput) => this.handleInput(searchInput)}
                            value = {this.state.searchInput}
                            placeholder = "Type your Room's ID"
                            style = {styles.textInput}
                        />
                        <TouchableOpacity>
                        <Icon
                            name = 'search'
                            color = 'grey'
                            size = {20}
                        />
                        </TouchableOpacity>
                    </View>
                    
                </View>
                <View style = {styles.rightHeader}>
                    
                </View>

                
            </View>

            <View style={styles.RoomList}>
                <FlatList
                    data = {this.state.listRoom}
                    keyExtractor = {(item) => item.RoomID}
                    extraData = {this.state}
                    renderItem = {this._renderItem}
                />
                <TouchableOpacity style={styles.createRoomBtn}
                    onPress={()=> this.setState({isVisible2:true})}>
                    <Text>Create Room</Text>
                </TouchableOpacity>
            </View>
            <KeyboardAvoidingView>
            <Modal isVisible={this.state.isVisible}
                onBackdropPress={() => this.setState({ isVisible: false })}
                style={styles.modalContainer}
                >
                <View style = {styles.topModal}>
                    <TextInput
                        onChangeText={(password)=> this.setState({password})}
                        value = {this.state.password}
                        secureTextEntry = {true}
                        placeholder = "Room password"
                        style = {styles.textPasswordInput}
                    />
                </View>
                <View style = {styles.bottomModal}>
                    <TouchableOpacity style= {styles.confirmBtn}
                        onPress={()=> this._joinRoom()}>
                        <Text>Join</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <Modal
                isVisible = {this.state.isVisible2}
                onBackdropPress={() => this.setState({ isVisible2: false })}
                style={styles.modalContainer}
                >
                <Text>Create Room</Text>

            </Modal>
            </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#9999ff',
        alignItems:'center',
    },
    header:{
        height:50,
        width:'100%',
        flexDirection: 'row',
        marginVertical: 15,
    },
    leftHeader:{
        flex:1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding:10
    },
    midHeader:{
        flex:5,
        
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightHeader:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchBar:{
        width:'100%',
        backgroundColor:'#fff9',
        height:40,
        borderRadius:25,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        paddingHorizontal: 10 ,
    },
    textInput:{
        width:'90%'
    },
    RoomList:{
        width:'100%',
        flex:1,
        justifyContent:'space-between'
    },
    createRoomBtn:{
        width:'100%',
        height:80,
        backgroundColor:'#00cc99',
        justifyContent:'center',
        alignItems:'center'
    },
    modalContainer:{
        justifyContent:'center', 
        shadowRadius:10, 
        height:200,
        width:'70%',
        borderRadius:5,
        marginVertical:150,
        marginHorizontal:'15%',
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        position: 'absolute',

    },
    topModal:{
        flex:3,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    bottomModal:{
        flex:2,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    textPasswordInput:{
        borderColor:'grey',
        borderWidth: 1,
        width:'80%',
        borderRadius:5
    },
    confirmBtn:{
        width: 100,
        height:50,
        backgroundColor: 'green',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    }
})