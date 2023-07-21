import React from "react";
import Nav from "../components/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Paths from "../pages/Paths";
import People from "../pages/People";
import PersonDetail from "../pages/PersonDetail";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Footer from "../components/Footer";
import { FullStack } from "../pages/FullStack";
import { Aws } from "../pages/Aws";
import { PrivateRouter } from "./PrivateRouter";
import { Login } from "../pages/Login";
import { useState } from "react";

export const AppRouter = () => {

  const [user, setuser] = useState(false)
  
  return (
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/paths" element={<Paths />}>
        <Route index element={<FullStack/>}/>
        <Route path="aws" element={<Aws/>}/>
      </Route>
      <Route path="/people" element={<People />} />
      <Route path="/people/:id" element={<PersonDetail />} />

      <Route element={<PrivateRouter user={user}/>}>
      <Route path="/contact" element={<Contact />} />
      </Route>
      
      <Route path="*" element={<NotFound />} />

      <Route path="/login" element={<Login setuser={setuser}/>}/>
    </Routes>
    
    <Footer />
  </>
  )
}
