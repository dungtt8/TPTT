import React, {Component} from 'react';
import { 
    View, Text, TouchableOpacity, StyleSheet, TextInput
 } from 'react-native';

 import {SigIn} from '../../Network/API';
import Global from '../../Util/Global';


export default class LoginScreen extends Component {
    constructor(props){
        super(props)
        // Global.currentUser = "DungTT"
    }
    state = { 
        phone:'',
        password:''
     }

     Login(){
         SigIn(this.state.phone, this.state.password)
         .then(res =>{
            //  console.log(res)
             Global.currentUser = res
            //  console.log(currentUser)
            this.props.navigation.navigate('Home')
         })
        
     }

     onRegister(){

     }

     onResetPassword(){

     }

    render() {
        return (
            <View style = {styles.container}>
                <View style = {styles.childContainer}/>
                <View style = {styles.childContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Phone number"
                        onChangeText={(phone)=> this.setState({phone})}
                        value = {this.state.phone}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Your Password"
                        onChangeText={(password)=> this.setState({password})}
                        value = {this.state.password}
                        secureTextEntry={true}
                    />

                    <TouchableOpacity 
                        style={styles.loginBtn}
                        onPress={()=> {this.Login()}}>
                        <View>
                            <Text style = {styles.textInBtn}>Đăng nhập</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.extendsOptions}>
                        <TouchableOpacity onPress={()=> {this.onRegister()}}>
                            <Text style={styles.textOptions}>Đăng ký</Text>
                        </TouchableOpacity>

                        <Text style={styles.textOptions}>|</Text>

                        <TouchableOpacity onPress={()=> {this.onResetPassword()}}>
                            <Text style={styles.textOptions}>Quên mật khẩu</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'pink',
    },
    input:{
        height:45,
        width: '80%',
        backgroundColor:'#fff',
        borderRadius: 20,
        marginTop:10,
    },
    childContainer:{
        flex:1,
        alignItems: 'center',
    },
    loginBtn:{
        height:45,
        width:"80%",
        backgroundColor:'#ff3456',
        borderRadius:20,
        justifyContent: 'center',
        alignItems:'center',
        marginTop:10
    },
    textInBtn:{
        color:"#fff"
    },
    extendsOptions:{
        width:'80%',
        flexDirection:'row',
        justifyContent:'center',
    },
    textOptions:{
        color:'#0066ff',
        margin:10
    }
})