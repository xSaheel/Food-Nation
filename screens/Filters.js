import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Filters = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Filters</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Filters;
