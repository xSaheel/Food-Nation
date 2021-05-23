import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, Text, View, ImageBackground, FlatList } from 'react-native';
import Colors from '../assets/Colors';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const Favorites = props => {

  const favMeals = useSelector(state => state.meals.favoriteMeals);

  const renderFav = itemData => {
    return (
      <View style={styles.gridItem} >
        <ImageBackground source={{uri: itemData.item.img}} style={styles.image} imageStyle={{ borderRadius: 10}}>
          <View style={styles.mealBody}>
            <Text style={styles.price}>₹{itemData.item.price}</Text>
            <Text style={styles.text}>{itemData.item.title}</Text>
          </View>
        </ImageBackground>
      </View>
    )
  }

  return (
    <FlatList 
      data={favMeals} 
      renderItem={renderFav}
    />
  );
}

Favorites.navigationOptions = navData =>  {
  return ({
    headerTitle: 'My Favorites',
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
  gridItem: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: 12,
    height: 140,
    borderRadius: 10,
    elevation: 5,
  },
  mealBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  price: {
    fontSize: 18,
    fontFamily: 'poppins-600',
    color: '#eee',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: '50%',
    borderTopLeftRadius: 10,
    paddingLeft: 10
  },
  text: {
    fontSize: 18,
    fontFamily: 'poppins-400',
    textAlign: 'right',
    color: '#eee',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: '50%',
    borderTopRightRadius: 10,
    paddingRight: 10
  }
});

export default Favorites;
