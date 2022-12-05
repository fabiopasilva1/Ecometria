import React from 'react'

const Container = ({ children }) => {
    return (
        // <!-- .container -->
        <div id='content'>
            <div className='container padding-top80 padding-bottom40'>

                {children}
            </div>
        </div>
    )
}

export default Container