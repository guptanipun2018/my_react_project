import { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css'
function App() {

  const [users,setUser] = useState([]);
  useEffect(()=>{
    axios.get()
    .then(res => setUser(res.data))
    .catch(err => console.log(err));
  },[]);
  return(
    <div className="table">
      <table>
        <thead>
          <tr>
            <th> Name </th>
            <th> College_Name </th>
            <th> Email_ID </th>
            <th> Year_Of_Graduation</th>
            <th> Location </th>
          </tr>
        </thead>
        <tbody>
          {users.map(user =>(
            <tr>
            <td> {user.name} </td>
            <td> {user.college} </td>
            <td> {user.college} </td>
            <td> {user.year} </td>
            <td> {user.location} </td>
          </tr>
          ))}
        </tbody>
        
      </table>
    </div>
  )
}

export default App;
