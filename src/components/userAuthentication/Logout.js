import React, { useState } from 'react'
import { Alert, Button, Card } from 'react-bootstrap'
import { useHistory, Link } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

export default function Logout() {
    const [error, setError] = useState('')
    const { currentUser, logout } = useAuth();
    const history = useHistory()
    async function handleLogout() {
        setError('')

        try {
            await logout()
            history.push('/userlogin')
        } catch {
            setError('Failed to Logout')
        }
    }
    return (
        <div>
            {handleLogout()}
        </div>
    )
}
