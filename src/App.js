import React from "react";
import DashBoard from "./dashboard/DashBoard";
import Users from "./Components/Users/users";
import Blank from "./dashboard/blank";
import Error404 from "./Components/Error404";
import Error500 from "./Components/Error500";
import Login from "./Components/Login";
import Register from "./Components/Register";
import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Blank />} >

            <Route index element={<DashBoard />} />
            <Route path="users" element={<Users />} />

        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/error500" element={<Error500 />} />
        <Route path="/error404" element={<Error404 />} />
        <Route path="/*" element={<Error404/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
