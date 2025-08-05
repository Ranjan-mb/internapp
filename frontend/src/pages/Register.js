import React, {useState} from 'react';
import axios from 'axios';

export default function Register(){
  const [form, setForm] = useState({ name:"", email:"", phone:"", role:"" })

  const handleChange = (e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    await axios.post("http://localhost:5000/api/applicants/register",form);
    alert("Applied Successfully");
    setForm({ name:"", email:"", phone:"", role:"" });
  }

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required /><br/>
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required /><br/>
        <input type="text" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required /><br/>
        <input type="text" name="role" placeholder="Role Applied" value={form.role} onChange={handleChange} required /><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
