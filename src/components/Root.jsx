import React, { Component } from 'react'
import { Cards, Chart, Country } from './'
import { fetchData } from '../api'
import styles from './root.module.css'
import covidImage from '../images/image.png'

class Root extends Component {

    state = {
        data: {},
        country: ''
    }

    // async componentDidMount() {

    //     // 1st Way        
    //     // const data = await fetchData()

    //     // 2nd Way         
    //     // const { data } = await fetchData()
    //     // console.log(data)

    //     // 3rd Way
    //     // const { modifiedData } = await fetchData()
    //     // console.log(modifiedData)

    //     // 4th Way
    //     // const data = await fetchData()
    //     // console.log(fetchedData)
    //     // this.setState({ data })

    //     // 5th Way
    //     const fetchedData = await fetchData()
    //     // console.log(fetchedData)
    //     this.setState({ data: fetchedData })
    // }

    async componentDidMount() {
        const fetchedData = await fetchData()
        // console.log(fetchedData)
        this.setState({ data: fetchedData })
    }

    handleChangeCountry = async (country) => {
        const fetchedData = await fetchData(country)
        // console.log(fetchedData)
        // console.log(country)
        this.setState({ data: fetchedData, country: country })
    }



    render() {
        // console.log(this.state.data)
        const { data, country } = this.state
        // console.log(data)
        return (
            <div className={styles.container}>
                <img src={covidImage} className={styles.iamge} alt='Covid-19' />
                <Cards data={data} />
                <Country handleChangeCountry={this.handleChangeCountry} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}

export default Root
