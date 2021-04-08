import React, {useState} from 'react';
import axios from 'axios';

export default function Register() {
    const [formData, setformData] = useState({        
        name:"",
        email:"",        
        password:""    
    });

    const { name, email, password} = formData;

    const onChange = e => setformData({...formData, [e.target.name]: e.target.value});
    
    const onSubmit = e => {
        e.preventDefault();
        console.log(formData);
        axios.post('http://localhost:5000/api/auth/signup', formData, {
            headers: {
                'Content-Type': 'application/json',
            } }
            )
        .then(res=> {
            console.log(res);
        })
    }
    return (
        <div className="register">
            <form className="form" onSubmit={e => onSubmit(e)}> 
            <label htmlFor="name">Name</label>              
            <input 
            type="name" 
            name="name" 
            id="name" 
            value={name}
            onChange={e => onChange(e)}
            required/>
            <br/>
            <label htmlFor="email">E Mail</label>              
            <input 
            type="email" 
            name="email" 
            id="email" 
            value={email}
            onChange={e => onChange(e)}
            required/>
            <br/>
            <label htmlFor="password">Şifre</label>            
            <input 
            type="password" 
            name="password" 
            id="password" 
            value={password}
            onChange={e => onChange(e)}
            required/>
            <br/>
            <input type="submit" value="Gönder" />
            </form>
        </div>
    )
}