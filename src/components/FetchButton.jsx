import axios from 'axios';

const FetchButton = ({userData}) => {

    const getNewUser = () => {
        axios.get("https://randomuser.me/api")
        .then((res) => {
            userData(res.data);
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