import axios from 'axios';

export const fetchData = async () => {
    try {

        //! 1st Way
        // const response = await axios.get(process.env.REACT_APP_COVID_API_BASE_URL)
        // return response        
        
        
        //! 2nd Way        
        // const {
        //     data
        // } = await axios.get(process.env.REACT_APP_COVID_API_BASE_URL)
        // return data
        
        
        //! 3rd Way
        // const {
        //     data
        // } = await axios.get(process.env.REACT_APP_COVID_API_BASE_URL)

        // const modifiedData = {
        //     confirmed: data.confirmed,
        //     recovered: data.recovered,
        //     deaths: data.deaths,
        //     countries: data.countries
        // }
        // return modifiedData
        
        
        //! 4th Way
        // const {
        //     data: {
        //         confirmed,
        //         recovered,
        //         deaths,
        //         countries
        //     }
        // } = await axios.get(process.env.REACT_APP_COVID_API_BASE_URL)

        // const modifiedData = {
        //     confirmed,
        //     recovered,
        //     deaths,
        //     countries,
        // }
        // return modifiedData

        
        
        //! 5th Way
        const {
            data: {
                confirmed,
                recovered,
                deaths,
                countries
            }
        } = await axios.get(process.env.REACT_APP_COVID_API_BASE_URL)

        return {
            confirmed,
            recovered,
            deaths,
            countries,
        }
        //? Getting Generated 4 Data Only


    } catch (err) {
        console.log(err)
        throw new Error('Fetching API Failed')
    }
}