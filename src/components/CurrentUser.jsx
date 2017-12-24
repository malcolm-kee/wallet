import React from "react";
import { Image } from "react-bootstrap";

const CurrentUser = ({ auth, signOut }) => (
  <div className="currentUser">
    <Image
      className="currentUser--photo"
      src={auth.photoURL}
      alt={auth.displayName}
      rounded
    />
    <h3>{auth.displayName}</h3>
    <p>{auth.email}</p>
    <button className="btn" onClick={signOut}>
      Sign Out
    </button>
  </div>
);

export default CurrentUser;
