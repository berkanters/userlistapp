import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './src/store/index';
import { Provider } from 'react-redux';
import StackScreen from './src/navigation/RootNavigator/stackScreen';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackScreen />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
