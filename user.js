/* eslint-disable no-template-curly-in-string */
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function User() {
    const [user, setUser] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/users')
        .then(res => {
            console.log(res)
            setUser(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div>
            <ul>
                {
                    user.map(user =>  
                    <h1 key={user.id}>
                        <Link to={`/Profile/${user.id}`}>{user.name}</Link> 
                        </h1> )
                }   
                
            </ul>
        </div>
    )
}


