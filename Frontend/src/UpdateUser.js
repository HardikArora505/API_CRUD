import { useState } from 'react'
import NavBar from './NavBar'

function UpdateUser() {
    const [formData, setFormData] = useState({});
    const [error, setError] = useState(null);
    const [email, setEmail] = useState("")

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`/api/users/${email}`, {
            method: 'PATCH',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json()
        if (!response.ok) {
            setError(json.error)
        }
        else {
            setEmail("")
            setFormData({});
        }
        document.getElementById("updateform").style.display = "none"
    }
    const handleSub = async (event) => {
        event.preventDefault()
        const response = await fetch(`/api/users/${email}`)
        const json = await response.json()
        if (!response.ok) {
            setError(json.error)
        }
        else {
            document.getElementById("updateform").style.display = "block"
            setError(null)

        }

    }

    return (
        <>
            <NavBar />
            <form onSubmit={handleSub} >
                <h3 style={{ color: "white" }}>Enter user's email</h3>
                <label>
                    Enter email:
                    <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
                </label>
                <button >Submit</button>
                {error && <div className="error">{error}</div>}
            </form>


            <form id="updateform" onSubmit={handleSubmit} style={{ display: "none" }}>

                <label>
                    Name:
                    <input type="text" value={formData.name || ''} name="name" onChange={handleChange} />
                </label>
                <br />
                <label>
                    Age:
                    <input type="number" name="age" value={formData.age || ''} onChange={handleChange}  />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email || ''} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Gender:
                    <select value={formData.gender || ''} name="gender" onChange={handleChange} >
                        <option value="">Please select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </label>
                <br />
                <label>
                    Mobile Number:
                    <input type="tel" value={formData.mobileNumber || ''} name="mobileNumber" onChange={handleChange} pattern="[0-9]{10}" placeholder="1234567890"/>
                </label>
                <br />
                <label>
                    Birthday:
                    <input type="date" value={formData.birthday || ''} name="birthday" onChange={handleChange}/>
                </label>
                <br />
                <label>
                    City:
                    <input type="text" value={formData.city || ''} name="city" onChange={handleChange}/>
                </label>
                <br />
                <label>
                    State:
                    <input type="text" value={formData.state || ''} name="state"onChange={handleChange} />
                </label>
                <br />
                <label>
                    Country:
                    <input type="text" value={formData.country || ''} name="country" onChange={handleChange}/>
                </label>
                <br />
                <label>
                    Address Line 1:
                    <input type="text" value={formData.address1 || ''} name="address1" onChange={handleChange} />
                </label>
                <br />
                <label>
                    Address Line 2:
                    <input type="text" value={formData.address2 || ''} name="address2" onChange={handleChange} />
                </label>
                <br />
                <button type="submit">Submit</button>
                {error && <div className="error">{error}</div>}
            </form>

        </>
    );
}
export default UpdateUser;
