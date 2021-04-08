import React, {useState} from 'react';
import axios from 'axios';

export default function Login() {
    const [formData, setformData] = useState({        
        email:"",        
        password:""    
    });

    const { email, password } = formData;

    const onChange = e => setformData({ ...formData, [e.target.name]: e.target.value });
    
    const onSubmit = e => {
        e.preventDefault();
        console.log(formData);
        axios.post('http://localhost:5000/api/auth/login', formData, {
            headers: {
                'Content-Type': 'application/json',
            } }
            )
        .then(res=> {
            console.log(res);
        })
    } 

    return (
        <div className="Login">
            <form className="form" onSubmit={e => onSubmit(e)}>            
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
            minLength="6"
            onChange={e => onChange(e)}
            required/>
            <br/>
            <input type="submit" value="Gönder" />
            </form>
        </div>
    )
}