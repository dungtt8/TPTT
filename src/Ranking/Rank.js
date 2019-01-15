import React, { Component } from 'react'
import { 
    View, Text, TouchableOpacity, StyleSheet, FlatList, Image, ActivityIndicator
 } from "react-native";
import {Avatar} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import RankingItem from './RankingItem';

import {GetRanking, GetUserRanking} from '../../Network/API'


export default class Rank extends Component {
    constructor(props){
        super(props)
        this.state={
            isLoaded: false,
            user:{
                
            },
            listPlayer:[
            ]
        }
    }

    componentDidMount(){
        console.log("did mount")
        GetRanking().then(res=>{
            this.setState({listPlayer:res})
            GetUserRanking().then(res =>{
                this.setState({
                    user:res,
                    isLoaded: true
                })
            })
        })
        
    }

    _renderItem = ({item, index})=>{
        // {console.log(index)}

        return(
        <RankingItem
            name = {item.name}
            avatar = {item.avatar}
            score = {item.score}
            index = {index+4}
        />
    )}
  render() {
    if(!this.state.isLoaded){
        return(
            <ActivityIndicator size="large" color="#0000ff"/>
        )
    }
    return (
      <View style={styles.container}>

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
            <TouchableOpacity style = {styles.rightHeader}>
                <Icon
                    name = "exchange"
                    color= '#fff'
                    size = {20}
                />
            </TouchableOpacity>
        </View>

        <View style={styles.TopRank}>

            <View style = {styles.Top3Ranking}>
                <View style={styles.SecondPlayer}>
                    <Avatar
                        medium
                        rounded
                        source={{uri: this.state.listPlayer[1].avatar}}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                    />
                    <Text>{this.state.listPlayer[1].name}</Text>
                    <Text>{this.state.listPlayer[1].score}</Text>
                </View>
                <View style={styles.Second}>
                    <Text>2</Text>
                </View>
            </View>

            <View style = {styles.Top3Ranking}>
                <View style={styles.WinnerPlayer}>
                    <Avatar
                        medium
                        rounded
                        source={{uri: this.state.listPlayer[0].avatar}}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                    />
                    <Text>{this.state.listPlayer[0].name}</Text>
                    <Text>{this.state.listPlayer[0].score}</Text>
                </View>
                <View style={styles.Winner}>
                    <Text>1</Text>
                </View>
            </View>

            <View style = {styles.Top3Ranking}>
                <View style={styles.ThirdPlayer}>
                    <Avatar
                        medium
                        rounded
                        source={{uri: this.state.listPlayer[2].avatar}}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                    />
                    <Text>{this.state.listPlayer[2].name}</Text>
                    <Text>{this.state.listPlayer[2].score}</Text>
                </View>
                <View style={styles.Third}>
                    <Text>3</Text>
                </View>
            </View>
        </View>

        <View style={styles.Top100Ranking}>
            <FlatList
                data={this.state.listPlayer.slice(3, this.state.listPlayer.length)}
                extraData={this.state}
                keyExtractor={(item, index) => item.toString()}
                renderItem={this._renderItem}
            />
        </View>

        <View style={styles.userRanking}>
            <View style={styles.stt}>
                <Text># {this.state.user.index}</Text>
            </View>

            <View style={styles.info}>
                <Avatar
                    small
                    rounded
                    source={{uri: this.state.user.avatar}}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                />
                <Text style={styles.infoName}>{this.state.user.name}</Text>
            </View>

            <View style={styles.score}>
                <Text>{this.state.user.score}</Text>
                <Image
                source={require('../../Media/coin.png')}
                style={styles.iconScore}
            />
            </View>
        </View>
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
    TopRank:{
        flexDirection:'row',
        height:200,
        width:'100%'
    },
    Top3Ranking:{
        flex:1
    },
    Second:{
        flex:2,
        backgroundColor:'#ff4567',
        justifyContent:'center',
        alignItems:'center'
    },
    SecondPlayer:{
        flex:3,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    Winner:{
        flex:3,
        backgroundColor:'#ff0000',
        justifyContent:'center',
        alignItems:'center'
    },
    WinnerPlayer:{
        flex:2,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    Third:{
        flex:1,
        backgroundColor:'#ff4567',
        justifyContent:'center',
        alignItems:'center'
    },
    ThirdPlayer:{
        flex:3,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    Top100Ranking:{
        marginHorizontal:10,
        // height:200,
        width:'100%',
        flex:1
    },
    userRanking:{
        position:'relative',
        flexDirection:"row",
        backgroundColor:'#3333cc',
        padding:5
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
        justifyContent:'center',
        alignItems:"center",
        flexDirection:'row'
    },
    iconScore:{
        height:20,
        width:20,
        margin:5
    }
})