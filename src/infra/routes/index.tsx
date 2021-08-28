import React, { useContext } from "react";
import LoggedOutStack from "./loggedOut";
import LoggedInStack from "./loggedIn";
import UserContext from "../../data/contexts/User";

const Routes: React.FC  = () => {
  const { user } = useContext(UserContext);
  return (
    user ? <LoggedInStack /> : <LoggedOutStack />
  )
}

export default Routes;