import React from "react";
import "./Portfolio.css";
import portfolioImg from "../assets/hero1.png"; // your real image
import todoImg from "../assets/todolist.webp";
import calculatorImg from "../assets/calculatorImg.webp" ;
import ecommerceImg from "../assets/ecommerce.webp"
import blogImg from "../assets/blog.webp"
import weatherImg from "../assets/weather.webp"


const Portfolio = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "My first full React portfolio website showcasing my skills and design.",
      img: portfolioImg,
      link: "http://localhost:5173/", // your actual site link
      status: "Active",
    },
    {
      title: "To-Do List App",
      description: "A clean task manager app built with React.",
      img: todoImg,
      status: "Coming Soon",
    },
    {
      title: "Calculator App",
      description: "A modern calculator app with custom UI.",
      img:calculatorImg,
      
      status: "Coming Soon",
    },
    {
      title: "E-Commerce Website",
      description: "Online store UI with product cards and filters.",
      img:ecommerceImg,
      status: "Coming Soon",
    },
    {
      title: "Weather App",
      description: "Real-time weather forecast app.",
      img:weatherImg,
      status: "Coming Soon",
    },
    {
      title: "Blog UI",
      description: "Responsive layout for articles and blogs.",
      img:blogImg,
      status: "Coming Soon",
    },
  ];

  return (
    <div className="portfolio" id="portfolio">
      <h2 className="portfolio-title">My Portfolio</h2>
      <p className="portfolio-subtitle">
        A showcase of my projects and upcoming ideas
      </p>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-card">
            <img src={project.img} alt={project.title} className="project-img" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            {project.status === "Active" ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="view-btn"
              >
                View Project
              </a>
            ) : (
              <span className="coming-text">Coming Soon</span>
            )}
          </div>
        ))}
      </div>

      <div className="tech-section">
        <p>Built with ❤️ using React, JavaScript, HTML, and CSS</p>
      </div>
    </div>
  );
};

export default Portfolio;