import './UserProfile.css'
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

    const dobFormater = (dob) => {
        return `${dob.slice(5,7)}-${dob.slice(8,10)}-${dob.slice(0,4)}`
    }

    if (!userInfo.results) {
        return <div>Loading...</div>;
    }

    return (
       <div className="container">
            <div className="imgContainer">
                <img src={userInfo.results[0].picture.large} />
            </div>
                <div className="infoContainer">
                    <ul className="userInfo">
                        <li>{`${userInfo.results[0].name.first} ${userInfo.results[0].name.last}`}</li>
                        <li>
                            {
                            `${userInfo.results[0].location.street.number},
                            ${userInfo.results[0].location.street.name},
                            ${userInfo.results[0].location.city},
                            ${userInfo.results[0].location.state},
                            ${userInfo.results[0].location.postcode}
                            `
                            }
                        </li>
                        <li>{userInfo.results[0].email}</li>
                        <li>{userInfo.results[0].phone}</li>
                        <li>{dobFormater(userInfo.results[0].dob.date)}</li>
                    </ul>
            </div>
            <FetchButton userData={newUserData}/>
       </div>
    )
}


export default UserProfile;