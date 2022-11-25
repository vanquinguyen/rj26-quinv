import path from 'path';
import React from 'react'
import { useState } from 'react';
import { BrowserRouter, Link, Route, Routes, useParams } from 'react-router-dom'
import FormProjects from './FormProjects';
import Home from './Home';
import List from './List';
import Login from './Login';
import styles from "./styles.module.css";


function Router() {
  const [isLogin, setIsLogin] = useState(false)
  return (
    <div>
        <BrowserRouter>
        {/* NAVIGATION */}
        <ul className={styles.navigation}>
          <li className={styles.link}>
            <Link to="/home">Home</Link>
          </li>
          <li className={styles.link}>
            <Link to="/listUser">List User</Link>
          </li>
          <li className={styles.link}>
            <Link to="/form">Form</Link>
          </li>
          <li className={styles.link}>

            <Link to="/" onClick={()=>setIsLogin(false)}>{ !isLogin ? 'Login' : 'Logout'}</Link>
          </li>
        </ul>

        {/* ROUTES SETTINGS */}
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/listUser' element={<List />} />
          <Route path='/form' element={<FormProjects/>} />
          <Route path='/' element={<Login setIsLogin={setIsLogin}/>}/>

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
  )
}

export default Router