import React, { Component } from 'react'

export default class RoomFilter extends Component {
    constructor(props){
        super(props);
         this.handleSubmit=this.handleSubmit.bind(this)
         this.handleChange=this.handleChange.bind(this)
        this.state={value: ''};
    }

    handleSubmit(e){
        e.preventDefault();
        alert(`you have selected + " " + {this.state.value}`);
    }

    handleChange(e){
        this.setState({value:e.target.value})
       
    }



    render() {
        console.log(this.props)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>
                <h3>Select Rooms:</h3>
                <select value={this.state.value} onChange={this.handleChange}>
                <option value="all">All</option>
                <option value="single-rooms">Single</option>
                <option value="double-rooms">Double</option>
                <option value="family-rooms">Family</option>
                <option value="presidential-rooms">Presidential</option>
                </select>
                </label>
                <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}
