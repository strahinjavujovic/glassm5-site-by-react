import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/header';
import FirstPage from './components/1_firstPage';
import SecondPage from './components/2_secondPage';
import ThirdPage from './components/3_thirdPage';
import FourthPage from './components/4_fourthPage';
import FifthPage from './components/5_fifthPage';
import SixthPage from './components/6_sixthPage';
import SeventhPage from './components/7_seventhPage';
import EightPage from './components/8_eighthPage';
import NinthPage from './components/9_ninthPage';
import TenthPage from './components/10_tenthPage';
import EleventhPage from './components/11_eleventhPage';
import Footer from './components/footer';
import './Styles/style.scss';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <FirstPage/>
    <SecondPage/>
    <ThirdPage/>
    <FourthPage/>
    <FifthPage/>
    <SixthPage/>
    <SeventhPage/>
    <EightPage/>
    <NinthPage/>
    <TenthPage/>
    <EleventhPage/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
