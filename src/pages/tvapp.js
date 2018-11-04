import React from 'react';
import App from './index.js';
import { Provider } from 'react-redux';
import store from '../components/store';


const TVapp = ({ children }) => (
    
    // Provide our store to the application
    <Provider store={store}>
      <App />
    </Provider>

)

export default TVapp
 