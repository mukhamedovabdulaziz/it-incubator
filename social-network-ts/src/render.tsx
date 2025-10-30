import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addPost, stateType} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTitle = (state: stateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>, document.getElementById('root'));
}