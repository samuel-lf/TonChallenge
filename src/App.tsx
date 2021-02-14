import 'react-native-gesture-handler';

import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <View style={{ flex: 1 }}>
      <Routes />
    </View>
  </NavigationContainer>
);

export default App;
