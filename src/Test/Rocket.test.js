import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Rockets from '../Components/Rockect';

const mockStore = configureStore([]);

test('renders Rockets component', () => {
  const store = mockStore({ rockets: { rockets: [] } });

  render(
    <Provider store={store}>
      <Rockets />
    </Provider>,
  );
});
