import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../../api'


const Chart = () => {

    const [dailyData, setDailyData] = useState({})

    useEffect(() => {
        const dailyData = async () => {
            // const getDailyData = await fetchDailyData()
            setDailyData(await fetchDailyData())
        }
        dailyData()
    })

    // console.log(dailyData)

    return (

        <div>
            Chart
        </div>
    )
}

export default Chart
