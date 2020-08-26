import React,{useState,useEffect} from 'react'
import axios from 'axios'
import UserCard from './UserCard'
function Userlist() {
    const [Users, setUsers] = useState([])
    const [loading,setloading]=useState(false)
    useEffect(() => {
        setloading(true)
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(Response=>{setUsers (Response.data)
        setloading(false)})
        .catch(err => {
            console.log(err);
        });
        
        
    }, [setUsers])
    return (
        <div className="Container">
            <h1>Users</h1>
            {loading &&   <p>It's loading</p>}
            {!loading &&
        <div  className="list-card">
            { Users.map((User)=>( <UserCard key="User.id"  User={User} />))}
          
              
            
        </div>}
        </div>
    )
}

export default Userlist
