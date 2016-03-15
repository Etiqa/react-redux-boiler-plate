// Import React components
import React from 'react';
import ReactDOM from 'react-dom';

// Import Redux components
import { Provider } from 'react-redux';

// Import other components
import store from './store/configureStore';
//
import Root from './containers/Root.jsx';

// Run the app
let appContainer = document.getElementById('container');

ReactDOM.render(
    <Root store={store}/>,
    appContainer
);