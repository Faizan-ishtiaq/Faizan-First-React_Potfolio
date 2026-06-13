import "./Portfolio.css";
import quizImg from "../assets/quiz.png"
import movie from "../assets/movie.jpeg"
import weatherImg from "../assets/weather.webp"
import coachImg from "../assets/Coach.webp"
import todo from "../assets/Todolist.jpg"
import roast from "../assets/roastbot-img.jpeg"


const Portfolio = () => {
  const projects = [
    {
      title: "Roast Bot",
      description:
        "A full-stack AI web app that roasts users in Roman Urdu.",
      img: roast,
      link: "https://roast-bot-frontend.vercel.app/", // your actual site link
      status: "Active",
    },
    {
      title: "Steaming App",
      description: "The ultimate streaming destination for true movie lovers",
      img:movie,
      status: "Active",
      link:"https://chinephile-stream.vercel.app/"
    },
    {
      title: "Trainify",
      description: "A clean Fitness website  built with React.",
      img: coachImg,
      link:"https://tranify-react-fitness-website-juog.vercel.app/",
      status: "Active",
    },
    {
      title: "Todo List",
      description: "A React Todo-List with styling and Functionality",
      img:todo,
      link:"https://react-todo-list-one-delta.vercel.app",
      status: "Active",
    },
    {
      title: "Quiz App",
      description: "A Quiz APP built With react And use localStorage.",
      img:quizImg,
      status: "Active",
      link:"https://react-quiz-app-iota-topaz.vercel.app/"
    },
    {
      title: "Weather App",
      description: "Real-time weather forecast app.",
      img:weatherImg,
      status: "Active",
      link:"https://react-weather-app-flame-one.vercel.app/"
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