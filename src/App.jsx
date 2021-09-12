import React from 'react';
// Import provider that will serve to manage store in all possible routesList
import { Provider } from 'react-redux';
// Import store
import { store } from './redux/store';
import { AppRouter } from './routers/AppRouter';

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default App;
