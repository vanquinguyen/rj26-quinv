import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function List() {
  const [listProjects, setListProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getListProject();
  }, []);

  //get Project
  const getListProject = () => {
    fetch(
      "https://634ea39cf34e1ed826920b12.mockapi.io/projects?page=1&limit=10",
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setListProjects(data);
        // setState listuser -> cpn re-render -> listuser = data
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleDelete = (projectId: number) => {
    console.log(projectId);

    fetch("https://634ea39cf34e1ed826920b12.mockapi.io/projects/" + projectId, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        getListProject();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const gotocreate = () => {
    navigate("/form");
  };

  return (
    <div style={{width: '90vw', margin: '8% auto'}}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Chức Năng</th>
          </tr>
        </thead>
        <tbody>
          {listProjects.map((project: any) => {
            return (
              <tr key={project.id}>
                <th scope="row">{project.id}</th>
                <td>{project.name}</td>
                <td>
                  {/* <button onClick={() => handleDelete(user.id)}>Delete</button>
              <button onClick={() => gotocreate(user.id)}>Update</button> */}
                  <button style={{background: 'red', outline: 'none', border: 'none', padding: '10px', borderRadius: '5px'}} onClick={() => handleDelete(project.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button style={{background: 'green', outline: 'none', border: 'none', padding: '10px', borderRadius: '5px'}} onClick={() => gotocreate()}>Create</button>
    </div>
  );
}

export default List;
