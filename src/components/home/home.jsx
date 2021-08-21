import React from 'react'
import './home.css'
import Body from '../body/body'
import Footer from '../footer/footer'
import Header from '../header/header'


function Home() {
    return (
        <div className="home">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

export default Home