
function Projects() {

  const projects = [
    {
      title: "Automotive Service Centre System",
      category: "Degree · Java · Object-Oriented Programming",
      description:
        "Developed a service centre management system with customer, technician and manager functionalities, including appointment bookings, payments, feedback and reporting features.",
      technologies: ["Java", "OOP"],
    },

    {
      title: "Online Shopping System",
      category: "Diploma · Java · Object-Oriented Programming",
      description:
        "Developed an online shopping system to implement shopping-related functionalities and strengthen object-oriented programming concepts.",
      technologies: ["Java", "OOP"],
    },

    {
      title: "Task Management System",
      category: "Diploma · Web Development",
      description:
        "Developed a web-based task management system with task creation and management functionality using web development and database concepts.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "phpMyAdmin"],
    },

    {
      title: "Personal Portfolio Website",
      category: "Personal Project · Frontend Development",
      description:
        "Building a responsive personal portfolio to showcase my technical skills, projects and software development experience.",
      technologies: ["React", "CSS", "JavaScript"],
    },
  ]

  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        <p className="section-subtitle">
          MY WORK
        </p>

        <h2 className="section-title">
          Featured <span>Projects</span>
        </h2>

        <p className="projects-description">
          Here are some of my academic and personal
          software development projects.
        </p>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              <div className="project-content">

                <p className="project-category">
                  {project.category}
                </p>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-technologies">

                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}

                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Projects
