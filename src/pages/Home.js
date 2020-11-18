import React, {useState} from 'react'
import GemstoneItems from '../containers/GemstoneItems/GemstoneItems'
import Main from '../containers/MainSection/Main'
import Benefits from '../containers/Benefits/benefits'

const Home = () => {

    return (
        <>
            <Main/>
            <GemstoneItems/>
            <Benefits/>
        </>
    )
}

export default Home
