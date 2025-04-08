import React from 'react';
import Navigation from "./Navigation"
import Sidebar from "./Sidebar"
import { Outlet } from 'react-router';

function Root() {
    return (
       <div className="container">
         <Navigation/>
         <Sidebar />
         <main className="content">
           <Outlet />
         </main>
       </div>
     )
  }
  
export default Root;