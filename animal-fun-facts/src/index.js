import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import reportWebVitals from './reportWebVitals';


const background = (
                    <div>
                      <img
                        className='background'
                        alt='ocean'
                        src='https://pablobermudez.com/wp-content/uploads/2015/03/blue-ocean-digital.jpg'

                      />
                    </div>
                  )

const title = "";

const images = []

const animalsFacts = (
                      <div>

                      <h1>{title === "" ? "Click an animal for a fun fact" : title}</h1>
                      {background}
                      </div>
                    )

ReactDOM.render(animalsFacts, document.getElementById("root"));


