import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({ children, authentication = true }) {


    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const isAuthenticated = useSelector(state => state.auth.status)


    useEffect(() => {

        // it can be complex so we can make it more easy 
        if (authentication && isAuthenticated !== authentication) { // 
            navigate('/login')

        } else if (!authentication && isAuthenticated !== authentication) {
            navigate('/')
        }
        setLoading(false)
    }, [isAuthenticated, navigate, authentication])




    return (
        loading ? <h1>Loading....</h1> : children
    )
}


