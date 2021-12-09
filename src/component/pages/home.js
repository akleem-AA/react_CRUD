import React,  {useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Home =() =>{
 // console.log('home start')  
  
  const [users , setUser]=useState([]);
    useEffect(()=>{
        // console.log("hellow CRUD")check run func..
        loadUsers()
    },[]);

    const loadUsers= async ()=>{
        const result=await axios.get("http://localhost:3003/users?_sort=id&_order=desc")
           setUser(result.data)
    }

    const deleteUser = async id => {
      await axios.delete(`http://localhost:3003/users/${id}`);
      loadUsers();
    };
  

    return (
     <div className="container">
         <div className="py-4">
             <h1>Dashboard</h1>
             <table class="table border shadow">
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>  
      <th scope="col">Last</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">College</th>
      <td>Action</td>

    </tr>
  </thead>
  <tbody>
      {
      users.map((user, index) => (
        <tr>
          <th scope="row">{index + 1}</th>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>{user.college}</td>
          <td>
                  <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
                </td>
        </tr>
        ))
      };
  </tbody>
</table>
         </div>
     </div>
    );
    };
    
  
    export default Home;