import React, { useState } from 'react'
import Header from '../components/common/header/Header'
import Footer from '../components/common/footer/Footer'
import TabOptions from '../components/common/tabOptions/TabOptions'
import Delivery from '../components/common/delivery/Delivery'
import DiningOut from '../components/common/diningout/DiningOut'
import NightLife from '../components/common/nightlife/NightLife'

const Index = () => {

    const [activeTab, setActiveTab] = useState('Delivery')

    return (
        <>
            <Header />
            <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
            {getCorrectScreen(activeTab)}
            <Footer />
        </>
    )
}

const getCorrectScreen = (tab) => {
    switch (tab) {
        case "Delivery":
            return <Delivery /> 
        case "Dining Out":
            return <DiningOut /> 
        case "Night Life":
            return <NightLife /> 
        default:
            return <Delivery /> 
    }
}

export default Index
