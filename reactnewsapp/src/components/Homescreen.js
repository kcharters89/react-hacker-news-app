import * as React from 'react';
import { StyleSheet, Component, Text, View, Button} from 'react-native';
export default function HomeScreen() {
    return (
    <View style = {styles.container}>
        <Text>
            Hello </Text>
        
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      alignItems: 'center',
      justifyContent: 'center',
    },
  });