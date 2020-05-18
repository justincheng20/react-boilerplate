import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory, BrowserRouter } from 'react-router-dom';
import { HomePage, mapDispatchToProps } from '../index';
import { loadItems } from '../../App/actions';
import configureStore from '../../../configureStore';

describe('<HomePage />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <BrowserRouter>
            <HomePage loading={false} error={false} data={{ items: [] }} />
          </BrowserRouter>
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  it('should fetch items on mount if data is false', () => {
    const submitSpy = jest.fn();
    render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <BrowserRouter>
            <HomePage data={{ items: false }} onLoad={submitSpy} />
          </BrowserRouter>
        </IntlProvider>
      </Provider>,
    );
    expect(submitSpy).toHaveBeenCalled();
  });

  it('should not fetch items on mount if data is an array', () => {
    const submitSpy = jest.fn();
    render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <BrowserRouter>
            <HomePage data={{ items: [] }} onLoad={submitSpy} />
          </BrowserRouter>
        </IntlProvider>
      </Provider>,
    );
    expect(submitSpy).not.toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('onLoad', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onLoad).toBeDefined();
      });

      it('should dispatch loadItems when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onLoad();
        expect(dispatch).toHaveBeenCalledWith(loadItems());
      });
    });
  });
});
