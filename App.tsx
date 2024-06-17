import 'react-native-gesture-handler';
import React from 'react';
import AppNavigationContainer from './src/app/navigators/AppNavigationContainer';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import store from './src/app/redux/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <GestureHandlerRootView style={{flex: 1}}>
          <AppNavigationContainer />
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
