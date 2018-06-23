import axios from 'axios';

const get = (endpoint, args) => {
    const response = axios.get(endpoint,
        { params: args }
    )
    return response
}

export default get;