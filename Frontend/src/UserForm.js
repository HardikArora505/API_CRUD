import React, { useState } from 'react';

function UserForm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [birthday, setBirthday] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [error, setError] = useState(null)

  const handleSubmit =async (event) => {
    event.preventDefault();
    const formData = {
        name,
        age,
        email,
        gender,
        mobileNumber,
        birthday,
        city,
        state,
        country,
        address1,
        address2
      };
      const response=await fetch('/api/users',{
        method:'POST',
        body:JSON.stringify(formData),
        headers:{
            'Content-Type':'application/json'
        }
    });
    const json=await response.json()
    if(!response.ok){
        setError(json.error)
    }
    else{
        setError(null)
        setName('')
        setAge('')
        setEmail('')
        setGender('')
        setMobileNumber('')
        setBirthday('')
        setCity('')
        setState('')
        setCountry('')
        setAddress1('')
        setAddress2('')
        console.log('new form submitted ',json)

    }

  }
  
  return (
    <form onSubmit={handleSubmit}>
        <h3 style={{color:"white"}}>Create User</h3>
      <label>
        Name:
        <input type="text" value={name} name="name" onChange={(event) => setName(event.target.value)} required />
      </label>
      <br />
      <label>
        Age:
        <input type="number" value={age}  onChange={(event) => setAge(event.target.value)} required />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
      </label>
      <br />
      <label>
        Gender:
        <select value={gender} onChange={(event) => setGender(event.target.value)} required>
          <option value="">Please select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      <br />
      <label>
        Mobile Number:
        <input type="tel" value={mobileNumber} onChange={(event) => setMobileNumber(event.target.value)} pattern="[0-9]{10}" placeholder="1234567890" required />
      </label>
      <br />
      <label>
        Birthday:
        <input type="date" value={birthday} onChange={(event) => setBirthday(event.target.value)} required />
      </label>
      <br />
      <label>
        City:
        <input type="text" value={city} onChange={(event) => setCity(event.target.value)} required />
      </label>
      <br />
      <label>
        State:
        <input type="text" value={state} onChange={(event) => setState(event.target.value)} required />
      </label>
      <br />
      <label>
        Country:
        <input type="text" value={country} onChange={(event) => setCountry(event.target.value)} required />
      </label>
      <br />
      <label>
        Address Line 1:
        <input type="text" value={address1} onChange={(event) => setAddress1(event.target.value)} required />
      </label>
      <br />
      <label>
        Address Line 2:
        <input type="text" value={address2} onChange={(event) => setAddress2(event.target.value)} />
      </label>
      <br />
      <button >Submit</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}

export default UserForm;
