import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import MealsNavigator from './navigation/MealsNavigator';
import mealsReducer from './store/reducers/mealsReducer';
import filtersReducer from './store/reducers/filtersReducer';

const rootReducer = combineReducers({
  meals: mealsReducer,
  filters: filtersReducer
})

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    'poppins-200': require('./assets/fonts/Poppins-ExtraLight.ttf'),
    'poppins-400': require('./assets/fonts/Poppins-Regular.ttf'),
    'poppins-600': require('./assets/fonts/Poppins-SemiBold.ttf'),
  })
}

const App = () => {

  const [fontLoaded, setFontLoaded] = useState(false);

  if(!fontLoaded) {
    return (
      <AppLoading 
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={err => console.log(err)}
      />
    )
  }

  return (
   <Provider store={store}>
      <MealsNavigator />
   </Provider>
  );
}

export default App;
