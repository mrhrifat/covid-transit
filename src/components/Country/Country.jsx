import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import { fetchCountries } from '../../api'
import styles from './country.module.css'

const Country = () => {

    const [fetchedCountries, setFetchedCountries] = useState([])

    useEffect(() => {
        const fetchingCountries = async () => {
            setFetchedCountries(await fetchCountries())
        }

        fetchingCountries()
    }, [setFetchedCountries])

    // console.log(fetchedCountries)
    // console.log(fetchedCountries[0].name)

    return (
        <>
            <FormControl className={styles.formControl}>
                <NativeSelect>
                    <option value="global">Global</option>
                    {fetchedCountries && fetchedCountries.map((country,i) => (
                        <option
                            key={i}
                            value={country}
                        >
                            {country}
                        </option>
                    ))}
                </NativeSelect>
            </FormControl>
        </>
    )
}

export default Country
