import React from "react";
import Links from "./Links";

function About({ bio, github, linkedin }) {
  function renderBio(bio) {
    if (!bio || bio === "") {
      return null;
    } else {
      return <p>{bio}</p>;
    }
  }
  return (
    <div id="about">
      <h2>About Me</h2>
      {renderBio(bio)}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={github} linkedin={linkedin} />
    </div>
  );
}

export default About;
