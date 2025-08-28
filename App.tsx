import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './views/Home'
import Itanhaem from './views/Itanhaem'
import Queimados from './views/Queimados'
import Nilopolis from './views/Nilopolis'
import NovaIguaçu from './views/NovaIguaçu';

const RootStack = createNativeStackNavigator({
  screens: {
    Home: Home,
    Itanhaem:Itanhaem,
    Queimados:Queimados,
    Nilopolis:Nilopolis,
    NovaIguaçu:NovaIguaçu
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}