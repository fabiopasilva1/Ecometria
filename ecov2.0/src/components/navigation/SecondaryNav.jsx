import React from 'react'
import CardCart from './components/SecondaryNav/CardCart/CardCart'
import CardCartFooter from './components/SecondaryNav/CardCart/CardCartFooter'
import CardCartList from './components/SecondaryNav/CardCart/CardCartList'
import CartHeading from './components/SecondaryNav/CardCart/CartHeading'
import CardUser from './components/SecondaryNav/CardUser/CardUser'
import CardUserFooter from './components/SecondaryNav/CardUser/CardUserFooter'
import CardUserList from './components/SecondaryNav/CardUser/CardUserList'
import CardUsertHeading from './components/SecondaryNav/CardUser/CardUsertHeading'
import IconMenu from './components/SecondaryNav/IconMenu'
import Search from './components/SecondaryNav/Search'
import './css/style.css'


const SecondaryNav = (props) => {
    const { data } = props;


    // console.log(data.visible)
    return (
        <div className={`navbar-secondary ${(data.visible) && data.visible}`} >
            <IconMenu />
            <Search />
            <CardCart >
                <CartHeading />
                <CardCartList />
                <CardCartFooter />
            </CardCart>
            <CardUser >
                <CardUsertHeading />
                <CardUserList />
                <CardUserFooter />
            </CardUser>

        </div>
    )
}

export default SecondaryNav