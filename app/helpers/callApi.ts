import axios from "axios"


const CallApi = () => {

    const axiosInstance = axios.create({
        baseURL : 'http://localhost:5000/api'
    });

    axios.interceptors.request.use(
        (config) => {
            // things
            return config
        },
        err => Promise.reject(err)
    );

    axios.interceptors.response.use(
        res => {
            // things
            return res
        },
        err => Promise.reject(err)
    );

    return axiosInstance;

}

export default CallApi;