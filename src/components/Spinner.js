import React from 'react';

const Spinner = () => {
    return (
        <div className='flex justify-center items-center'>
            <p className='text-3xl font-bold'>L</p>
            <div className='h-6 w-6 border border-dashed border-info animate-bounce rounded-full'>
            </div>
            <p>ADING...</p>
        </div>
    );
};

export default Spinner;