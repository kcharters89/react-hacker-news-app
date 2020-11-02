import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HackerNewsPosts from './hacktop';
import HackerJobPosts from './hackjob';
import HackerBestPosts from './hackbest'



const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Top Posts" component={HackerNewsPosts} />
      <Tab.Screen name="Job Posts" component={HackerJobPosts}/>
      <Tab.Screen name="Best Posts" component={HackerBestPosts}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

