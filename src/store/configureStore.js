import { createStore, applyMiddleware, compose } from 'redux';

import { persistState } from 'redux-devtools';
import thunk from 'redux-thunk';

import DevTools from '../containers/DevTools.jsx';
import appReducers from '../reducers';

const enhancer = compose(
    applyMiddleware(thunk),
    DevTools.instrument(),
    persistState(
        window.location.href.match(
            /[?&]debug_session=([^&]+)\b/
        )
    )
);

function configureStore(initialState) {
    const store = createStore(appReducers, initialState, enhancer);

    // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
    if (module.hot) {
        module.hot.accept('../reducers', () =>
            store.replaceReducer(appReducers)
        );
    }

    return store;
}

export default configureStore();