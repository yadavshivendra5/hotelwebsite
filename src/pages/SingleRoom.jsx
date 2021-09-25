import React, { Component } from 'react'
import IMAGES from '../images/index';
import {Link} from 'react-router-dom'

export default class SingleRoom extends Component {
    render() {
        return (
            <div style={{display:'flex',justifyContent:'center'}}>

                <h1>single Economy</h1>
                <Link to="/description">
                <img src={IMAGES.img1} alt=""/>
                <img src={IMAGES.img2} alt=""/>
                <img src ={IMAGES.img3} alt=""/>
                </Link>
                <h1>Double Deluxe</h1>
                <Link to="/double-room">
                <img src={IMAGES.img6} alt=""/>
                <img src={IMAGES.img7} alt =""/>
                <img src={IMAGES.img8} alt =""/>
                </Link>
               
                
            </div>
        )
    }
}
