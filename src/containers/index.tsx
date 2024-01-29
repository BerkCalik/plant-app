import React from 'react';
import {View, Text} from 'react-native';
import GetStarted from './get-started';
import Onboarding from './onboarding';
import Paywall from './paywall';

const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <GetStarted /> */}
      {/* <Onboarding /> */}
      <Paywall />
    </View>
  );
};

export default App;
