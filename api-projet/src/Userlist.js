import React,{useState,useEffect} from 'react'
import axios from 'axios'
function Userlist() {
    const [Users, setUsers] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(Response=>setUsers (Response.data))
        .catch(err => {
            console.log(err);
        });
        
        
    }, [setUsers])
    return (
        <div className="Container">
            <h1>Users</h1>
        <ul>
            { Users.map((User)=>( <li key="User.id"   className="list-item">{User.name} </li>))}
          
              
            
        </ul>
        </div>
    )
}

export default Userlist
