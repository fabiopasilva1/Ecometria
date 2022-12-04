import React from "react";
import { ContentProvider } from "../context/ContextProvider";
import { Header, Navigation, NavTop, NavMobile, NavMobileTop, NavBar, BodyWrap, Footer, Bottom } from '../config/ComponentsAll'

import './styles/style.css'
import { useParams } from "react-router-dom";
import NavLinks from "../components/navigation/NavLinks";
import NavMobileLinks from "../components/navigation/NavMobileLinks";
import Content from "./Content";
import { PageProvider } from "../context/PageProvider";
const Pages = ({ children }) => {

    return (
        <ContentProvider>

            <Header>
                <NavMobile >
                    <NavMobileLinks />
                </NavMobile>
                <NavMobileTop />
                <Navigation >
                    <NavTop />
                    <NavBar >
                        <NavLinks />
                    </NavBar>
                </Navigation>
            </Header>
            <PageProvider>
                <BodyWrap>
                    <Content />
                </BodyWrap>
            </PageProvider>

            <Footer>
                <Bottom />
            </Footer>
        </ContentProvider>
    )
}

export default Pages; 