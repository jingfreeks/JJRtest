import React from 'react';
import {SafeAreaView} from 'react-native';
import {FirstScreen} from '../firstscreen';
import {SecondScreen} from '../secondscreen';
import {ThirdScreen} from '../thirdscreen';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
export default function TabViewExample() {
  return (
    <SafeAreaView className="flex-1">
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {fontSize: 12, fontWeight: 'bold'},
        }}>
        <Tab.Screen
          name="first"
          component={FirstScreen}
          options={{
            title: 'First',
            tabBarActiveBackgroundColor: 'red',
          }}
        />
        <Tab.Screen name="second" component={SecondScreen} />
        <Tab.Screen name="third" component={ThirdScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
