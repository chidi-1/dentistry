import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/main.sass'
import * as data from './example.json';
import * as dataIcon from './example-teeth.json';
import * as dataImg from './example-img.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App data={data.default} icons={dataIcon.default} photos={dataImg.default} />
  </React.StrictMode>,
)
