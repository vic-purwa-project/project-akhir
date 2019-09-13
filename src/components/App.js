import React, { Component } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Header from './Header'

import Signup from './Signup'
import Signin from './Signin'

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header/>
                    
                    <Route path='/signup' component={Signup} />
                    <Route path='/signin' component={Signin} />
                </BrowserRouter>
            </div>
        )
    }
}

export default App