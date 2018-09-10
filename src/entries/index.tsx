import { Provider } from 'react-redux';
import Page from '../components/page';
import { render } from 'react-dom';
import * as React from 'react';
import store from 'app';

render(
	<Provider store={store}>
		<Page />
	</Provider>,
	document.getElementById('content')
)
