import React from "react";
import { BrowserRouter, Link, Routes, Route, useParams } from "react-router-dom";
import Detail from "../Session7/Detail";
import FormUser from "../Session7/FormUser";
import ListUser from "../Session7/ListUser";
import Home from "./Home";
import styles from "./styles.module.css";

function ReactRouter() {
  return (
    <div>
      <BrowserRouter>
        {/* NAVIGATION */}
        <ul className={styles.navigation}>
          <li className={styles.link}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.link}>
            <Link to="/listUser">List User</Link>
          </li>
          <li className={styles.link}>
            <Link to="/form">Form</Link>
          </li>
          {/* <li className={styles.link}>
            <Link to="/detail">Detail</Link>
          </li> */}
        </ul>

        {/* ROUTES SETTINGS */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/listUser' element={<ListUser />} />
          <Route path='/form' element={<FormUser />} />
          <Route path='/form/:id' element={<FormUser />} />
          <Route path='detail/:id' element={<Detail />} />

          {/* NO MATCH ROUTE */}
          <Route
            path='*'
            element={
              <main style={{ padding: '1rem' }}>
                <p>404 Page not found 😂😂😂</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default ReactRouter;
