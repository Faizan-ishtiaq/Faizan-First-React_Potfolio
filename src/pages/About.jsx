import React, { useEffect } from "react";
import "./About.css";
 import hero from '../assets/hero.jpg'

export default function About() {
  useEffect(() => {
    // animate skill bars on mount
    const bars = document.querySelectorAll(".skill-bar-inner");
    bars.forEach((bar) => {
      const pct = bar.dataset.pct || 0;
      // small timeout for nicer entrance
      setTimeout(() => {
        bar.style.width = pct + "%";
      }, 100);
    });
  }, []);

  const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS / Bootstrap", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 82 },
    { name: "Git / CLI", level: 72 },
  ];

  const timeline = [
    {
      date: "2023",
      title: "Started Web Development",
      desc: "Learned HTML, CSS and basic JavaScript. Built small static pages and exercises.",
    },
    {
      date: "2024",
      title: "Bootstrap & JS Projects",
      desc: "Completed several Bootstrap layouts and dynamic DOM projects for practice and exams.",
    },
    {
      date: "2025",
      title: "React & Portfolio",
      desc: "Learning React with Vite. Built this portfolio, routing and small components.",
    },
  ];

  return (
    <main className="about-page container">
      <section className="about-hero">
        <div className="about-left">
          <h2 className="about-title">More About Me</h2>
          <p className="lead">
            I build clean, responsive web interfaces using HTML, Bootstrap and React.
            I focus on readable code, good UX and learning new tools every week.
            I enjoy working with modern technologies like React, JavaScript, and CSS to create clean and user-friendly interfaces.
            My focus is on building fast, interactive, and visually appealing websites using React and modern design tools.
          </p>

          <div className="contact-ctas">
            <a className="btn btn-primary" href="/resume.pdf" download>
              Download Resume
            </a>
            <a className="btn btn-outline" href="/contact">
              Contact Me
            </a>
          </div>
        </div>

        <aside className="about-card">
           <img src={hero} alt="Faizan Pic" 
            className="about-photo"
          />
          <h3 className="card-name">Faizan</h3>
          <p className="card-role">Frontend Developer</p>

          <ul className="card-info">
            <li><strong>Location:</strong> Lahore, Pakistan</li>
            <li className="card-email"><strong>Email:</strong> <a href="mailto:you@example.com">faizanIshtiaqwork@gmail.com</a></li>
            <li><strong>Availability:</strong> Freelance / Part-time</li>
          </ul>
        </aside>
      </section>

      <section className="skills-section">
        <h3 className="section-title">Skills</h3>
        <div className="skills-grid">
          {skills.map((s) => (
            <div className="skill" key={s.name}>
              <div className="skill-head">
                <span>{s.name}</span>
                <span className="skill-pct">{s.level}%</span>
              </div>
              <div className="skill-bar" aria-hidden="true">
                <div
                  className="skill-bar-inner"
                  data-pct={s.level}
                  style={{ width: 0 }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="timeline-section">
        <h3 className="section-title">My Journey</h3>
        <div className="timeline">
          {timeline.map((t, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-dot" aria-hidden="true" />
              <div className="timeline-body">
                <h4>{t.title}</h4>
                <small className="timeline-date">{t.date}</small>
                <p>{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="about-footer-cta">
        <p>Like what you see? Let’s build something together.</p>
        <a className="btn btn-primary" href="/contact">Hire / Contact Me</a>
      </section>
    </main>
  );
}