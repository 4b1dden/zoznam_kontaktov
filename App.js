import React from 'react';
import Expo, {Font} from 'expo';
import { createAppContainer } from "react-navigation";
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store, persistor } from './App/Redux/store'
import AppNavigator from './App/Navigation/AppNavigation';

const AppContainer = createAppContainer(AppNavigator);
store.dispatch({type:"FETCH_ORDERS_REQUEST"});

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontsAreLoading: true
    }
  }

  async componentWillMount() {
    await Font.loadAsync({
      "Material Icons": require('@expo/vector-icons/fonts/MaterialIcons.ttf')
    })
    this.setState({
      fontsAreLoading: false
    })
  }

  render() {
    if (!this.state.fontsAreLoading) {
      return (
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <AppContainer />
          </PersistGate>
        </Provider>
      );
    }
    else return <Expo.AppLoading />;
  }
}