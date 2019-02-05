import React from 'react';
import ReactDOM from 'react-dom';
import Filmmaker from './components/Filmmaker';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Filmmaker />, div);
  ReactDOM.unmountComponentAtNode(div);
});
