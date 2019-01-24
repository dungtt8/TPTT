import {StyleSheet, View, Text, Image} from 'react-native';
import React, {Component} from 'react';
import { IndicatorViewPager, PagerDotIndicator} from 'rn-viewpager';
 
export default class ViewPager extends Component {

    _renderDotIndicator(){
        return <PagerDotIndicator
            style = {{marginBottom:10,}}
            pageCount = {3}
            dotStyle = {{backgroundColor:'green'}}
        />
    }

    render() {
        return (
                <IndicatorViewPager
                    style={{height:200, width:'100%', position:'absolute'}}
                    indicator={this._renderDotIndicator()}
                >
                    <Image 
                        source = {{uri: 'https://cdn.tgdd.vn/Products/Images/42/142463/Slider/-1--thiet-ke-copy.png'}}
                        style={{width:'100%', height:200,}}>
                    </Image>
                    <Image 
                        source = {{uri: 'http://cdn.shopify.com/s/files/1/1770/4703/articles/iPhone_Xs_Xs_Max_and_Xr_Photography_Features_600x.png?v=1536872780'}}
                        style={{width:'100%', height:200,}}
                        resizeMode='stretch'>
                    </Image>
                    <Image 
                        source = {{uri: 'https://cdn.tgdd.vn/Products/Images/42/142463/Slider/-1--thiet-ke-copy.png'}}
                        style={{width:'100%', height:200,}}>
                    </Image>
                </IndicatorViewPager>
        );
    }
 
   
 
}