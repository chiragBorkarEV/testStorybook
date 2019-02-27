import React from 'react';
import {configure, addDecorator} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import { configureViewport } from '@storybook/addon-viewport';

addDecorator(
    withInfo({
        header: false, // Global configuration for the info addon across all of your stories.
    })
);

const newViewports = {
    kindleFire2: {
        name: 'Kindle Fire 2',
        styles: {
            width: '600px',
            height: '963px'
        }
    },
    kindleFireHD: {
        name: 'Kindle Fire HD',
        styles: {
            width: '533px',
            height: '801px'
        }
    }
};

configureViewport();

function loadStories() {
    require('../stories/index.js');
    // You can require as many stories as you need.
}

configure(loadStories, module);
