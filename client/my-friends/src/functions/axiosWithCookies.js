import Axios from 'axios';

export const axiosWithCookies = () => {
    return Axios.create({
        withCredentials: true,
    })
};
