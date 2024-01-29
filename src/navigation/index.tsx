import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import GetStarted from '../containers/get-started';
import Onboarding from '../containers/onboarding';
import Paywall from '../containers/paywall';
import {MainParamList, OnboardFlowParamList, RootStackParamList} from './types';
import Home from '../containers/home';

const OnboardFlowStack = createStackNavigator<OnboardFlowParamList>();
const MainFlowStack = createStackNavigator<MainParamList>();

const RootStack = createStackNavigator<RootStackParamList>();

const OnboardFlow = () => {
  return (
    <OnboardFlowStack.Navigator screenOptions={{headerShown: false}}>
      <OnboardFlowStack.Screen name="GetStarted" component={GetStarted} />
      <OnboardFlowStack.Screen name="Onboarding" component={Onboarding} />
      <OnboardFlowStack.Screen name="Paywall" component={Paywall} />
    </OnboardFlowStack.Navigator>
  );
};

const MainFlow = () => {
  return (
    <MainFlowStack.Navigator screenOptions={{headerShown: false}}>
      <MainFlowStack.Screen name="Home" component={Home} />
    </MainFlowStack.Navigator>
  );
};

const MainNavigator = () => (
  <NavigationContainer>
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name="OnboardFlow" component={OnboardFlow} />
      <RootStack.Screen name="MainFlow" component={MainFlow} />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default MainNavigator;
