import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const SavedScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Saved Screen</Text>
    </View>
  );
};

export default SavedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
