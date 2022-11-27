import React, { useState,  useEffect } from "react";
import item from '../assets/images/image-product-desktop.jpg';
import mitem from '../assets/images/image-product-mobile.jpg';
import cart from '../assets/images/icon-cart.svg';
import './card.css';

export default function Card(props) {
    const[mobile, setMobile] = useState(window.innerWidth > 650? false: true);
    let flag = window.innerWidth > 650? false: true;
    const handleResize = () => {
        if(window.innerWidth < 650 && flag===false){
            flag = true;
            setMobile(true)
        } else if (window.innerWidth > 650 && flag===true){
            flag = false;
            setMobile(false)
        }
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return(
        <div className="card">
            <img className="card-image" src={mobile ? mitem :item} alt="item" />
            <div className="card-content">
                <div className="category">PERFUME</div>
                <h1 className="title">Gabrielle Essence Eau De Parfum</h1>
                <div className="desc" >A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</div>
                <div className="money">
                    <h1>$149.99</h1>
                    <div className="discount">$169.99</div>
                </div>
                <div className="buy">
                    <img src={cart} alt="cart" />
                    <div className="text">Add to Cart</div>
                </div>
            </div>
        </div>
    )
}