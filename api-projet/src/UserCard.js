import React from 'react'

function UserCard({User}) {
    return (
        <div  className="card" >
            <label>Name : <span>{User.name}</span>  </label>
            <label>Email : <span>{User.email}</span> </label>
            <label>Adresse : <span>{User.address.street} {User.address.suite} ,{User.address.city}</span></label>
            <label>Phone : <span>{User.phone}</span></label>
            <label>Website : <span>{User.website}</span></label>
            <label>company :  <span>{User.company.name}</span></label>


        </div>
    )
}

export default UserCard
