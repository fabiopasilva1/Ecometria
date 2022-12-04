import React from "react";
const Login = () => {

    return (
        <div className="container">

            <div className="col-md-12 center-block">
                <div className="header-content-title text-white post-heading-center" style="width:100%;">
                    <h1 style="font-size:70px;">Área restrita</h1>
                    <form action="">
                        <div className="form-group">
                            <div className="col-md-8 col-md-offset-2" >
                                <input id="login" className="form-control" placeholder="Login" type="text" />
                            </div>
                        </div>
                        <div className="clearfix"></div>

                        <div className="form-group" style="margin-top:20px;">
                            <div className="col-md-8 col-md-offset-2 ">
                                <input id="password" className="form-control" placeholder="Senha" type="text" />
                            </div>
                        </div>

                        <div className="clearfix"></div>

                        <div className="form-group" style="margin-top:20px;">
                            <div className="col-md-12">
                                <button type="submit">Enviar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Login;