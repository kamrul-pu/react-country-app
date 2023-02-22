import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Search from './Search';

import Country from './Country';

const Countries = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [countries, setCountries] = useState([]);
    const [filtered_countries, setFilteredCountries] = useState(countries);

    const url = "https://restcountries.com/v3.1/all/";

    const fetchData = async (url) => {
        setIsLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            setCountries(data);
            setFilteredCountries(data);
            setIsLoading(false);
            setError(null);
            console.log(countries);
        } catch (error) {
            setIsLoading(false);
            setError(error);
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData(url);
    }, []);

    const removeCountry = name => {
        console.log(name);
        const filter = filtered_countries.filter((country) => country.name.common !== name);
        setFilteredCountries(filter);

    }

    const handleSearch = (searchVal) => {
        let value = searchVal.toLowerCase();
        const newCountries = countries.filter((country) => {
            const countryName = country.name.common.toLowerCase();
            return countryName.startsWith(value);

        });
        setFilteredCountries(newCountries);
    }
    return (
        <div className='container'>
            <h1>Country App</h1>
            <Search onSearch={handleSearch} />
            {isLoading && <h2>Loading</h2>}
            {error && <h2>{error.message}</h2>}
            <div className="row">
                {filtered_countries.map((country) => {
                    return <Country key={uuidv4()} country={country} removeCountry={removeCountry} />
                })}
            </div>

        </div>
    )
}

export default Countries