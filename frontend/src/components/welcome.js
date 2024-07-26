import React, {useState, useEffect} from 'react';
import  './welcome.css';
const WelcomePage = ({username})=>{
const [users, setUsers] = useState([]);

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then(Response => Response.json())
    .then(data => setUsers(data));
},[]);

return(
    <div class ='datatable'>
        <h2>Welcome {username}</h2>
        <table>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>User name</th>
            </tr>
                {users.map(user=>(
                    <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.username}</td>
                    </tr>
                ))}
        </table>
    </div>
)

}
export default WelcomePage;