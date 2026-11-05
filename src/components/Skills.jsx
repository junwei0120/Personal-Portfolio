function Skills() {
    const skillCategories = [
        {
            title: "Programming Language",
            skills: ["Java", "Python", "C++"]
        },
        {
            title: "Web Development",
            skills: ["HTML", "CSS", "JavaScript", "React"]
        },
        {
            title: "Database Management",
            skills: ["MySQL", "Firebase", "PostgreSQL(Learning)"]
        },
        {
            title: "Mobile Development",
            skills: ["React Native", "Flutter", "Android Studio", "iOS Development"]
        },
        {
            title: "Version Control",
            skills: ["Git", "GitHub"]
        },
        {
            title: "Software Engineering",
            skills: ["Data Structures", "Object-Oriented Programming", "System Analysis", "Software Testing",]
        }
    ]

    return (
        <section className="skills-section" id="skills">
            <div className="skills-container">
                <p className = "section-subtitle"> WHAT I KNOW, WHAT I CAN DO </p>
            </div> 
            <h2 className="section-title">My <span>Technical Skills</span></h2>
            <div className="skills-grid">
                {skillCategories.map((category,index) => (
                    <div className="skill-card" key={index}>
                        <h3>{category.title}</h3>
                        <div className="skill-list">
                            {category.skills.map((skill) => (
                                <span className="skill-tag" key={skill}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )

}

export default Skills 
