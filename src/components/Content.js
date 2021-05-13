import React from 'react';
import model3 from '../Images/model3.jpeg';
import models from '../Images/modelS.jpeg';
import modelx from '../Images/modelX.jpeg';
import modely from '../Images/modelY.jpeg';

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

const Content = () => {

    return (
        <div>
            {
                data.map(({name,img}) => (
                    <div className='bg-no-repeat h-screen bg-center bg-cover' style={{backgroundImage: `url(${img})`}}>
                        
                        {name}
                    </div>
                ))
            }
        </div>
    )
}

export default Content;
