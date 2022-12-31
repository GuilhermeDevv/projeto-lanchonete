import axios from 'axios';
import React, { useEffect } from 'react';
import { Route, useLocation, useNavigate } from "react-router-dom"
export function C_home(props) {
    const location = useLocation();
    const state = location.state

    const navigate = useNavigate()
    useEffect(() => {
        if (!state) {
            navigate("/")
        } else {
            const { email } = location.state
            axios.get("/user", { params: { email } }).then(response => { console.log(response) })
        }

    }, [])
    return (
        <div>
            <h1>

            </h1>
        </div>
    );
}

