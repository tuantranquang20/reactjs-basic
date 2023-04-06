import React, { useState, useEffect } from "react";
import "./App.css";

type Users = {
  username: string;
  _id: string;
  email: string;
};

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/user")
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        setUsers(data?.data);
      });
  }, []);

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: Users) => (
            <tr key={user._id}>
              <td className="number">{user._id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
