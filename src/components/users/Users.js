import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../../redux/slices/usersSlice";

const Users = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.users.value.username);
  const [newUsername, setNewUsername] = useState("");
  const [isLoggedOut, setIsLoggedOut] = useState(true);

  const handleLogin = () => {
    if (newUsername === "") {
      alert("Please enter a username");
    } else {
      dispatch(login({ username: newUsername }));
      setIsLoggedOut(false);
      setNewUsername("");
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    setIsLoggedOut(true);
  };

  return (
    <>
      <h4>{username}</h4>
      <input
        type="text"
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
        required
      />
      <button onClick={handleLogin} disabled={!isLoggedOut}>
        Login
      </button>
      <button onClick={handleLogout}>Logout</button>
      <hr />
    </>
  );
};

export default Users;
