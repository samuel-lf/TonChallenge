import 'react-native-gesture-handler';

import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import Routes from './routes';
import store from './stores';

const App: React.FC = () => (
  <NavigationContainer>
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <Routes />
      </View>
    </Provider>
  </NavigationContainer>
);

export default App;
