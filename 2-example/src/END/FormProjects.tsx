import React, { useState } from "react";

function FormProjects() {
  const [name, setName] = useState();

  const postUser = (data: any) => {
    const url = "https://634ea39cf34e1ed826920b12.mockapi.io/projects";
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
        alert("Project đã được tạo thành công");
      })
      .catch((error) => {
        // Nếu có lỗi
        console.error(error);
        alert("Project chưa được tạo. Vui lòng thử lại.");
      });
  };

  const handleChange = (e: any) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      name: name,
    };
    postUser(data);
  };

  return (
    <div className="login-page">
        <div className="form">
          <form className="login-form" onSubmit={handleSubmit}>
            <input
              placeholder="Name"
              type="text"
              name="name"
              value={name ? name : ""}
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
            {/* <p className="message">
              Not registered? <a href="#">Create an account</a>
            </p> */}
          </form>
        </div>
      </div>
  );
}

export default FormProjects;
