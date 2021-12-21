import React, { Component } from 'react'
import { Card, Chart, Country } from './'
import { fetchData } from '../api'
import styles from './root.module.css'

class Root extends Component {

    state = {
        data: {}
    }

    async componentDidMount() {

        //! 1st Way        
        // const data = await fetchData()

        //! 2nd Way         
        // const { data } = await fetchData()
        // console.log(data)

        //! 3rd Way
        // const { modifiedData } = await fetchData()
        // console.log(modifiedData)

        //! 4th Way
        // const data = await fetchData()
        // console.log(fetchedData)
        // this.setState({ data })

        //! 5th Way
        const fetchedData = await fetchData()
        // console.log(fetchedData)
        this.setState({ data: fetchedData })
    }

    render() {
        // console.log(this.state.data)
        const { data } = this.state
        // console.log(data)
        return (
            <div className={styles.container}>
                <Card data={data} />
                <Country />
                <Chart />
            </div>
        )
    }
}

export default Root
