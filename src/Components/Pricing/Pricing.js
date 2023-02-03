import React from 'react';
import Option from './Option/Option';


const Pricing = () => {
    const PricingOption=[
        {id:1, name:"Free", Price:0, features: [
            {key:1},
            'Awsome feature',
            'Pro feature',
            'Hudai feature',
            'Never use feature',
            'Extra useable feature'
        ] },
        {id:2, name:"Medium", Price:9.99 ,features: [
            {key:2},
            'Awsome feature',
            'Pro feature',
            'Hudai feature',
            'Never use feature',
            'Extra useable feature'
        ]},
        {id:3, name:"Premium", Price:19.99 , features: [
            {key:3},
            'Awsome feature',
            'Pro feature',
            'Hudai feature',
            'Never use feature',
            'Extra useable feature'
        ]}
    ]
    return (
        <div>
            <h2 className='text-5xl font-bold bg-indigo-300 p-12 text-white'>Best deal of pricing</h2>
        <div className='grid grid-cols-3'>
            {
                PricingOption.map(option=> <Option
                key={option.id} option={option}
                ></Option>)
            }
        </div>
        </div>
    );
};

export default Pricing;