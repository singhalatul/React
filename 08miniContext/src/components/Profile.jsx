import React from 'react';
import { useContext } from 'react';
import UserContext from '../context/UserContext';

const Profile = () => {
    const {user} = useContext(UserContext)
    if(!user) return <div>please login</div>
    return (
       <div className='text-center mt-2 text-3xl'>
        welcome {user.username}
       </div>
    );
}

export default Profile;
