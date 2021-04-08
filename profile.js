import React from 'react'
import { useParams } from 'react-router-dom'

export default function Profile({User}) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {userId} = useParams();
    return (
        <div>
            {User
            //.filter(user => user.id === userId)
            ?.map((user) => (
                <div key={userId} >
                    <h1>{user.name}</h1>
                    <h2>{user.email}</h2>
                </div>
            ))}
            
        </div>
    )
}

