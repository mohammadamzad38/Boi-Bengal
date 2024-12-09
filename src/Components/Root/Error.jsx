import React from 'react';

const Error = () => {
    return (
        <div className='flex flex-col gap-16 items-center justify-center p-16 mt-20 bg-red-300 border rounded-2xl font-bold'>
            <h1 className='text-5xl text-center'>Opps........</h1>
            <p className='text-3xl text-center'>Page Not found .......!!</p>
        </div>
    );
};

export default Error;