import { ArrowRight, Github, MonitorPlay } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "PlantLink Mobile Application",
        description: "Built a mobile app version of PlantLink Web Application in a team-based setting to help farmers receive crop suggestions based on IoT sensor data.",
        image: "/projects/project1.png",
        tags: ["Flutter", "Django", "MongoDB"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 2,
        title: "Coursemark Management Web Application",
        description: "Developed and integrated the Student Module in a full-featured academic performance management web application.",
        image: "/projects/project2.png",
        tags: ["PHP Slim Framework", "Vue.js", "MySQL"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 3,
        title: "Johor TVPSS Management Information System",
        description: "Developed a comprehensive school program management system tracking media and journalism activities across multiple schools.",
        image: "/projects/project3.png",
        tags: ["Spring Tool Suite", "JSP", "MySQL"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 4,
        title: "ReportIt, a Hostel Damage Complaint Web Application",
        description: "Built a mobile app version of PlantLink Web Application in a team-based setting to help farmers receive crop suggestions based on IoT sensor data.",
        image: "/projects/project4.png",
        tags: ["HTML/CSS", "Sass", "JavaScript", "PHP", "MySQL"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 5,
        title: "FitNest, a Fitness Mobile Application",
        description: "Developed a comprehensive fitness tracking application with user authentication and data persistence.",
        image: "/projects/project5.png",
        tags: ["Flutter", "Firebase"],
        demoUrl: "#",
        githubUrl: "#",
    },
]

export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span className="text-primary"> Projects</span></h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my projects. Each projects was carefully crafted with attention to detail, performance, and user experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden"> 
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="border px-1 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        
                            <h3 className="text-xl font-semibold mb-1"> {project.title} </h3>
                            
                            <p className="text-muted-foreground text-sm mb-4 mt-2"> {project.description}</p>
                        
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.demoUrl} 
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <MonitorPlay size={20}/>
                                    </a>
                                    <a href={project.githubUrl} 
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github size={20}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a href="https://github.com/muhammadhafizkk" 
                target="_blank"
                className="cosmic-button w-fit flex items-center mx-auto gap-2">
                    Check My GitHub 
                <ArrowRight  size={16} />
                </a>
            </div>
        </div>
    </section>
}