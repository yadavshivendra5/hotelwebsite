import React, {Component} from 'react'
import {Link} from 'react-router-dom'



export default class FeaturedComp extends Component{
    
    render(){
    
        return(
            <div>
            <h1>Rooms Featured</h1>
                {this.props.optiondata.map((data) =>{
                    return(
                        <div key={data.id} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <ul>
                     <Link to={data.path}><li>{data.title}</li> </Link> 
                        {data.type}
                       </ul>
                        </div>
                    )
                })}
            
            </div>
        )
    }
}