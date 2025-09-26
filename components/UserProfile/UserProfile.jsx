import './UserProfile.css'
import FetchButton from '../FetchButton';
import React, {useState} from 'react';

const UserProfile = () => {
    const [userInfo, setUserInfo] = useState({});

    return (
       <div className="container">
            <div className="img">

            </div>
            <div className="info">

            </div>

            <FetchButton />
       </div>
    )
}


export default UserProfile;