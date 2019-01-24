import {createMaterialTopTabNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation'
import Rank from './Rank';
const RankingStack = createBottomTabNavigator({
    Total_:{
        screen: Rank,
        navigationOptions:{title:'Total'}
    },
    Day_: {
        screen: Rank,
        navigationOptions: { title: 'Day' }

    },
    Week_: {
        screen: Rank,
        navigationOptions: { title: 'Week' }
    },
    Month_: {
        screen: Rank,
        navigationOptions: { title: 'Month'}
    }
}, {

        initialRouteName: 'Total_',
        animationEnabled: false,
        swipeEnabled: true,
        lazyLoad: true,
        tabBarOptions: {
            activeTintColor:'green',
            labelStyle:{
                fontSize:16
            },
            style: {
                width: '100%',
                height: 40,
                backgroundColor: 'Transparent',
                left: 0,
                right: 0,

            }
        }
    })

    

    console.log(">>>><<<<<<<<<<")
 export default createAppContainer(RankingStack)