import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import MainPage from './components/MainPage'
import ItTutorialPage from './components/ItTutorialPage'

import EngTutorialPage from './components/EngTutorialPage'
import IeltsSpeakingTutorialPage from './components/EngTutorialPage/IeltsSpeakingTutorialPage'
import VocabBuilderTutorialPage from './components/EngTutorialPage/VocabBuilderTutorialPage'


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/it-turotial" element={<ItTutorialPage />} />
        <Route path="/eng-turotial" element={<EngTutorialPage />} />
        <Route path="/eng-turotial/ielts-speaking" element={<IeltsSpeakingTutorialPage />} />
        <Route path="/eng-turotial/vocab-builder" element={<VocabBuilderTutorialPage />} />


      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
