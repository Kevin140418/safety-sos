// authService.js
import axios from 'axios';

axios.defaults.withCredentials = true;

const checkSession = async () => {
    try {
        // console.log('Logging');
        const response = await axios.post('https://safety-sos-1.onrender.com/session');
        // console.log(response.data.isCardAssigned);
        return ({ isAuth: true, isCard: response.data.isCardAssigned }); // Session is valid
    } catch (error) {
        if (error.response && error.response.status === 401) {
            return ({ isAuth: false }); // Session is not valid
        } else {
            // Handle other errors silently
            return ({ isAuth: false }); // Or you can throw a custom error if needed
        }
    }
};

export default checkSession;
