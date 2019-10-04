import React, { Component } from 'react'
import '../components/Home.css'



class Home extends Component {
    render() {
        return (
            <div className="container">
                <img className="highlight-photo" src={require('../photosource/HomePic-mnm.jpg')} />
                
            </div>
        )
    }
}

export default Home