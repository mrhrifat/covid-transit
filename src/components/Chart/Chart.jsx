import React, { useState, useEffect } from 'react'
import { LinearProgress } from '@material-ui/core'
import { Line, Bar } from 'react-chartjs-2'
import { fetchDailyData } from '../../api'
import classNames from 'classnames'
import styles from './chart.module.css'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)


const Chart = () => {
    // console.log(props)

    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        const dailySummary = async () => {
            const getDailyData = await fetchDailyData()
            // setDailyData(await fetchDailyData())
            setDailyData(getDailyData)
        }

        console.log(dailyData)

        dailySummary()
    }, [])

    // console.log(dailyData)
    const lineChart = (
        dailyData.length !== 0
            ? (
                <Line
                    data={{
                        labels: dailyData.map(({ date }) => date),
                        datasets: [
                            {
                                data: dailyData.map((data) => data.confirmed),
                                label: 'Infected',
                                borderColor: '#3333ff',
                                fill: true,
                            },
                            {
                                data: dailyData.map((data) => data.deaths),
                                label: 'Deaths',
                                borderColor: 'red',
                                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                                fill: true,
                            }
                        ]
                    }}
                />
            )
            : null
        // <LinearProgress />
    )


    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

export default Chart
