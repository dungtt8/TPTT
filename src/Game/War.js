import React, { Component } from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity, ActivityIndicator} from 'react-native';
import {Avatar} from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons'
import TimerCountdown from 'react-native-timer-countdown';
import {GetQuestion, SendAnswer, RegisterGame} from '../../Network/API'
import Modal from 'react-native-modal'

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isGameStart:false,
        isVisible:false,
        isGameOver: false,
        score:0,
        stt:0,
        question:'',
        answerA:'',
        answerB:'',
        answerC: 'Dung cuoc choi'
    };
  }

  componentDidMount(){
      RegisterGame("1232123").then(res => {
          this.setState({isGameStart:true})
        GetQuestion().then(res=>{
            this.setState({
                score: parseInt(res.score),
                stt: parseInt(res.stt),
                question:res.question,
                answerA:res.a,
                answerB: res.b 
            })
        })
      })
      

    
  }
  componentWillUnmount(){
      this.setState({
          isVisible:false
      })
  }

  onSendAnswer(answer){
    SendAnswer("1123123", answer)
    .then(res => {
        if (typeof res.question != "undefined" ){
            this.setState({
                score: parseInt(res.score),
                stt: parseInt(res.stt),
                isVisible:true,
                question:res.question,
                answerA:res.a,
                answerB: res.b 
            })
            console.log(this.state.isVisible)
        }else{
            console.log("Game over")
            this.setState({
                isGameOver:true
            })
        }
    })
  }

  onViewRank(){

  }

  onToHome(){
      this.props.navigation.navigate('Home')
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator
            hidesWhenStopped={!this.props.isGameStart}
        />
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
                <Text style= {styles.gameTextInfo}>55</Text>
                <Ionicons
                    name='ios-heart-empty'
                    color= '#fff'
                    size = {20}
                />
            </View>
            
        </View>

        <View style = {styles.questionContainer}>
            <View style = {styles.gameInfo}>
                <View style = {styles.gameInfoHeader}>
                    <Text style= {styles.gameTextInfo}>{this.state.score}</Text>
                </View>
                <View style = {styles.gameInfoHeader}>
                    <Text style= {styles.gameTextInfo}>{this.state.stt}/10</Text>
                </View>
                <View style = {styles.gameInfoHeader}>
                    <TimerCountdown
                        initialSecondsRemaining={1000*59}
                        // onTick={secondsRemaining => console.log('tick', secondsRemaining)}
                        onTimeElapsed={() => {this.onSendAnswer(this.state.answerC)}}
                        allowFontScaling={true}
                        style={styles.gameTextInfo}
                    />
                </View>
            </View>
            <View style={styles.question}>
                <Text>{this.state.question}</Text>
            </View>
        </View>
       
        
        <TouchableOpacity 
            style={styles.answerContainer}
            onPress={() => {this.onSendAnswer(this.state.answerA)}}>
            <View>
                <Text>A. {this.state.answerA}</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity 
            style={styles.answerContainer}
            onPress={() => {this.onSendAnswer(this.state.answerB)}}>
            <View>
                <Text>B. {this.state.answerB}</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity 
            style={styles.answerContainer}
            onPress={() => {this.onSendAnswer(this.state.answerC)}}>
            <View>
                <Text>C. Dừng cuộc chơi</Text>
            </View>
        </TouchableOpacity>
        <Modal isVisible={this.state.isVisible}
            style = {styles.modalStyle}
            onBackdropPress={() => this.setState({ isVisible: false })}>
            <Text>Chuc mung ban da tra loi dung</Text>
            <Text>So diem cua ban hien tai la: {this.state.score}</Text>
            
        </Modal>

        <Modal isVisible= {this.state.isGameOver}
            style = {styles.modalStyle2}
            onBackdropPress={() => this.setState({ isGameOver: false })}>
            <Text>Chuc mung ban da hoan thanh phan choi</Text>
            <Text>So diem tich luy duoc la: {this.state.score}</Text>
            <TouchableOpacity 
                onPress={()=> {this.onViewRank()}}
                style = {styles.modalButton}>
                <View>
                    <Text>Xem xếp hạng</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={()=> {this.onToHome()}}
                style = {styles.modalButton}>
                <View>
                    <Text>Quay lại trang chủ</Text>
                </View>
            </TouchableOpacity>
        </Modal>
      </View>
    );
  }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#9999ff',
        alignItems:'center'
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
        justifyContent:'flex-end',
        margin:10,
        flexDirection:'row'
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
    gameInfo:{
        width:'100%',
        height:'20%',
        backgroundColor:'#cccccc',
        borderRadius:5,
        flexDirection:'row'
    },
    gameTextInfo:{
        fontSize:20,
        color:'#fff',
        margin:5
    },
    questionContainer:{
        height:250,
        width:"90%",
        borderRadius: 5,
        backgroundColor:'#fff',
        alignItems:'center',
        margin:20
    },
    question:{
        height:'80%',
        width:'100%',
        justifyContent:'center',
        alignItems:"center"
    },
    gameInfoHeader:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    answerContainer:{
        height:50,
        width:'90%',
        backgroundColor:'#fff',
        borderRadius:5, 
        justifyContent:'center',
        margin:10,
        padding:10
    },
    modalStyle:{
        justifyContent: 'center',
        alignItems:'center',
        marginVertical:200,
        marginHorizontal:50,
        backgroundColor: '#fff',
        borderRadius:5
    },
    modalStyle2:{
        justifyContent: 'center',
        alignItems:'center',
        marginVertical:200,
        marginHorizontal:50,
        backgroundColor: '#fff',
        borderRadius:5
    },
    modalButton:{
        height:50,
        width: '80%',
        backgroundColor:'#ff4d4d',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        marginTop:20
    }
}
)