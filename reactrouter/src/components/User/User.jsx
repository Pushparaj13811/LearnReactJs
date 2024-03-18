import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { userid } = useParams();
    return (
        <div className='bg-green-700 text-3xl text-white p-4 mt-40 mb-40'>
            User : {userid}
        </div>
    )
}

export default User
