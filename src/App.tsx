import React from 'react';
import {  Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from 'react-redux';
import configureStore from 'configureStore';
import { setWindowDimensions } from 'store/actions/device.actions';

import router from './routeComponentMap';

import RouteNames from 'routeNames';

const AppNavigator = createStackNavigator(
  {
    ...router,
  },
  {
    initialRouteName: RouteNames.Welcome.home,
  },
);
const AppContainer = createAppContainer(AppNavigator);
const { store } = configureStore();

class App extends React.PureComponent {
  static handleDimensionsChanges() {
    store.dispatch(setWindowDimensions(Dimensions.get('window')));

    Dimensions.addEventListener('change', ({ window }) => {
      store.dispatch(setWindowDimensions(window));
    });
  }
  async componentDidMount(): Promise<void> {
    App.handleDimensionsChanges();
  }

  componentWillUnmount() {
    //
  }

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;
