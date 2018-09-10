import { configure } from '@storybook/react';

function loadStories(...args) {
	require('./stub.stories');
}

configure(loadStories, module);