import React from'react';
import ReactDom,{render} from 'react-dom';
import App from './Component/app';
// import{Provider} from 'react-redux';
// import store from './store/store';

// render(<Provider store={store}>
//     <App/>
// </Provider>,document.getElementById('MyApp'));

render(<App/>,document.getElementById("MyApp"));