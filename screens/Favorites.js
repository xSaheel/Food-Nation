import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Favorites = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Favorites</Text>
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

export default Favorites;
