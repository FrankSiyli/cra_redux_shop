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
      <section className="d-flex justify-content-center  ">
        <div className="input-group">
          {username ? (
            <div className="d-flex justify-content-center  ">
              <h5 className="m-2 text-dark-emphasis">Hello "{username}" </h5>
              <button
                type="button"
                className="btn btn-danger btn-sm "
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <input
                type="text"
                aria-label="name"
                value={newUsername}
                className="form-control"
                onChange={(e) => setNewUsername(e.target.value)}
                placeholder="Please enter your name"
              />
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={handleLogin}
                disabled={!isLoggedOut}
              >
                Login
              </button>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Users;
