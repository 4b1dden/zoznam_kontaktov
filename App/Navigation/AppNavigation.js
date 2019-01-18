import { createStackNavigator } from 'react-navigation'
import ContactListScreen from '../Containers/ContactListScreen'
import SingleContactScreen from '../Containers/SingleContactScreen'
import AddContactScreen from '../Containers/AddContactScreen'

const MainNavigator = createStackNavigator({
    ContactListScreen: { screen: ContactListScreen },
    SingleContactScreen: { screen: SingleContactScreen },
    AddContactScreen: { screen: AddContactScreen }
}, {
    initialRouteName: 'ContactListScreen',
    headerMode: 'none',
    defaultNavigationOptions: {
    }
});

export default MainNavigator;
