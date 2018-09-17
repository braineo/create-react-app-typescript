import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {applyMiddleware, createStore} from "redux";
import createLogger from 'redux-logger';
import thunk from "redux-thunk";
import App from './containers/RootView';
import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

const middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger as any);
}

const store = createStore(reducer,
    applyMiddleware(...middleware));


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
