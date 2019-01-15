import React, { Component } from 'react'
import {
    View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Contacts from 'react-native-contacts';
import { CheckPermission } from '../../Util/CheckPermission';

import SelectMultiple from 'react-native-select-multiple'

export default class ContactInvite extends Component {
    constructor(props){
        super(props)
        CheckPermission()
        this.state = {
            isLoaded:false,
            listContact : [],
            selectedList:[]
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
            console.log(contacts)
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
                    phoneNumber: item.phoneNumbers[0].number
                }
    
                this.list.push(newItem)
            }
            
        });
        

    }

    onSelectionsChange = (selectedList) => {
        console.log(selectedList)
        this.setState({ selectedList })
        console.log(this.state.selectedList.length)
      }

    // renderItem = ({item})=>{
    //     console.log(item.phoneNumbers[0])
    //     if (item.phoneNumbers[0]) return(
    //     <View>
    //         <Text>{item.givenName + ' ' + item.middleName + ' ' + item.familyName }</Text>
    //         <Text>{item.phoneNumbers[0].number}</Text>
    //     </View>
    // )}
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

                </View>

                
            </View>
            <View style={styles.body}>
                <View style={styles.listSelect}>
                    <SelectMultiple
                        items={this.list}
                        selectedItems={this.state.selectedList}
                        onSelectionsChange={this.onSelectionsChange} />
                        {/* <FlatList
                            data = {this.state.listContact}
                            keyExtractor = {(item) => item.toString()}
                            extraData = {this.state}
                            renderItem = {this.renderItem}
                        /> */}
                    </View>
                <TouchableOpacity>
                    <View style = {styles.btnSendInvite}>
                        <Text style= {styles.textBtn}>Invite {this.state.selectedList.length} your Contact</Text>
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
        height:80,
    },
    textBtn:{
        fontSize:20,
        color:'#fff'
    },
    listSelect:{

    }
})