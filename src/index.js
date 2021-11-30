import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import App from './App';
import './Pages/homepage/homepage.styles.css';
// import DemoApp from  './Demo/DemoApp';
import store from './redux/Store';

ReactDOM.render(
    <>
      <Provider store={store}>
        <BrowserRouter>
          <App/>
          {/* <DemoApp/> */}
        </BrowserRouter>
      </Provider>
    </>,
  document.getElementById('root')
)
