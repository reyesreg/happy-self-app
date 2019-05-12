import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/home/index.tsx';
import OverviewScreen from '../screens/overview/index.tsx';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  // tabBarLabel: '',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-sunny'
          : 'md-sunny'
      }
    />
  )
};

const OverviewStack = createStackNavigator({
  Overview: OverviewScreen,
});

OverviewStack.navigationOptions = {
  // tabBarLabel: 'Calendar',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-calendar' : 'md-calendar'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  OverviewStack
});
