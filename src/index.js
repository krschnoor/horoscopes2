import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HoroscopesContainer from './HoroscopesContainer';
import * as serviceWorker from './serviceWorker';

const signs = [
 { id: 0, sign:'Aquarius',image:'aquarius.jpg' },
 { id: 1, sign:'Aries',image:'aries.jpg' },
 { id: 2, sign:'Cancer',image:'cancer.jpg' },
 { id: 3, sign:'Capricorn',image:'capricorn.jpg' },
 { id: 4, sign:'Gemini',image:'gemini.jpg' },
 { id: 5, sign:'Leo',image:'leo.jpg' },
 { id: 6, sign:'Libra',image:'libra.jpg' },
 { id: 7, sign:'Pisces',image:'pisces.jpg' },
 { id: 8, sign:'Sagittarius',image:'sagitarius.jpg' },
 { id: 9, sign:'Scorpio',image:'scorpio.jpg' },
 { id: 10, sign:'Taurus',image:'taurus.jpg' },
 { id: 11, sign:'Virgo',image:'virgo.jpg' }
];


ReactDOM.render(<HoroscopesContainer signs={signs}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
