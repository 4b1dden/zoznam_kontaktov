import { createStackNavigator } from 'react-navigation'
import ContactListScreen from '../Containers/ContactListScreen'
import SingleContactScreen from '../Containers/SingleContactScreen'

const MainNavigator = createStackNavigator({
    ContactListScreen: { screen: ContactListScreen },
    SingleContactScreen: { screen: SingleContactScreen }
}, {
    initialRouteName: 'ContactListScreen',
    headerMode: 'none',
    defaultNavigationOptions: {
    }
});

export default MainNavigator;
