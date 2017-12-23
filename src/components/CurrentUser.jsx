import React from "react";

const CurrentUser = ({ auth, signOut }) => (
  <div className="currentUser">
    <img
      className="currentUser--photo"
      src={auth.photoURL}
      alt={auth.displayName}
    />
    <h3>{auth.displayName}</h3>
    <p>{auth.email}</p>
    <button className="btn btn-primary" onClick={signOut}>
      Sign Out
    </button>
  </div>
);

export default CurrentUser;
