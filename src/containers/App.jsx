// Import react components
import React from 'react';
import { ReactDOM } from 'react-dom';

import { connect } from 'react-redux';
// Import redux modules
import configureStore from '../store/configureStore';
import { bindActionCreators } from 'redux';

// Import actions
import {} from '../actions/actions.js';
import {} from '../actions/async-actions';

// Import JSX modules
import Title from '../components/Title.jsx';

let App = (props) => {

    return (
        <div>
            <Title title="Well done!" />
        </div>
    );
};

function initialState () {
    return {};
}

export default connect(initialState)(App);
