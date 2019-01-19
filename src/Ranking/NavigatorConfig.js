import {createMaterialTopTabNavigator, createAppContainer} from 'react-navigation'
import Rank from './Rank';
import Demo from './Demo';
const RankingStack = createMaterialTopTabNavigator({
    Total_:{
        screen: Rank,
        navigationOptions:{title:'Total'}
    },
    // Day_: {
    //     screen: Demo,
    //     navigationOptions: { title: 'Day' }

    // },
    // Week_: {
    //     screen: Rank,
    //     navigationOptions: { title: 'Week' }
    // },
    // Month_: {
    //     screen: Rank,
    //     navigationOptions: { title: 'Month'}
    // }
}, {

        initialRouteName: 'Total_',
        animationEnabled: false,
        swipeEnabled: false,
        lazyLoad: true,
        tabBarOptions: {
            indicatorStyle: {
                activeTintColor: 'yellow',
                backgroundColor: 'transparent',
                labelStyle: {
                    fontSize: 30,
                    color: 'red',
                    margin: 0,
                    padding: 0,
                },
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
 export const RootContainer = createAppContainer(RankingStack)