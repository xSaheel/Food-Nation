import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import Colors from '../assets/Colors';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const Filters = () => {

  const [onlyVeg, setOnlyVeg] = useState(false);
  const [onlyNonVeg, setOnlyNonVeg] = useState(false);

  const vegOnly = () => {
    setOnlyVeg(true);
    setOnlyNonVeg(false);
  }

  const nonVegOnly = () => {
    setOnlyNonVeg(true);
    setOnlyVeg(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.filter}>
        <Text style={styles.text}>Only Veg</Text>
        <Switch value={onlyVeg} onValueChange={vegOnly} />
      </View>
      <View style={styles.filter}>
        <Text style={styles.text}>Only Non Veg</Text>
        <Switch value={onlyNonVeg} onValueChange={nonVegOnly}/>
      </View>
      <View style={styles.filter}>
        <Text style={styles.text}>Both</Text>
        <Switch value={!onlyVeg && !onlyNonVeg} onValueChange={() => {}}/>
      </View>
    </View>
  );
}

Filters.navigationOptions = navData =>  {
  return ({
    headerTitle: 'Filters',
    headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title='Menu' iconName='ios-menu' onPress={() => {
        navData.navigation.toggleDrawer();
      }} />
    </HeaderButtons>,
    headerStyle: {
      backgroundColor: Colors.primary
    },
    headerTintColor: Colors.secondary
  })
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    backgroundColor: '#ccc',
    marginVertical: 8,
  },
  text: {
    fontSize: 20,
    fontFamily: 'poppins-200',
    marginHorizontal: 10
  }
});

export default Filters;
