import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import Index from './App/App';
import  Routers from './routers';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routers />, document.getElementById('root'));
registerServiceWorker();
