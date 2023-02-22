import React from 'react'
const style = {
    width: "200px"
}

const Country = (props) => {
    const { country } = props;
    const { name, flags, capital, population, area } = country;

    const handleRemoveCountry = (name) => {
        props.removeCountry(name);
    }
    return (
        <div className='col-lg-4 .col-md-6 p-2 col-sm-12'>
            <div className="card">
                <div className="card-title">
                    <h4>Name: {name.common}</h4>
                </div><div className="card-body">
                    <div className="card-image">
                        <img src={flags.png} alt={name.common} />
                    </div>
                    <h5>Population: {population}</h5>
                    <h5>Capital: {capital}</h5>
                    <h5>Area: {area}</h5>
                    <button className='btn btn-danger' onClick={() => handleRemoveCountry(name.common)}>Remove country</button>
                </div>

            </div>

        </div>
    )
}

export default Country