import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App() {
  const { name, city, bio, color, links } = user;
  return (
    <div>
      <NavBar linkedin={user.links.linkedin} github={user.links.github} />
      <Home color={color} name={name} city={city} />
      <About bio={bio} github={links.github} linkedin={links.linkedin} />
    </div>
  );
}

export default App;
