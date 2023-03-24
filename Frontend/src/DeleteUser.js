import NavBar from "./NavBar"
import { useState } from 'react'


const DeleteUser = () => {
  const [email, setEmail] = useState("")
  const [users, setUsers] = useState("")
  const [error, setError] = useState(null)
  const handleSubmit = async (event) => {
      event.preventDefault()
      const response = await fetch(`/api/users/${email}`,{
        method:"DELETE"
      })
      const json = await response.json()
      if (!response.ok) {
        setUsers("")
          setError(json.error)
      }
      else {
          setUsers("User Deleted Successfully")
          setEmail("")
          setError(null)

      }

  }
  return (
    <>
    <NavBar/>
        <form onSubmit={handleSubmit} method="patch">
            <h3 style={{color:"white"}}>Delete a User</h3>
            <label>
                Enter Email:
                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
            </label>
            <button >Submit</button>
            {error && <div className="error">{error}</div>}
        </form>
        <div className="home">
            <div className="users" style={{color:"green"}}>
                {users+" with email : "+email}
            </div>
        </div>
    </>
  )
}

export default DeleteUser