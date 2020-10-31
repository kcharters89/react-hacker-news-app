import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HackerNewsPosts from './hacktop';
import HackerJobPosts from './hackjob';
import HackerBestPosts from './hackbest'
export default function App() {
  return (
    <View style={styles.container}>
      <Text></Text>
      <HackerNewsPosts/>
      <HackerJobPosts/>
      <HackerBestPosts/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
