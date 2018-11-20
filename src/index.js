import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';

import './styles.css';

const rootReducer = combineReducers({
  // other reducers go here
  // redux-form reducer must be under 'form' key
  form: formReducer,
});

const store = createStore(rootReducer);

function Container() {
  return (
    <div className="App">
      <App />
    </div>
  );
}

const app = (
  <Provider store={store}>
    <Container />
  </Provider>
);

const rootElement = document.getElementById('root');
ReactDOM.render(app, rootElement);
