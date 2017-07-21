/*
Top Level of Component hierarchy

Redux store initialized and made accessible via a prop to the container
component
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import ContactsApp from './reducers/ContactsApp';
import Contacts from './components/containers/Contacts';

//top level of React component hierarchy
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Contacts store={store} />
      </div>
    )
  }
}

//intialize store
let store = createStore(
  ContactsApp,
  applyMiddleware( thunk, logger )
);

ReactDOM.render(
  <Provider store = { store }>
    <App/>
  </Provider>,
  document.getElementById('app')
)
