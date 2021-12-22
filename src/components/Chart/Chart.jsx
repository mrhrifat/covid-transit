import React, { useState, useEffect } from 'react'
import { CircularProgress } from '@material-ui/core'
import { Line, Bar } from 'react-chartjs-2'
import { fetchDailyData } from '../../api'
import styles from './chart.module.css'


// // Bar Chart
// import { Chart, registerables } from 'chart.js'
// Chart.register(...registerables)

// // Line Chart
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend,
// } from 'chart.js'

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend,
// )


// // Bar & Line Chart
// import {
//     Chart as ChartJS,
//     // CategoryScale,
//     // LinearScale,
//     // PointElement,
//     // LineElement,
//     // Title,
//     // Tooltip,
//     // Legend,
//     registerables
// } from 'chart.js'

// ChartJS.register(
//     // CategoryScale,
//     // LinearScale,
//     // PointElement,
//     // LineElement,
//     // Title,
//     // Tooltip,
//     // Legend,
//     ...registerables
// )

// Bar & Line Chart
import {
    Chart as ChartJS,
    registerables
} from 'chart.js'

ChartJS.register(
    ...registerables
)



const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
    // console.log(props)

    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        const dailySummary = async () => {
            const getDailyData = await fetchDailyData()
            // setDailyData(await fetchDailyData())
            setDailyData(getDailyData)
        }

        // console.log(dailyData)

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
            :
            // null
            <CircularProgress />
    )

    // console.log(confirmed, recovered, deaths)

    const barChart = (
        confirmed
            ? (
                <Bar
                    data={{
                        labels: ['Infected', 'Recovered', 'Deaths'],
                        datasets: [{
                            label: 'People',
                            backgroundColor: [
                                'rgba(0, 0, 255, 0.5)',
                                'rgba(0, 255, 0, 0.5)',
                                'rgba(255, 0, 0, 0.5)'
                            ],
                            data: [confirmed.value, recovered.value, deaths.value]
                        }]
                    }}
                    options={{
                        legend: { dispplay: false },
                        title: { display: true, text: `Current state is ${country}` },
                    }}
                />
            )
            :
            // null
            <CircularProgress />
    )

    if (!lineChart) return <CircularProgress />

    return (
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    )
}

export default Chart
