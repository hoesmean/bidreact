import React, {
    useState,
    useEffect
    } from "react";
import axios from "axios";

    export default function User() {
    const [user, setUser] = useState([]);
    const API_URL = "http://localhost:5000";

    useEffect(() => {
        axios
        .get(`${API_URL}/user`)
        .then((res) => {
        console.log(res);
        setUser(res.data);
        })
        .catch((err) => {
        console.log(err);
        });
    }, []);

    return (
        <div>
        <ul>
            {user.map((user) => (
            <div key={user.id}>
                <h5>{user.userName}</h5>
                <img
                src={API_URL + "/" + user.path}
                alt="jmage"
                />
            </div>
            ))}
        </ul>
        </div>
    );
}
