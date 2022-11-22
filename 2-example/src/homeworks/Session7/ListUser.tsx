import React, { useEffect, useState } from "react";
import "./style.css";
import { useNavigate } from 'react-router-dom';


function ListUser() {
  const [listUser, setListUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getListUser();
  }, []);
  // get User
  const getListUser = () => {
    fetch("https://634ea39cf34e1ed826920b12.mockapi.io/users?page=1&limit=10", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setListUser(data);
        // setState listuser -> cpn re-render -> listuser = data
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleClickDetail = (userId: number) => {
    // console.log(userId);
    navigate('/detail/' + userId);
  }

  const gotoupdate = (userId: number) => {
    // console.log(userId);
    navigate('/form/' + userId);
  }

  const handleDelete = (userId: number) => {
    console.log(userId);
    
    fetch("https://634ea39cf34e1ed826920b12.mockapi.io/users/" + userId, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        getListUser();

      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Avatar</th>
        </tr>
      </thead>
      <tbody>
        {listUser.map((user: any) => {
          return (
            <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>
              <td>{user.avatar}</td>
              <td>
                <button onClick={() => handleClickDetail(user.id)}>Detail</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
                <button onClick={() => gotoupdate(user.id)}>Update</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ListUser;
