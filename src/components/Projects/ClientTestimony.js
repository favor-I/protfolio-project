import React from 'react'

const ClientTestimony = ({icon, iconAlt, testifier, testimony}) => {
    return (
        <>
            <div className='testimonies'>
                <img src={icon} alt = {iconAlt} />
                <h5>{testifier}</h5>
                <i>{testimony}</i>
            </div>
        </>
    )

}

export default ClientTestimony