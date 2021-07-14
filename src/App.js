import React from "react";
import {useSelector} from "react-redux";
import Login from "./Components/Login";
import "./App.css";
import { selectUser } from "./features/userSlice";
import Logout from "./Components/Logout";


const App=()=>{
  const user=useSelector(selectUser);
  return (
    <>
    {user ? <Logout/>:<Login/>}
    </>
  );
}

export default App;
