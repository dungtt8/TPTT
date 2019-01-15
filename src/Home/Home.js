import React, { Component } from 'react';
import { 
    View, Text, StyleSheet, Image, TouchableOpacity, Alert,
} from 'react-native';
import {Avatar} from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Modal from 'react-native-modal'

import {
    MenuProvider,
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isVisible: false
    };
  }

  onAddFriend(){

  }

  onToPlay(){
    this.setState({
        isVisible:true
    })
  }

  onToNew(){

  }

  onToRank(){
    this.props.navigation.navigate('Ranking')
  }

  onToAccount(){

  }

  componentDidMount() {
    var date = new Date().getDate()    
    console.log(date)
    startTime = new Date(2019, 0, date, 20, 0, 0)
     
    setInterval( () => {
        var time = new Date()
          var timeDiff = Math.abs(startTime - time);
          var diffDays = Math.round(timeDiff / (1000 * 3600 * 24)); 
          var diffHours = Math.round((timeDiff % (1000 * 3600 * 24))/(1000 * 3600))
          var diffMilliseconds = Math.round(((timeDiff % (1000 * 3600 * 24))%(1000 * 3600)) / (1000*60))
          var diffSeconds = Math.round((((timeDiff % (1000 * 3600 * 24))%(1000 * 3600)) % (1000*60)) / (1000))
        //   console.log(diffDays + " " + diffHours + " " + diffMilliseconds + " " + diffSeconds)
        
      
      this.setState({
        days : diffDays,
        hours : diffHours,
        milliseconds: diffMilliseconds,
        seconds: diffSeconds
      })
    },1000)
    
  }

  onToWar(){
    this.setState({
        isVisible:false
    })
    this.props.navigation.navigate('War')
  }

  onToTrain(){
    this.setState({
        isVisible:false
    })
  }

  onToRoom(){
    this.setState({
        isVisible:false
    })
    this.props.navigation.navigate('GoRoom')
  }

  render() {
    return (
        <MenuProvider>
      <View style={styles.container}>
        <View style = {styles.homeHeader}>
            <View style = {styles.leftHeader}>
                <Avatar
                    medium
                    rounded
                    source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                />
                <View>
                    <Text style={styles.userName}>Nguyen Van A</Text>
                    <View style = {styles.rawInfo}>
                        <Text>1500</Text>
                        <Image
                            source={require('../../Media/coin.png')}
                            style={styles.ImageRawInfo}
                        />
                        <Text>100</Text>
                        <Image
                            source={require('../../Media/star.png')}
                            style={styles.ImageRawInfo}
                        />
                        
                    </View>
                </View>
            </View>
            <View style = {styles.rightHeader}>
            <Menu>
                <MenuTrigger text='Invite' customStyles={triggerStyles} />
                <MenuOptions>
                    <MenuOption onSelect={() => console.log("FB...")}>
                        <Text style={{color:'blue'}}>Your Friend FB</Text>
                    </MenuOption>
                    <MenuOption onSelect={() => this.props.navigation.navigate('Contact')}> 
                        <Text style={{color: 'red'}}>Your Phone contact</Text>
                    </MenuOption>
                </MenuOptions>
                </Menu>
                
            </View>
            
        </View>

        <View style={styles.bodyContainer}>
            <Image
                source={require('../../Media/IQBG.jpg')}
                style={styles.backgroundImage}
            />

            <View style={styles.countTime}>
                <View style={styles.boxCounter}>
                    <Text style={styles.timeValue}>{this.state.days}</Text>
                    <Text style={styles.argument}>Ngày</Text>
                </View>
                <View style={styles.boxCounter}>
                    <Text style={styles.timeValue}>{this.state.hours}</Text>
                    <Text style={styles.argument}>Giờ</Text>
                </View>
                <View style={styles.boxCounter}>
                    <Text style={styles.timeValue}>{this.state.milliseconds}</Text>
                    <Text style={styles.argument}>Phút</Text>
                </View>
                <View style={styles.boxCounter}>
                    <Text style={styles.timeValue}>{this.state.seconds}</Text>
                    <Text style={styles.argument}>Giây</Text>
                </View>
            </View>

            <View style={styles.bodyOptionService}>
                <View style={styles.firstRowOptions}>
                    <TouchableOpacity onPress={()=> {this.onToPlay()}}>
                        <View style= {styles.boxOption}>
                            <Ionicons
                                name='ios-play'
                                color='#009900'
                                size={55}
                            />
                            <Text style={styles.argument}>Play</Text>
                        </View>
                    </TouchableOpacity>

                     <TouchableOpacity onPress={()=> {this.onToNew()}}>
                        <View style= {styles.boxOption}>
                            <Ionicons
                                name='md-paper'
                                color='#009900'
                                size={55}
                            />
                            <Text style={styles.argument}>New</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.firstRowOptions}>
                    <TouchableOpacity onPress={()=> {this.onToRank()}}>
                        <View style= {styles.boxOption}>
                            <Ionicons
                                name='ios-stats'
                                color='#009900'
                                size={55}
                            />
                            <Text style={styles.argument}>Rank</Text>
                        </View>
                    </TouchableOpacity>

                     <TouchableOpacity onPress={()=> {this.onToAccount()}}>
                        <View style= {styles.boxOption}>
                            <Ionicons
                                name='ios-person'
                                color='#009900'
                                size={55}
                            />
                            <Text style={styles.argument}>Account</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                
            </View>
        </View>
        <Modal isVisible={this.state.isVisible}
            onBackdropPress={() => this.setState({ isVisible: false })}
            style={styles.modalContainer}
            >
            <TouchableOpacity 
                style={styles.topOption}
                onPress={()=> {this.onToWar()}}>
                <Text style={styles.textOption}>War</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.midOption}
                onPress={()=> {this.onToTrain()}}>
                <Text style={styles.textOption}>Train</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.bottomOption}
                onPress={()=> {this.onToRoom()}}>
                <Text style={styles.textOption}>Room</Text>
            </TouchableOpacity>
        </Modal>
      </View>
      </MenuProvider>
    );
  }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#9999ff',
    },
    homeHeader:{
        width:'100%',
        padding:10,
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    leftHeader:{
        flexDirection:'row',
        alignItems: 'flex-end',
    },
    rightHeader:{
        alignItems:'flex-end',
        margin:10,
    },
    userName:{
        color:'#0066ff',
        fontSize: 16,
        marginLeft:10,
    },
    rawInfo:{
        marginLeft:10,
        flexDirection:'row'
    },
    ImageRawInfo: {
        width:15, 
        height:15, 
        marginHorizontal:5
    },
    bodyContainer:{
        alignItems:'center'
    },
    backgroundImage: {
        height:200,
        width:'100%'
    },
    countTime:{
        width:'90%',
        flexDirection: 'row',
        justifyContent:'center',
        marginTop: -30,
    },
    boxCounter:{
        width:60,
        height:60,
        borderRadius: 5,
        backgroundColor:'#ff9900',
        margin:5,
        justifyContent:'center',
        alignItems:"center"
    },
    timeValue:{
        fontSize:20,
        color:'#fff'
    },
    argument:{
        color:'#fff'
    },
    bodyOptionService:{
        width:'100%'
    },
    firstRowOptions:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'center'
    },
    boxOption:{
        width:120,
        height:120,
        borderRadius:5,
        backgroundColor: '#ff6600',
        justifyContent:'center',
        alignItems:'center',
        marginVertical:10,
        marginHorizontal:20
    },
    modalContainer:{
        justifyContent:'center', 
        shadowRadius:10, 
        height:200, 
        borderRadius:5,
        marginVertical:200,
        marginHorizontal:30,

    },
    topOption:{
        flex:1, 
        backgroundColor:'#0066ff', 
        width:'100%', 
        marginBottom: 1,
        borderTopLeftRadius: 5,
        borderTopRightRadius:5,
        justifyContent:'center',
        alignItems:'center'
    },
    midOption:{
        flex:1, 
        backgroundColor:'#0066ff', 
        width:'100%',
        marginVertical:1,
        justifyContent:'center',
        alignItems:'center'
    },
    bottomOption:{
        flex:1, 
        backgroundColor:'#0066ff', 
        width:'100%',
        marginTop:1,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        justifyContent:'center',
        alignItems:'center'
    },
    textOption:{
        color:'#fff',
        fontSize:20
    }
})

const triggerStyles={
    triggerText: {
        color: 'white',
      },
      triggerWrapper: {
        padding: 5,
        backgroundColor: 'blue',
        borderRadius:5
      },
      triggerTouchable: {
        underlayColor: 'darkblue',
        activeOpacity: 70,
      },
      TriggerTouchableComponent: TouchableOpacity,
}
