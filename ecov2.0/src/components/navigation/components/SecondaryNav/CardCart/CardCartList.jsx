import React from 'react'

const CardCartList = () => {
    return (
        <ul className="cart-list">
            <li>
                <a href="#" className="cart-btn-close">×</a>
                <img src="/assets/images/content/portfolios/square/1.jpg" alt="Thumbnail" />
                <div className="cart-content">
                    <p>1 x<span>$30</span></p>
                    <a href="#">Black Leather Dress</a>
                </div>
            </li>
            <li>
                <a href="#" className="cart-btn-close">×</a>
                <img src="/assets/images/content/portfolios/square/2.jpg" alt="Thumbnail" />
                <div className="cart-content">
                    <p>1 x<span>$30</span></p>
                    <a href="#">Black Leather Dress</a>
                </div>
            </li>
        </ul>
    )
}

export default CardCartList