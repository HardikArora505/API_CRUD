

const UserDetails = ({user}) => {
    return (
     <div className="user-details">
      <h4>{user.name}</h4>
      <p><strong>Age:</strong>{user.age}</p>
      <p><strong>Email:</strong>{user.email}</p>
      <p><strong>Gender:</strong>{user.gender}</p>
      <p><strong>MobileNumber:</strong>{user.mobileNumber}</p>
      <p><strong>Birthday:</strong>{user.birthday}</p>
      <p><strong>City:</strong>{user.city}</p>
      <p><strong>State:</strong>{user.state}</p>
      <p><strong>Country:</strong>{user.country}</p>
      <p><strong>Address1:</strong>{user.address1}</p>
      <p><strong>Address2:</strong>{user.address2}</p>
      <p>{user.createdAt}</p>
     </div>
    )
  }
  
  export default UserDetails