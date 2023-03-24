import { useState } from 'react'
import NavBar from './NavBar'
import UserDetails from './UserDetails'

const GetUserByEmail = () => {
    const [email, setEmail] = useState("")
    const [users, setUsers] = useState(null)
    const [error, setError] = useState(null)
    const handleSubmit = async (event) => {
        event.preventDefault()
        const response = await fetch(`/api/users/${email}`)
        const json = await response.json()
        if (!response.ok) {

            setError(json.error)
        }
        else {
            setUsers(json)
            setEmail("")
            setError(null)

        }

    }
    return (
        <>
        <NavBar/>
            <form onSubmit={handleSubmit} >
                <h3 style={{color:"white"}}>Find a User</h3>
                <label>
                    Enter email:
                    <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
                </label>
                <button >Submit</button>
                {error && <div className="error">{error}</div>}
            </form>
            <div className="home">
                <div className="users">
                    {users && 
                        <UserDetails user={users} />
                    }
                </div>
            </div>
        </>
    )
}

export default GetUserByEmail