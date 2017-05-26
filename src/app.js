// React
import React from 'react';
import { render } from 'react-dom';

// Components
import SelfPointTest from './components/SelfPointTest';

// Mount
const mount = document.getElementById('mount');

render(<SelfPointTest />, mount);

if (module.hot) {
    module.hot.accept();
}