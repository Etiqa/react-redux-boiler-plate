//Import modules
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './App.jsx';
import DevTools from './DevTools.jsx';

export default class Root extends Component {
    render() {
        const { store } = this.props;
        return (
            <Provider store={store}>
                <div>
                    <App />
                    <DevTools />
                </div>
            </Provider>
        );
    }
}