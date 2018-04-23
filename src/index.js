import React from 'react';
import ReactDOM from 'react-dom';
import MainRoutes from './routes'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MainRoutes />, document.getElementById('root'));
registerServiceWorker();
