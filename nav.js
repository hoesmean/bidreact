import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export default class Nav extends Component {
    render() {
        return (
            <nav>
                <Link to="/">
                <h3>LOGO</h3>
                </Link>
                
                <ul className="nav-links"> 
                <Link to='/'>
                <li>Home</li>
                </Link>
                
                <Link to='/Login'>
                <li>Login</li>
                </Link>
                
                <Link to='/Register'>
                <li>Register</li>
                </Link>

                <Link to='/User'>
                <li>User</li>
                </Link>

                <Link to='/User2'>
                <li>User2</li>
                </Link>
                </ul>
                

            </nav>
        )
    }
}