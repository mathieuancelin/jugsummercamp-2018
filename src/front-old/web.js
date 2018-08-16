import React from 'react';
import ReactDOM from 'react-dom';

import { Home } from './pages/home';

export function render(node) {
  ReactDOM.render(<Home />, node);
}
