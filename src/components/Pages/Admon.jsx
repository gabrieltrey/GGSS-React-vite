import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from "react";
import NewUser from "../Layout/NewUser";
import UserList from "../Layout/UserList";
import UserSearch from "../Layout/UserSearch";
import NavBarAdmon from "../Layout/NavbarAdmon";

const Admon = () => {
  return (
    <div>
      <NavBarAdmon></NavBarAdmon>
      <Routes>
        <Route path="/admon/newuser" element={<NewUser />} />
        <Route path="/admon/usersearch" element={<UserSearch />} />
        <Route path="/admon/userlist" element={<UserList />} />
      </Routes>
    </div>
  );
};

export default Admon;
