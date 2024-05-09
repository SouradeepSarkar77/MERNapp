import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserData from './UserData'

const API = "https://jsonplaceholder.typicode.com/users";

function Home() {
    const navigate = useNavigate();
    const [authenticated, setAuthenticated] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn'); 
        
        if (!isLoggedIn) {
            navigate('/signin');
        } else {
            setAuthenticated(true);
        }
    }, [navigate]);

    const fetchUsers = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data.length > 0) {
                setUsers(data);
            }
            console.log(data);
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        fetchUsers(API);
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        setAuthenticated(false);
        navigate('/signin');
    }

    if (!authenticated) {
        return null;
    }

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center">
                <h1>Welcome to the Home Page!</h1>
                <button onClick={handleLogout} className="btn btn-success rounded-0">Log Out</button>
            </div>
            <h1 className="mt-5 pb-0 d-flex justify-content-center align-items-center">User List</h1>
            <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Address</th>
            </tr>
            </thead>
            <tbody>
                <UserData users={users}/>
            </tbody>
        </table>
        </div>
    );
}

export default Home;