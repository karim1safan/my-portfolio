import React from "react";
import "./about.css";
import { GiAchievement } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";

function About() {

  const aboutContentData = [
    {
      id: "1",
      title: "Experience",
      desc: "+1 years working",
      icon: <GiAchievement />,
    },
    {
      id: "2",
      title: "Clients",
      desc: "No Clients",
      icon: <FaPeopleGroup />,
    },
    {
      id: "3",
      title: "Projects",
      desc: "+30 Projects",
      icon: <FaCode />,
    },
  ];

  return (
    <section className="about" id="about">
      <div className="top-section">
        <h5>Get to Know</h5>
        <h2>About Me</h2>
      </div>

      <div className="container about-container">
        <div className="about-content">
          <div className="about-cards">
            {aboutContentData.map((item) => (
              <div className="about-card" key={item.id}>
                {item.icon}
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </div>
            ))}
          </div>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus architecto nesciunt aliquam nobis similique, porro veritatis accusantium cumque sint corrupti fugit. Perspiciatis aspernatur optio officiis vel qui adipisci ducimus harum, incidunt mollitia. Exercitationem tempore quis ullam eveniet, id fugiat quibusdam! Excepturi ullam maxime aliquid aperiam ratione deleniti adipisci voluptatibus mollitia.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Start</a>
        </div>
      </div>
    </section>
  );
}

export default About;
