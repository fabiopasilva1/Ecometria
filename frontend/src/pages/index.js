import React from "react";
import './assets/css/index.css'
import Features from "./components/freatures";
import { useParams } from "react-router-dom";
import NavMobile from "../components/Headers/navbars/navmobile";
import Navbar from "../components/Headers/navbars";
import TopNav from "../components/Headers/topnav";
import NavBarLinks from "../components/Headers/navbars/navlinks";
import HeaderSlider from "../components/Headers/headerSlider";
import Header from "../components/header";
import { Fragment, useEffect, useState } from "react";
import Breadcrumbs from "../components/Headers/breadcrumbs";
import Highlight from "./components/hightligth";
import Buynow from "./components/buynow";
import Testimonials from "./components/testimonials";
import ContentContext from "../config/ContentContext";
import DataAPI from "../config/dataAPI"
import NavBarMobileLinks from "../components/Headers/navbars/navlinksMobile";
import Page404 from "./page404";
import Footer from "../components/Footer";
import PageContent from "./components/pageContent";
import SectionsPage from "./components/sectionsPage";
import Loja from "./store";
import Produto from "./store/components/produto";


const Pages = () => {
    let { pageName } = useParams();
    ////destruturing dataAPI
    const { dataState } = DataAPI()
    const [dcon, setDcon] = useState([])

    useEffect(() => {
        if (dataState.length !== 0) {
            // eslint-disable-next-line
            dataState.data.map((dataContext) => {
                setDcon(dataContext)
            })
        }

    }, [dataState])

    /// Página não encontrada
    function getPage404() {
        if (dcon.length === 0 || dcon === undefined) {
            return <Page404 />
        }
    }


    // components header
    function componentHeaders() {
        if (pageName === undefined) {
            return <HeaderSlider />

        }
    }


    function compBreadcrumbs() {
        if (dcon.length !== 0) {
            if (dcon.attributes.Breadcrumb === true) {
                return <Breadcrumbs />
            }
        }
    }

    /// Conteudo da página
    const ContentPage = () => {
        if (pageName === undefined) {
            // se a página for home
            return (
                <Fragment>
                    <Features />
                    <Highlight />
                    <Buynow />
                    <Testimonials />
                </Fragment>
            )
        }



    }





    const Content = () => {
        if (pageName === undefined) {
            // return `Página Comum usando parametros ${(params) ? params : ''}`
            return <PageContent />
        }

        if (pageName === 'loja') {
            return (
                <div className="container">
                    <Loja />
                </div>
            )
        }

        if (pageName === "produto") {
            return <Produto />;
        }
    }



    return (
        <ContentContext.Provider value={dcon}>
            <NavMobile>
                <NavBarMobileLinks />

            </NavMobile>
            <div id="body-wrap">


                <Header >
                    <Navbar >
                        <TopNav />

                        <NavBarLinks />
                    </Navbar>

                    {compBreadcrumbs()}
                    {componentHeaders()}

                </Header>

                {ContentPage()}

                {Content()}
                {/* <PageContent /> */}
                <div id="content">

                    <div className="container padding-top80 padding-bottom40">
                        <SectionsPage />
                    </div>
                </div>
                {/* <Content /> */}
                {getPage404()}
                <Footer />
            </div>
        </ContentContext.Provider>

    )

}


export default Pages;