import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'
const Features = () => {
    return (
        <div className='flex items-center'>
            <CheckCircleIcon className="h-4 w-4 text-green-500"/>
            <p className='ml-2'>Awsome features</p>
        </div>
    );
};

export default Features;