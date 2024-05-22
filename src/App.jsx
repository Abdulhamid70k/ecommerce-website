import React from "react";
import Home from "./components/Home";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Details from "./components/Details";
const App = () => {
  const {search, pathname} = useLocation()
  return (
    <div className="h-screen w-screen flex">
      
      {(pathname != '/' || search.length > 0) && (<Link
        className="absolute left-[17%] top-[5%] rounded-md text-blue-300 border px-7 py-2 border-blue-400"
        to="/"
      >
        Home
      </Link>)}
      
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/details/:id' element = {<Details/>} />
      </Routes>
    </div>
  );
};

export default App;
