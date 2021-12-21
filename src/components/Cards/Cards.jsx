import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import styles from './cards.module.css'

const Cards = (props) => {
    // console.log(props)
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justifyContent="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>
                            Infected
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards
