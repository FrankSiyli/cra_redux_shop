import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../../redux/slices/usersSlice";
import { useState } from "react";

const Users = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.users.value.username);
  const [newUsername, setNewUsername] = useState("");
  const handleLogin = () => {
    dispatch(login({ username: newUsername }));
    setNewUsername("");
  };

  return (
    <>
      <h4>{username}</h4>
      <input
        type="text"
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
      />
      <button onClick={handleLogin}>login</button>
      <button onClick={() => dispatch(logout())}>logout</button>
      <hr />
    </>
  );
};

export default Users;
