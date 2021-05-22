import React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Colors from '../assets/Colors';
import { CATEGORIES } from '../Data';

const Categories = props => {

  const renderGridItem = itemData => {
    return (
      <TouchableOpacity 
        style={{...styles.gridItem, backgroundColor: itemData.item.color}} 
        onPress={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              categoryId: itemData.item.id
            }
          });
        }}
        activeOpacity={0.7}
      >
        <View>
          <Text style={styles.text}>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <FlatList 
      data={CATEGORIES} 
      numColumns={2}
      renderItem={renderGridItem}
    />
  );
}

Categories.navigationOptions = {
  headerTitle: 'Cuisines',
  headerStyle: {
    backgroundColor: Colors.primary
  },
  headerTintColor: Colors.secondary
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: 15,
    margin: 12,
    height: 120,
    borderRadius: 10,
    elevation: 5
  },
  text: {
    fontSize: 18,
    fontFamily: 'poppins-200',
    color: '#eee'
  }
});

export default Categories;
