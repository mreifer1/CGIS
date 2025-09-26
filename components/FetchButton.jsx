import axios from 'axios';

const FetchButton = () => {

    const getNewUser = () => {
        axios.get("https://randomuser.me/api")
        .then((res) => {
            newUserData(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <button onClick={getNewUser}>
            Fetch New User
        </button>
    )

}


export default FetchButton;