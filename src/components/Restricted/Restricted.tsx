import React, { useContext } from "react";
import { AuthContext } from "../store/AuthContext";

const Restricted: React.FC = () => {
  const authCtx = useContext(AuthContext);
  return (authCtx.isLoggedIn ? <div>Welcome authenticated user</div> : <div>Please log in</div>)
}

export default Restricted;