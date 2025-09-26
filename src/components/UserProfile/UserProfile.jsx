// import './UserProfile.css'
import axios from 'axios';
import FetchButton from '../FetchButton';
import {useState, useEffect} from 'react';

const UserProfile = () => {
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        axios.get("https://randomuser.me/api")
        .then((res) => {
            setUserInfo(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    const newUserData = (data) => {
        setUserInfo(data)
        console.log(data)
    }

    if (!userInfo.results) {
        return <div>Loading...</div>;
    }

    return (
      
       <div className="container">
            <div className="img">
                <img src={userInfo.results[0].picture.large} />
            </div>
            <div className="info" style={{color: 'white'}}>
                <ul>
                    <li>{`${userInfo.results[0].name.first} ${userInfo.results[0].name.last}`}</li>
                    <li>
                        {
                        `${userInfo.results[0].location.street.number} 
                        ${userInfo.results[0].location.street.name} 
                        ${userInfo.results[0].location.city}
                        ${userInfo.results[0].location.state}
                        ${userInfo.results[0].location.postcode}
                        `
                        }
                    </li>
                    <li>{userInfo.results[0].email}</li>
                    <li>{userInfo.results[0].cell}</li>
                    <li>{userInfo.results[0].dob.date.slice(0,10).split('-').reverse().join('-')}</li>
                </ul>
            </div>

            <FetchButton userData={newUserData}/>
       </div>
    )
}


export default UserProfile;