import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const InfoScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Info Screen</Text>
    </View>
  );
};

export default InfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
