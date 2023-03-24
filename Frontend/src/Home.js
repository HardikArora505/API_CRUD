import {useEffect,useState} from "react"
import UserDetails from "./UserDetails"
import UserForm from "./UserForm"
const Home = () => {
    const [users,setUsers]=useState(null)
    useEffect(()=>{
      const fetchUsers=async()=>{
        const response=await fetch("/api/users")
        const json=await response.json()
        if(response.ok){
          setUsers(json)
          console.log(json)
        }
        else{
          console.log("No repsonse")
        }
      }
      fetchUsers()
    },[])
    return (
      <div className="home">
        <div className="users">
          {users && users.map((user)=>{
            return <UserDetails key={user._id} user={user}/>
          })}
        </div>
        <UserForm/>
      </div>
    )
  }
  
  export default Home