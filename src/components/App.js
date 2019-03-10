import React, { Component } from 'react'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import filmsFetchSaga from './sagas'
import reducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(filmsFetchSaga);

const WrongRoute = 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <Switch>
              <Route path="/" exact component={} />
              <Route component={WrongRoute} />
            </Switch>
          </Router>
        </Provider>
      </div>
    )
  }
}

export default App;
