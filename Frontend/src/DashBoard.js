import "./CSS/Dashboard.css"
import {Link} from "react-router-dom"
import NavBar from "./NavBar"
const DashBoard = () => {
    return (
        <>
        <NavBar/>
        <div class="dashboard">
            <Link to="/getalluser"><div id="getuser">Get all users</div></Link>
            <Link to="/getuserbyid"><div id="getuserid">Get user by email</div></Link>
            <Link to="/createuser"><div id="createuser">Create User</div></Link>
            <Link to="/deleteuser"><div id="deleteuser">Delete User</div></Link>
            <Link to="/updateuser"><div id="updateuser">Update User</div></Link>
        </div>
        </>
    )
}

export default DashBoard