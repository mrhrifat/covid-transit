import React, { Component } from 'react'
import { Card, Chart, Country } from './'
import styles from './root.module.css'

class Root extends Component {
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
