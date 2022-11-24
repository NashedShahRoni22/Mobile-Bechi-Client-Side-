import React from 'react';

const Spinner = () => {
    return (
        <div className='flex justify-center items-center h-48'>
            <p className='text-5xl font-bold'>L</p>
            <div className='h-12 w-12 border border-dashed border-info animate-bounce rounded-full'>
            </div>
            <p className='text-5xl'>ADING...</p>
        </div>
    );
};

export default Spinner;