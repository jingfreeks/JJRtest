/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {TabScreen} from './tabscreen';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClientProvider, QueryClient} from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <TabScreen />
      </QueryClientProvider>
    </NavigationContainer>
  );
}

export default App;
