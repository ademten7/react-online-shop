import React, { useContext } from "react";
//for singout
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../App";
import "./Profile.scss";

const auth = getAuth();

const Profile = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(MyContext);

  const logOutGoogle = () => {
    signOut(auth).then(() => {
      setUser(null);
      //   navigate("/", { replace: true }); replace olmadan da calisiyor
      navigate("/");
    });
  };
  console.log(user);
  return (
    <div className="profile">
      <h1 className="profile-header">User Profile</h1>
      {user && (
        <div className="profile-info">
          <img src={user.photoURL} alt="" width="300" height="300" />
          <h3>User Name: {user.displayName}</h3>
          <h3>User Email: {user.email}</h3>
        </div>
      )}

      <button className="logout-button" onClick={logOutGoogle}>
        Logout
      </button>
    </div>
  );
};

export default Profile;
