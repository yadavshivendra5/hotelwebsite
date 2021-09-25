import React from 'react'
import RoomFilter from '../components/RoomFilter'
import Hero from '../components/Hero'
import SingleRoom from './SingleRoom'
export default function Room() {
    return (
        <div style={{height:'60vh'}}>
        <RoomFilter/>
            <SingleRoom/>
            <Hero/>
        </div>
    )
}
