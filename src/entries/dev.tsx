import { Provider } from 'react-redux';
import Page from '../components/page';
import { render } from 'react-dom';
import * as React from 'react';
import store from 'app';
import { hot } from 'react-hot-loader';

const HotPage = hot(module)(Page);

render(
	<Provider store={store}>
		<HotPage />
	</Provider>,
	document.getElementById('content')
  )
