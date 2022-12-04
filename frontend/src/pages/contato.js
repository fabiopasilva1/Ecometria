import React, { useContext, useEffect, useState } from "react";

import ContentContext from "../config/ContentContext";
const Contato = () => {
    const theContext = useContext(ContentContext)
    const [dataComponents, setDataComponents] = useState([])
    const [dataContato, setDataContato] = useState([]);

    const { attributes: { Components } } = theContext;

    useEffect(() => {
        if (dataComponents.length === 0) setDataComponents(Components)
        if (dataComponents.length !== 0) console.log(Components)
    }, [])
    useEffect(() => {
        if (dataComponents.length !== 0) {
            // eslint-disable-next-line
            dataComponents.map((c) => {
                setDataContato(c)
            })
            if (dataContato.phone !== undefined) setPhone(dataContato.phone)
            if (dataContato.Email !== undefined) setEmail(dataContato.Email)

        }
    }, [dataComponents, dataContato])


    const [phone, setPhone] = useState([])
    const [email, setEmail] = useState([])
    if (dataContato.phone !== undefined) {

    }
    const cols = 12 / (phone.length + email.length);




    return (

        <div id="content">

            <div className="container padding-top80 padding-bottom40">


                <div className="row">

                    <div className="row">

                        <div className="col-lg-10 col-lg-offset-1">
                            <div className="post-heading-center margin-top40">
                                <h2>Entre em contato</h2>
                                <p>Nos mande uma mensagem.</p>
                            </div>
                            <form method="post" action="http://localhost/email/send-form.php" className="affa-form-contact form-contact2- margin-bottom50 submit-form-contact">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <input type="text" name="name" required placeholder="Seu nome" />
                                    </div>
                                    <div className="col-sm-4">
                                        <input type="text" name="email" required placeholder="Seu email (*)" />
                                    </div>

                                    <div className="col-sm-4">
                                        <input type="text" name="phone" placeholder="Seu telefone" />
                                    </div>

                                </div>
                                <textarea name="message" id="contact-message" placeholder="Sua mensagem (*)"></textarea>
                                <div className="text-center">
                                    <input type="submit" name="submit" value="Enviar mensagem" />
                                </div>
                                <div className="submit-status"></div>
                            </form>
                        </div>

                        <div className="clearfix"></div>
                        <div className="post-heading-center margin-top40">
                            <h2>Endereço</h2>
                            <p>Conheça o endereço de nossa unidade.</p>
                        </div>


                        <div className="col-md-12">
                            <div>
                                <p className="margin-bottom0">
                                    {(dataContato.length !== 0 && dataContato.address !== undefined) ? dataContato.address : ''}
                                </p>
                            </div>
                            <iframe style={{ border: '0', width: '100%' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.5689424711236!2d-46.6656879850231!3d-23.512030884707414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef7fa5ecb2db5%3A0xbcd4329e6f6f5614!2sR.%20Hor%C3%A1cio%20Vergueiro%20Rudge%2C%20321%20-%20Casa%20Verde%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2002512-060!5e0!3m2!1spt-BR!2sbr!4v1645529394425!5m2!1spt-BR!2sbr" width="600" height="450" allowFullScreen="" loading="lazy" title="vemeo"></iframe>
                            <br />
                        </div>

                        <div className="margin-top100">

                            {(dataContato.length !== 0 && dataContato.phone !== undefined) && dataContato.phone.map(
                                // eslint-disable-next-line
                                (phone) => {
                                    if (phone.public === true) {
                                        return (

                                            < div className={`col-sm-${cols}`} >

                                                <div className="affa-info-text">
                                                    <i className="ion ion-ios-telephone"></i>
                                                    <h4>Telefone</h4>
                                                    <p>{phone.number}</p>
                                                </div>
                                            </div>
                                        )
                                    }
                                })}
                            {(dataContato.length !== 0 && dataContato.Email !== undefined) && dataContato.Email.map(
                                // eslint-disable-next-line
                                (email) => {
                                    if (email.public === true) {
                                        return (

                                            <div className={`col-sm-${cols}`}>

                                                <div className="affa-info-text">
                                                    <i className="ion ion-ios-email"></i>
                                                    <p>{email.title}</p>
                                                    <p><a href={`mailto:${email.email}`}>{email.email}</a></p>

                                                </div>
                                            </div>
                                        )
                                    }
                                })}


                        </div>




                    </div>








                </div>


            </div>
        </div >



    )
}

export default Contato;