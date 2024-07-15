import 'react-native-gesture-handler';
import React from 'react';
import AppNavigationContainer from './src/app/navigators/AppNavigationContainer';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import store from './src/app/redux/store/store';
import ThemeProvider from './src/app/providers/theme/ThemeProvider';

const App = () => {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <SafeAreaProvider>
          <GestureHandlerRootView style={{flex: 1}}>
            <AppNavigationContainer />
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
