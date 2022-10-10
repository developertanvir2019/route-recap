import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Countries = () => {
    const countries = useLoaderData()
    return (
        <div>
            {
                countries.map(country => <li key={country.name.common}> <Link to={`/country/${country.name.common}`}> <button>{country.name.common}</button></Link> </li>)
            }
        </div>
    );
};

export default Countries;