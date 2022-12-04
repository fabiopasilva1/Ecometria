import React, { Fragment } from 'react'

const Footer = ({ children }) => {
    return (
        <Fragment>
            {children}
            {/*#footer */}
            <footer id="footer">

                {/*.container */}
                <div className="container">

                    <div className="footer-nav">
                        {/*<ul>
                <li><a href="/home">Home</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Soluções</a></li>

                <li><a href="#">Parceiros</a></li>
                <li><a href="#">Contato</a></li>
            </ul>*/}
                        <p className="padding-top20">Ecometria CNPJ 24.375.203/0001-20 - Todos os direitos reservados &copy; 2017 -</p>
                        {/*               echo date('Y')  

</div>

<div className="footer-socials">
<ul>
    <li><a href="https://www.facebook.com/Ecometria-109276740638116" target="_blank" title="Facebook"><i
                className="ion ion-social-facebook"></i></a></li>
    {/*<li><a href="#" title="Twitter"><i className="ion ion-social-twitter"></i></a></li>*/}
                        {/*<li><a href="#" title="Google Plus"><i className="ion ion-social-googleplus"></i></a></li>
                <li><a href="#" title="Pinterest"><i className="ion ion-social-pinterest"></i></a></li>
                <li><a href="#" title="Instagram"><i className="ion ion-social-instagram"></i></a></li>
                <li><a href="#" title="Dribbble"><i className="ion ion-social-dribbble"></i></a></li>
            </ul>*/}
                    </div>

                </div>
                {/*.container end */}

            </footer>
            {/*#footer end */}

            <a href="#" className="scrollup" title="Back to Top!"><i className="ion ion-android-arrow-up"></i></a> {/*Back to Top */}

            {/*[if lt IE 8]>
<div className="browser-notice">
    <div className="container">
        <div className="text">
            <h1>Internet Explorer Out To Date</h1>
            <p>Please update your Internet Explorer browser with a newer version (Internet Explorer 8 above) now!</p>
            <span>You can download it <a href="http://windows.microsoft.com/en-us/internet-explorer/download-ie" target="_blank">here....</a></span>
        </div>
    </div>
</div>
<![endif]*/}
        </Fragment>
    )
}
export default Footer;