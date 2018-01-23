import React, {Component} from 'react';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {Route} from 'react-router';
import {ConnectedRouter, routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import Reducers from './reducers';
import * as routes from './containers/routes';

const composeEnhancers = process.env.NODE_ENV === 'production' ? compose : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const history = createHistory();

const store = createStore(Reducers,
    composeEnhancers(
        applyMiddleware(thunk, routerMiddleware(history)),
    )
);


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <div>
                        <Route exact path="/" component={routes.Home}/>
                        <Route path="/login" component={routes.Login}/>
                        <Route path="/dashboard" component={routes.Dashboard}/>
                    </div>
                </ConnectedRouter>
            </Provider>
        );
    }
}


export default App;
