import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function Admin(){
  const [data,setData] = useState([]);

  useEffect(()=>{
    async function fetchData(){
      const res = await axios.get("http://localhost:5000/api/applicants");
      setData(res.data);
    }
    fetchData();
  },[])

  return(
    <div>
      <h2>Admin Dashboard - Applicants</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Phone</th><th>Role</th><th>Applied On</th>
          </tr>
        </thead>
        <tbody>
          {data.map((a)=>(
            <tr key={a._id}>
              <td>{a.name}</td>
              <td>{a.email}</td>
              <td>{a.phone}</td>
              <td>{a.role}</td>
              <td>{new Date(a.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
