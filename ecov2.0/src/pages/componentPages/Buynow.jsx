import React, { Fragment } from 'react'

const Buynow = (props) => {

    return (
        <Fragment>
            <div id="buynow" className={`bg-color text-white padding-top40 padding-bottom40 ${props.vidible}`}>

                {/* .container */}
                <div className="container">

                    <div className="affa-call-action">
                        <h2 >Quer saber mais?</h2>
                        <a href="/contato" className="btn-custom btn-border btn-white" >Entre em contato</a>
                    </div>

                </div>
                {/* .container end */}

            </div>
        </Fragment>
    )
}

export default Buynow