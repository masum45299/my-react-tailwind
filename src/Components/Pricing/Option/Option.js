import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Option = ({option}) => {
    return (
        <div className='bg-indigo-300 m-3 rounded p-3'>
            <div>
                <span className='text-6xl font-bold text-white'>{option.Price}</span>
                <span>/Month</span>
                <p className='text-2xl'>{option.name}</p>
            </div>
            <div className='flex items-center'>
                <CheckCircleIcon className="h-4 w-4 text-green-500"/>
                <p className='ml-2'>Awsome features</p>
            </div>


        </div>
    );
};

export default Option;