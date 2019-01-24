import {createStackNavigator, createAppContainer} from 'react-navigation'
import LoginScreen from './Provisioning/LoginScreen';
import Home from './Home/Home';
import War from './Game/War'


import {YellowBox} from 'react-native';
import Rank from './Ranking/Rank';
import ContactInvite from './Invite/ContactInvite';
import InitRoom from './Game/InitRoom';
import WaitRoom from './Game/WaitRoom';
import Change from './ChangeReward/Change';
import TabRank from './Ranking/TabRank';
import ViewPager from './ChangeReward/ViewPager';
import AccountManager from './Account/AccountManager';
YellowBox.ignoreWarnings(['Warning: ReactNative.createElement']);

const  MainStack = createStackNavigator({
    Login:{
        screen:LoginScreen,
    },
    Home:{
        screen:Home,
    },
    Ranking:{
        screen: TabRank,
    },
    War: {
        screen:War,
    },
    Contact:{
        screen: ContactInvite,
    },
    GoRoom:{
        screen:InitRoom,
    },
    WaitRoom:{
        screen:WaitRoom,
    },
    Change: {
        screen:Change
    },
    view:{
        screen: ViewPager
    },
    Account:{
        screen:AccountManager
    }

},{
    headerMode: "none"
})

MainStack.navigationOptions = ({navigation}) =>{
    let headerMode = "float"
    console.log(navigation)
    return headerMode   
}

const App = createAppContainer(MainStack);

export default App;