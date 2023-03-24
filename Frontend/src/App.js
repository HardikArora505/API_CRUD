import DashBoard from "./DashBoard";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import GetAllUsers from "./GetAllUsers";
import CreateUser from "./CreateUser";
import GetUserByEmail from "./GetUserByEmail";
import DeleteUser from "./DeleteUser";
import UpdateUser from "./UpdateUser";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<DashBoard/>} /> 
      <Route path="getalluser" element={<GetAllUsers/>} /> 
      <Route path="getuserbyid" element={<GetUserByEmail/>} /> 
      <Route path="createuser" element={<CreateUser/>} /> 
      <Route path="deleteuser" element={<DeleteUser/>} /> 
      <Route path="updateuser" element={<UpdateUser/>} /> 
    </Routes >
    </BrowserRouter>
  );
}

export default App;
