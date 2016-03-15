// Import react components
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import Title from '../components/Title.jsx';

describe('The title component', () => {

    it('should render a h1', () => {
        const title = TestUtils.renderIntoDocument(<Title title="foo" />);
        const h1 = TestUtils.findRenderedDOMComponentWithTag(title, 'h1');

        expect(h1).toBeTruthy();
    });
    it('should display the title', () => {

        const title = TestUtils.renderIntoDocument(
            <Title title="foo" />
        );
        const h1 = TestUtils.findRenderedDOMComponentWithTag(title, 'h1');

        expect(h1.textContent).toEqual('foo');

    });
});