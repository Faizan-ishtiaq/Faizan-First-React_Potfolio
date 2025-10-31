import React from "react";
import "./Services.css";

function Services() {
  const services = [
    { icon: "💻", title: "Web Development", desc: "Building responsive and modern websites using React and Bootstrap." },
    { icon: "🎨", title: "UI/UX Design", desc: "Creating clean, user-friendly interfaces that improve engagement." },
    { icon: "⚙️", title: "Website Maintenance", desc: "Ensuring your website stays updated, secure, and smooth." },
    { icon: "📱", title: "Responsive Design", desc: "Designing websites that look perfect on every screen size." },
    { icon: "🚀", title: "Performance Optimization", desc: "Boosting loading speed and improving overall site performance." },
    { icon: "🧠", title: "Creative Solutions", desc: "Transforming your ideas into beautiful digital experiences." },
  ];

  return (
    <>
    <section className="services-section" id="services">
      <h2 className="services-title">My Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <span className="service-icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    
    <section className="why-me">
  <h2>Why Choose Me?</h2>
  <p>
    I combine creative design with clean, optimized code to build fast, responsive, and visually appealing websites. 
    My focus is always on delivering projects that are user-friendly and business-effective.
  </p>

  <ul>
    <li>⚡ Fast & Responsive Design</li>
    <li>🎨 Clean and Modern UI</li>
    <li>🚀 SEO & Performance Optimized</li>
    <li>💬 Friendly Support & Revisions</li>
  </ul>
</section>
<section className="tools">
        <h2>Tools & Technologies</h2>
        <p className="tools-intro">
          I work with a modern web development stack that ensures responsive, fast,
          and visually appealing websites.
        </p>

        <div className="tools-logos">
          <div className="tool">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
            <span>HTML</span>
          </div>
          <div className="tool">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
            <span>CSS</span>
          </div>
          <div className="tool">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
            <span>JavaScript</span>
          </div>
          <div className="tool">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
            <span>React</span>
          </div>
          <div className="tool">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" />
            <span>Bootstrap</span>
          </div>
          <div className="tool">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
            <span>GitHub</span>
          </div>
        </div>
      </section>
</section>
</>
  );
}


export default Services;