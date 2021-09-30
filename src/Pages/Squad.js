import React from 'react'
import Navbar from '../Compenents/Navbar'
import { TabContent, TechStack } from '../UI/Molecules'
import { TabTest } from '../UI/Organisms'

export default function Squad() {
    return (
        <div>
            <Navbar/>
            <TabTest/>
            {/* <TabContent/> */}
            <TechStack/>
        </div>
    )
}
