import React, { Component } from 'react';
import { 
    View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'
export default class Change extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  _onChange(type){
    switch(type){
        case "Day":{
            break
        }
        case "Week": {
            break
        }
        case "Month":{
            break
        }
        case "Special":{
            break
        }
    }
  }

  render() {
    return (
      <ImageBackground
        source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZXVlm_b5LjIXmHQtS5wFwrachkfgdpyuNRT2kugx-El4CUiOneA"}}
        style = {{flex:1}}>
            <View style={styles.header}>
                <View style={styles.leftHeader}>
                    <TouchableOpacity 
                        style={styles.leftHeader}
                        onPress = {() => this.props.navigation.goBack()}>
                    <Icon
                        name = 'long-arrow-left'
                        color= '#fff'
                        size= {30}
                    />
                </TouchableOpacity>
                </View>
                <View style= {styles.midHeader}>
                   <Text>Change Reward</Text>
                    
                </View>
                <View style = {styles.rightHeader}>
                    
                </View>

                
            </View>
            <TouchableOpacity style={styles.topChange}
                onPress= {()=> this._onChange("Day")}>
                <View style = {styles.topDay}>
                    <Image
                        source={require('../../Media/monney.png')}
                        style={{flex:1, height:'80%'}}
                        resizeMode = "center"
                    />
                    <View style = {{flex:2, height:'80%', alignItems:'center', justifyContent:'center'}}>
                        <Text style={{color:'#fff', fontSize:20}}>20 Giải nhất ngày trị giá 100.000đ</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.topChange}
                onPress= {()=> this._onChange("Week")}>
                <View style = {styles.topWeek}>
                    <Image
                        source={require('../../Media/manyMonney.png')}
                        style={{flex:1, height:'80%'}}
                        resizeMode = "center"
                    />
                    <View style = {{flex:2, height:'80%', alignItems:'center', justifyContent:'center'}}>
                        <Text style={{color:'#fff', fontSize:20}}>10 Giải nhất tuần trị giá 500.000đ</Text>
                    </View>
                </View>
            </TouchableOpacity>

            {/* <TouchableOpacity style={styles.topChange}
                onPress= {()=> this._onChange("Day")}>
                <View style = {styles.secondMonth}>
                    <Image
                        source={require('../../Media/verymuchMonney.png')}
                        style={{flex:1, height:'80%', width:'80%'}}
                        resizeMode = "center"
                    />
                    <View style = {{flex:2, height:'80%', alignItems:'center', justifyContent:'center'}}>
                        <Text style={{color:'#fff', fontSize:20}}>3 Giải nhì tháng trị giá 1.000.000đ</Text>
                    </View>
                </View>
            </TouchableOpacity> */}

            <TouchableOpacity style={styles.topChange}
                onPress= {()=> this._onChange("Month")}>
                <View style = {styles.topMonth}>
                    <Image
                        source={require('../../Media//samsung-galaxy-a8-black.png')}
                        style={{flex:1, height:'80%'}}
                        resizeMode = "center"
                    />
                    <View style = {{flex:2, height:'80%', alignItems:'center', justifyContent:'center'}}>
                        <Text style={{color:'#fff', fontSize:20}}>- 2 Giải nhất Tháng 1 Điện thoại Samsung A8</Text>
                        <Text style = {{color:"#fff", fontSize:18}}>- 3 Giải nhì tháng trị giá 1.000.000đ</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.topChange}
                onPress= {()=> this._onChange("Special")}>
                <View style = {styles.special}>
                    <Image
                        source={require('../../Media/iphone_xs_spacegray_sku_header.png')}
                        style={{flex:1, height:'80%'}}
                        resizeMode = "center"
                    />
                    <View style = {{flex:2, height:'80%', alignItems:'center', justifyContent:'center'}}>
                        <Text style={{color:'#fff', fontSize:20}}>1 Giải đặc biệt 1 điện thoại Iphone XsMax</Text>
                    </View>
                </View>
            </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    header:{
        height:80,
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
      topChange:{
          width:'100%',
          padding:8
      },
      topDay:{
        width:'100%',
        height:100,
        backgroundColor:'#ff5500',
        borderRadius: 10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
      },
      topWeek:{
        width:'100%',
        height:100,
        backgroundColor:'#66ff33',
        borderRadius: 10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
      },
      topMonth:{
        width:'100%',
        height:100,
        backgroundColor:'#0099ff',
        borderRadius: 10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
      },
      secondMonth:{
        width:'100%',
        height:100,
        backgroundColor:'#ff00ff',
        borderRadius: 10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
      },
      special:{
        width:'100%',
        height:100,
        backgroundColor:'red',
        borderRadius: 10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
      },

})