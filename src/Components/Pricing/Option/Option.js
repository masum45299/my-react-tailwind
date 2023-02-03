import React from 'react';
import Features from '../../Features/Features';


const Option = ({option}) => {
    const {features}=option
    return (
        <div className='bg-indigo-300 m-3 rounded p-3'>
            <div>
                <span className='text-6xl font-bold text-white'>{option.Price}</span>
                <span>/Month</span>
                <p className='text-2xl'>{option.name}</p>
            </div>
            {
                features.map(feature=> console.log(feature))
            }

        </div>
    );
};

export default Option;