import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const handleLogout = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
    return (
        <button onClick={handleLogout} className='text-white bg-red-500 px-4 py-2 rounded-md'>Logout</button>
    )
}

export default LogoutBtn
