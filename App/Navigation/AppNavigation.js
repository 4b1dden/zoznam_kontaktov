import { createStackNavigator } from 'react-navigation'
import ContactListScreen from '../Containers/ContactListScreen';


const MainNavigator = createStackNavigator({
    ContactListScreen: { screen: ContactListScreen, title: "aaaa" }
}, {
    initialRouteName: 'ContactListScreen',
    headerMode: 'none',
    defaultNavigationOptions: {
    }
});

export default MainNavigator;
