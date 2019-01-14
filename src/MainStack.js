import {createStackNavigator, createAppContainer} from 'react-navigation'
import LoginScreen from './Provisioning/LoginScreen';
import Home from './Home/Home';
import War from './Game/War'


import {YellowBox} from 'react-native';
import Rank from './Ranking/Rank';
YellowBox.ignoreWarnings(['Warning: ReactNative.createElement']);

const  MainStack = createStackNavigator({
    Login:{
        screen:LoginScreen,
    },
    Home:{
        screen:Home
    },
    Ranking:{
        screen: Rank
    },
    War: {
        screen:War
    }

},{
    headerMode: "none"
})

const App = createAppContainer(MainStack);

export default App;