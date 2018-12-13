import React from 'react';
import { render } from 'react-dom';
import Counter from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer/stateReducer'

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Counter/>
  </Provider>
);

render(<App />, document.getElementById('root'));


