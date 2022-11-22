import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function FormUser() {
  const [name, setName] = useState();
  const [avatar, setAvatar] = useState();
  let params = useParams();

  useEffect(() => {
    getUser(params.id);
  }, [params.id]);

  const getUser = (userId: string | undefined) => {
    let url = "https://634ea39cf34e1ed826920b12.mockapi.io/users/" + userId;
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setName(data?.name);
        setAvatar(data?.avatar);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const updateUser = (data: any, userId: string) => {
    // call api postUser
    let url = "https://634ea39cf34e1ed826920b12.mockapi.io/users/" + userId;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  const postUser = (data: any) => {
    const url = "https://634ea39cf34e1ed826920b12.mockapi.io/users";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((json) => {
        // Xử lý kết quả JSON ở đây
        console.log(json);
      })
      .catch((error) => {
        // Nếu có lỗi
        console.error(error);
      });
  };

  const handleChange = (e: any) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "avatar":
        setAvatar(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    const data = {
      name: name,
      avatar: avatar,
    };
    if (params.id) {
      updateUser(data, params.id);
    } else {
      postUser(data);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          type="text"
          name="name"
          value={name ? name : ""}
          onChange={handleChange}
        />
        <input
          placeholder="avatar"
          type="text"
          name="avatar"
          value={avatar ? avatar : ""}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormUser;
