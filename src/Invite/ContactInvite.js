import React, { Component } from 'react'
import {
    View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Contacts from 'react-native-contacts';
import { CheckPermission } from '../../Util/CheckPermission';

import {CheckBox} from 'react-native-elements';
import { SendInvite } from '../../Network/API';

export default class ContactInvite extends Component {
    constructor(props){
        super(props)
        CheckPermission()
        this.state = {
            isLoaded:false,
            listContact : [],
            
        }
    }

    list = []

    componentDidMount() {
        console.log('did mount')
        Contacts.getAll((err, contacts)=>{
            if(err){
                console.log(err)
                throw err
            } 
            console.log(">>>>>>>")
            // console.log(contacts)
            this.setState({
                listContact:contacts,
                isLoaded: true
            })
            this.formatList(this.state.listContact)
        })
    }

    formatList= (oldList) => {
        oldList.forEach(item => {
            if(item.phoneNumbers.length > 0){
                if(item.phoneNumbers[0].number){
                    var name=''
                    if (item.givenName){
                        name += item.givenName
                    }
                    if (item.middleName){
                        name = name+ ' ' + item.middleName
                    }
                    if (item.familyName){
                        name = name +  ' ' + item.familyName
                    }
                }
                var newItem = {
                    name : name,
                    phoneNumber: item.phoneNumbers[0].number,
                    isSelected : false
                }
                this.list.push(newItem)
            }
            
        });
        this.setState({listContact : this.list})

    }

    onInviteAll = ()=> {
        var newList = this.state.listContact
        for (var i = 0; i < newList.length; i++){
                var newItem = {
                    name : newList[i].name,
                    phoneNumber: newList[i].phoneNumber,
                    isSelected: true
                }
                newList[i] = newItem
        }
        this.setState({listContact:newList})
    }

    onSelectionsChange = (item) => {
        var newList = this.state.listContact
        for (var i = 0; i < newList.length; i++){
            
            if(item === newList[i]){
                var newItem = {
                    name : newList[i].name,
                    phoneNumber: newList[i].phoneNumber,
                    isSelected: true
                }
                newList[i] = newItem
                break
            }
        }
        this.setState({listContact:newList})
      }

    renderItem = ({item})=>
      {
          if(item.isSelected){
              var color = 'rgba(255, 0, 0, 0.2)'
          } else var color = 'rgba(0, 138, 230, 0.2)'
        return (
            <TouchableOpacity
                onPress = {()=> this.onSelectionsChange(item)}>
                <View style={{height:50, width:'100%', alignItems:'center',justifyContent:'space-between', padding:5, backgroundColor:color, marginVertical:1, flexDirection:'row'}}>
                    <View>
                        <Text style = {{fontSize:14, color:"#fff"}}>{item.name}</Text>
                        <Text>{item.phoneNumber}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
      }
    
      sendInvite(){
          var inviteList = []
          for (var i = 0; i< this.state.listContact.length; i++){
              if(this.state.listContact[i].isSelected){
                  inviteList.push(this.state.listContact[i])
              }
          }
          SendInvite(inviteList)
          this.props.navigation.goBack()
      }

  render() {
      if(!this.state.isLoaded){
        return(
            <ActivityIndicator size="large" color="#0000ff"/>
        )
      }
    return (
      <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.leftHeader}>
                    <TouchableOpacity 
                        style={styles.leftHeader}
                        onPress={()=> {this.props.navigation.goBack()}}>
                    <Icon
                        name = 'long-arrow-left'
                        color= '#fff'
                        size= {20}
                    />
                </TouchableOpacity>
                </View>
                <View style= {styles.midHeader}>
                    <Text style={styles.titleHeader}>List your contact</Text>
                </View>
                <View style = {styles.rightHeader}>
                    <TouchableOpacity 
                        style = {{height:30, width:50, backgroundColor:"#ff3344", borderRadius:5, justifyContent:'center', alignItems:'center'}}
                        onPress = {()=> this.onInviteAll()}>
                        <Text>All</Text>
                    </TouchableOpacity>
                </View>

                
            </View>
            <View style={styles.body}>
                <View style={styles.listSelect}>
                        <FlatList
                            data = {this.state.listContact}
                            keyExtractor = {(item) => item.name}
                            extraData = {this.state}
                            renderItem = {this.renderItem}
                        />
                    </View>
                <TouchableOpacity style = {styles.btnSendInvite}
                    onPress={()=> this.sendInvite()}>
                    <View >
                        <Text style= {styles.textBtn}>Invite your Contact</Text>
                    </View>
                </TouchableOpacity>
            </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#9999ff',
    },
    header:{
        height:50,
        width:'100%',
        flexDirection: 'row',
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleHeader:{
        fontSize:20,
        
    },
    body:{
        flex:1,
        width:'100%',
        justifyContent:'space-between'
    },
    btnSendInvite:{
        backgroundColor:'#00ff00',
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%',
        height:"15%",
    },
    textBtn:{
        fontSize:20,
        color:'#fff'
    },
    listSelect:{
        height: '85%',
        width:'100%'
    }
})