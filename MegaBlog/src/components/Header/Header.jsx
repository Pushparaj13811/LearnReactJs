import React, { act } from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigation } from '../../hooks/useNavigation'

function Header() {

    const isAuthenticated = useSelector((state) => state.auth.status)
    const navigate = useNavigation()

    const navItems = [{
        title: 'Home',
        url: '/',
        active: true
    }, {
        title: 'Login',
        url: '/login',
        active: !isAuthenticated,
    }, {
        title: 'Signup',
        url: '/signup',
        active: !isAuthenticated
    },
    {
        title: "All Posts",
        url: "/all-posts",
        active: isAuthenticated
    },
    {
        title: "Create Post",
        url: "/create-post",
        active: isAuthenticated
    }]

    return (
        <header className='py-3 shadow bg-gray-200'>
            <Container>
                <nav className='flex'>
                    <div className='mr-4'>
                        <Link to="/">
                            <Logo width="100px" />
                        </Link>
                    </div>
                    <ul className='flex ml-auto'>
                        {
                            navItems.map((item, index) => {
                                return (
                                    item.active ? (
                                        <li key={item.name}>
                                            <button
                                                onClick={() => navigate(item.url)}
                                                className='inline-block px-6 py-2 duration-200 hover:bg-blue-300 rounded-full'
                                            >
                                                {item.name}</button>
                                        </li>
                                    ) : null
                                )
                            })
                        }
                        {
                            isAuthenticated && (
                                <li>
                                    <LogoutBtn />
                                </li>
                            )
                        }
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Header
