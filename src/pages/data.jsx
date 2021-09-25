import React, { Component } from 'react'
// import Description from './Description'
export default class Data extends Component {
    constructor(props){
        super(props)
        this.state= {
          optionText:  [{
                name:"single-economy",
                slug:'single-economy',
                type:"single",
                price:"$100",
                size:"200 SQFT",
                capacity:"2 People",
                pets:"Allowed",
                breakfast:"Free Breakfast Included",
                // featured:false,
                description:"A hotel is an establishment that provides paid lodging on a short-term basis. ... Hotel rooms are usually numbered (or named in some smaller hotels and B&Bs) to allow guests to identify their room. Some boutique, high-end hotels have custom decorated rooms",
                extras: [
                    "plush pillows and breathable bed lines",
                    "soft, oversized bath towels",
                    "Full-sized, pH-balanced tioletries",
                    "Complimentary refreshments",
                    "Adequate safety/security",
                    "Internet",
                    "Comfortable Beds"
                  ],
        }]
        }        
        
       
                              
    }

    render() {
        return (
            <div>
                <Description data1={this.state.optionText}/>
            </div>
        )
    }
}


