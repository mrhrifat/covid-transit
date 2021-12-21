import axios from 'axios';

export const fetchData = async () => {
    try {
        const response = await axios.get(process.env.REACT_APP_COVID_API_BASE_URL)
        return response

    } catch (err) {
        console.log(err)
        throw new Error('Fetching API Failed')
    }
}
console.log(process.env.REACT_APP_COVID_API_BASE_URL)