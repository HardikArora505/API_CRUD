import { useEffect, useState } from "react"
import UserDetails from "./UserDetails"
import NavBar from "./NavBar"
const GetAllUsers = () => {
    const [users, setUsers] = useState(null)
    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch("/api/users")
            const json = await response.json()
            if (response.ok) {
                setUsers(json)
                console.log(json)
            }
            else {
                console.log("No repsonse")
            }
        }
        fetchUsers()
    }, [])
    return (
        <>
            <NavBar />
            <div className="home">
                <div className="users">
                    {users && users.map((user) => {
                        return <UserDetails key={user._id} user={user} />
                    })}
                </div>
            </div>
        </>
    )
}
export default GetAllUsers
