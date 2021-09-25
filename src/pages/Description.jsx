import React, { Component } from 'react'
import Hero from '../components/Hero'
import img from '../images/index'

export default class Description extends Component {
    constructor(props){
        super(props)
        this.state={
            details:[
               { name:"single-economy",
                slug:'single-economy',
                type:"single",
                price:"$100",
                size:"200 SQFT",
                capacity:"2 People",
                pets:"Allowed",
                Breakfast:"Free Breakfast included",

                brief:"A hotel is an establishment that provides paid lodging on a short-term basis. ... Hotel rooms are usually numbered (or named in some smaller hotels and B&Bs) to allow guests to identify their room. Some boutique, high-end hotels have custom decorated rooms",

                extras: [
                    
                    "plush pillows and breathable bed lines",
                    "soft, oversized bath towels",
                    "Full-sized, pH-balanced tioletries",
                    "Complimentary refreshments",
                    "Adequate safety/security",
                    "Internet",
                    "Comfortable Beds"
                  ],

                  image:[
                      
                  ]
            },
            ]
        }
    }
    render() {
        return (
            <div>
                    <h1>Hello Description</h1>
                    {this.state.details.map((items)=>{
                        return(
                            <div style={{width:'30%'}}>
                            <div style={{display:"flex",justifyContent:'flex-start'}}>
                            <img src={img.img1} alt=""/>
                            </div>
                            <h3>{items.name}</h3>
                            <p >{items.brief}</p>
                            <div>
                            <ul>
                            <h3>Info:</h3>
                            <li>Price: {items.price}</li>
                            <li>Size: {items.size}</li>
                            <li>Max Capacity: {items.capacity}</li>
                            <li>Free Breakfast: {items.Breakfast}</li>
                            </ul>
                            </div>
                            <ul>
                            <h3>Extras:</h3>
                            <p>{items.extras}</p>
                            </ul>
                            </div>
                            
                        )
                    })}
               <Hero/> 
            </div>
        )
    }
}
