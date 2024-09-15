import React from 'react';
import { useParams } from 'react-router-dom';
const User = () => {
    const {userid} = useParams()
    return (
        <div className='flex flex-wrap justify-center text-3xl p-4 bg-gray-600'>
            <h1 className='flex flex-wrap'>User:{userid}</h1>
        </div>
    );
}

export default User;
