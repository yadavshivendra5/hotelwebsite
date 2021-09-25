import React, { Component } from 'react'
import {FaAlignRight} from "react-icons/fa"
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
    // constructor(props){
    //     super(props)
    //     this.state={
    //         isOpen:false
    //     }
    // }
    // handleToggle=()=>{
    //     this.setState({isOpen:!this.state.isOpen})
    // }

    render() {
        return <nav>
        <div>
        <Link to ="/">LOGO</Link>
        </div>
        <div>

        <div>
       <button type="button" ><FaAlignRight/> </button>
        </div>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li> <Link to="/rooms">Room</Link></li>
        </ul>
       
        </div>
        </nav>
    }
}
