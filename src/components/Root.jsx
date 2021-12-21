import React, { Component } from 'react'
import { Card, Chart, Country } from './'
import { fetchData } from '../api'
import styles from './root.module.css'

class Root extends Component {

    async componentDidMount() {
        // const data = await fetchData()
        const { data } = await fetchData()
        console.log(data)
    }

    render() {
        return (
            <div className={styles.container}>
                <Card />
                <Country />
                <Chart />
            </div>
        )
    }
}

export default Root
