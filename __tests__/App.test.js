import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../src/App';
import store from '../src/Redux/configureStore';

describe('This suit is to test the Body component', () => {
  test('Snapshot of App', () => {
    const { asFragment } = render(<Provider store={store}><App /></Provider>);
    expect(asFragment()).toMatchSnapshot();
  });
});
