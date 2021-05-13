import React from 'react';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';

import model3 from './Images/model3.jpeg';
import models from './Images/modelS.jpeg';
import modelx from './Images/modelX.jpeg';
import modely from './Images/modelY.jpeg';


const data = [
  {
      name: 'Model S', 
      img: `${models}`
  },
  {
      name: 'Model 3', 
      img: `${model3}`
  },
  {
      name: 'Model X', 
      img: `${modelx}`
  },
  {
      name: 'Model Y', 
      img: `${modely}`
  },
];


function App() {
  return (
    <div className="relative w-full">
      <Header />
      <div className="flex flex-col h-full">
          {
              data.map(({name,img}) => (
                  <div className='relative bg-no-repeat h-screen bg-center bg-cover' style={{backgroundImage: `url(${img})`}}>
                      <div className="flex flex-col items-center justify-center pt-32">
                        <p className="text-5xl text-gray-700">{name}</p>
                        <p className="text-gray-500">Order Online for <span className="cursor-pointer border-gray-800 border-b-2  hover:border-b-3 hover:border-black">Touchless Delivery</span></p>
                      </div>
                      <div className="absolute bottom-16 w-full px-96 mx-auto flex flex-row items-center justify-evenly"> 
                        <p className="text-xs text-white px-16 rounded-r-full rounded-l-full bg-gray-700 py-3 opacity-90">CUSTOMER ORDER</p>
                        <p className="-ml-20 text-xs text-black px-16 rounded-r-full rounded-l-full bg-gray-50 py-3 opacity-90">EXISTING INVENTORY</p>
                    </div>
                  </div>
              ))
          }
      </div>
      
    </div>
  );
}

export default App;
