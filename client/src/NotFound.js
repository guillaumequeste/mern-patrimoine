import React, { Component } from 'react'
import Header from './Nav'

class NotFound extends Component {
  
    render () {
        return (
            <div>
                <Header />
                <h2>404 Not Found</h2>
            </div>
        )
    }
}

export default NotFound