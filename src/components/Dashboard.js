import React from "react";
import PostList from "./PostList";
import NavBar from './NavBar';

function Dashboard(){
  return(
    <React.Fragment>
      <NavBar />
      <PostList />
    </React.Fragment>
 );
}

export default Dashboard; 