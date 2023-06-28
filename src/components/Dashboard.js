import { useEffect, useState, Fragment } from "react";
import PostList from "./PostList";
import NavBar from './NavBar';
import NotAutorized from "./NotAutorized";

export default function Dashboard() {

  const [authenticated, setauthenticated] = useState(false);
  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("authenticated");
    if (loggedInUser) {
      console.log("autenticado :" + loggedInUser)
      setauthenticated(loggedInUser);
    }
  }, []);


  return (
    <div>
      {authenticated
        ? <Fragment> <NavBar /> <PostList /> </Fragment>
        : <NotAutorized />
      }
    </div>
  )

}