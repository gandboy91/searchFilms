import React, { Component } from 'react'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import fetchFilmsSaga from '../sagas/index'
import { combineReducers } from 'redux'
import films from '../reducers/films'
import pages from '../reducers/pages'
import search from '../reducers/search'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import '../styles/App.css'
import SearchFilmAppContainer from "../containers/SearchFilmAppContainer";
import FilmCard from "./FilmCard";

const reducer = combineReducers({
    films,
    pages,
    search
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(fetchFilmsSaga);

/**
 * 404 component for wrong query
 */
const WrongRoute = props => <h1>Wrong url, dude!</h1>;

const FilmContainer = ({match: {params: {id: filmId}}}) => <FilmCard filmId={filmId}/>;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <Switch>
              <Route path="/" exact component={SearchFilmAppContainer} />
              <Route path="/films/:id" component={FilmContainer} />
              <Route component={WrongRoute} />
            </Switch>
          </Router>
        </Provider>
      </div>
    )
  }
}

export default App;
