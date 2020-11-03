import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Logo from './assets/Logo.png'


const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

const DisplayAnImage = () => {
  return (
    <View style={styles.container}>
<Image source={require(Logo)} />
    </View>
  );
}

export default DisplayAnImage;