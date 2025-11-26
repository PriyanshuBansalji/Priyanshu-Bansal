import { ExternalLink, Github, Folder, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const categories = ["All", "Frontend", "Backend", "Fullstack", "AI", "Mobile"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  // Example projects data
  const projects = [
    {
      name: "Portfolio Website",
      tech: ["React", "Vite", "Tailwind"],
      stars: 120,
      forks: 15,
      live: true,
      category: "Frontend",
      demo: "https://yourportfolio.com",
      code: "https://github.com/yourprofile/portfolio"
    },
    {
      name: "API Server",
      tech: ["Node.js", "Express", "MongoDB"],
      stars: 80,
      forks: 10,
      live: false,
      category: "Backend",
      demo: "",
      code: "https://github.com/yourprofile/api-server"
    },
    {
      name: "AI Chatbot",
      tech: ["Python", "TensorFlow"],
      stars: 200,
      forks: 30,
      live: true,
      category: "AI",
      demo: "https://yourai.com",
      code: "https://github.com/yourprofile/ai-chatbot"
    }
  ];
  // Filter projects by category
  const filteredProjects = selectedCategory === "All" ? projects : projects.filter(p => p.category === selectedCategory);
  const featuredProjects = [
    {
      title: "LabourzKart",
      description:
        "A comprehensive MERN stack platform connecting vendors and customers for construction services. Features vendor registration, job posting, admin panel, and secure authentication with a fully responsive UI.",
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      github: "https://github.com/PriyanshuBansalji/LabourzKart",
      live: "#",
      year: "2025",
      featured: true,
      image: "/public/labourzkart.png",
    },
    {
      title: "Ram Setu",
      description:
        "RamSetu – Organ Donor is a dedicated module that connects potential organ donors with hospitals and patients in need. It streamlines donor registration, tracks availability in real time, and helps medical teams match organs efficiently, ensuring faster and life-saving transplantation decisions.",
      tech: ["React", "Vite", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/PriyanshuBansalji/RAMSETU_ORGAN_DONAR",
      live: "#",
      year: "2025",
      featured: true,
      image: "/public/ramsetu.png",
    },
    {
      title: "SwitchX",
      description:
        "SwitchX is an interactive context-switch visualization tool that helps users undI. erstand how operating systems manage processes. It graphically demonstrates CPU scheduling, process transitions, and state changes, making complex OS concepts easy to learn and analyze in real time.",
      tech: ["React", "Vite", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/PriyanshuBansalji/SwitchX",
      live: "https://switch-x.vercel.app/",
      year: "2025",
      featured: true,
      image: "/public/switchx.png",
    },
    {
      title: "Comtex",
      description:
        "COMTEX is a full-stack image compression system that uses an advanced Huffman-based algorithm to reduce image size without losing quality. Built with the MERN stack, Python for pixel extraction, and C++ for high-performance compression, COMTEX provides fast processing, detailed compression statistics, and a smooth web interface for uploading, compressing, and downloading images efficiently.",
      tech: ["Python", "HTML", "CSS", "JavaScript","C++"],
      github: "https://github.com/PriyanshuBansalji/Comtex-ImageCompressionApp",
      live: "#",
      year: "2025",
      featured: true,
      image: "/public/Comtex.png",
    },
    {
      title: "SecureVision",
      description:
        "Secure Vision is a web-based penetration testing application designed to scan websites for vulnerabilities, analyze security weaknesses, and provide detailed insights to strengthen overall system protection.",
      tech: ["Python", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/PriyanshuBansalji/SecureVision",
      live: "#",
      year: "2025",
      featured: true,
      image: "/public/securevision.png",
    },
    
  ];

  return (
    <section id="projects" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-40 h-40 border border-border/30 rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-60 h-60 border border-border/20 rounded-full" />
      </div>
      
      <div className="container mx-auto px-6 relative">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="mono text-primary">03.</span>
          <h2 className="section-heading">Featured Projects</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border/50 to-transparent ml-4" />
        </motion.div>

        <div className="space-y-32">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className={`grid lg:grid-cols-12 gap-4 items-center ${
                index % 2 === 1 ? "lg:text-right" : ""
              }`}
            >
              {/* Project Image/Placeholder */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className={`lg:col-span-7 ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="relative group cursor-pointer">
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/20 via-primary/10 to-secondary border border-border/50 overflow-hidden flex items-center justify-center relative">
                    {/* Project image */}
                    <img
                      src={project.image}
                      alt={project.title + " logo"}
                      className="max-h-48 max-w-full object-contain rounded-xl drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Live preview overlay on hover */}
                    {project.live && project.live !== "#" && (
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center bg-background/90 backdrop-blur-sm">
                        <iframe
                          src={project.live}
                          title={project.title + " Preview"}
                          className="w-full h-full rounded-xl border-none"
                          sandbox="allow-scripts allow-same-origin allow-popups"
                        />
                      </div>
                    )}
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 z-20">
                      <span className="text-primary font-mono text-sm flex items-center gap-1">
                        View Project <ArrowUpRight size={16} />
                      </span>
                    </div>
                  </div>
                  {/* Decorative glow */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-all" />
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-full blur-xl" />
                </div>
              </motion.div>

              {/* Project Info */}
              <div
                className={`lg:col-span-5 ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mono text-primary text-sm mb-2"
                >
                  Featured Project • {project.year}
                </motion.p>
                
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-2xl md:text-3xl font-bold mb-4 hover:text-primary transition-colors cursor-pointer group"
                >
                  {project.title}
                  <ArrowUpRight className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                </motion.h3>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`glass-card p-6 mb-4 ${
                    index % 2 === 1 ? "lg:-mr-16" : "lg:-ml-16"
                  } relative z-10 hover:border-primary/30 transition-all`}
                >
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className={`flex flex-wrap gap-3 mb-4 ${
                    index % 2 === 1 ? "lg:justify-end" : ""
                  }`}
                >
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="mono text-sm text-muted-foreground hover:text-primary transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className={`flex gap-4 ${
                    index % 2 === 1 ? "lg:justify-end" : ""
                  }`}
                >
                  <motion.a
                    href={project.github}
                    whileHover={{ y: -3 }}
                    className="p-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={22} />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    whileHover={{ y: -3 }}
                    className="p-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={22} />
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
