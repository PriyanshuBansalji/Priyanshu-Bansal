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
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Enhanced Background decoration with animations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 -left-20 w-40 h-40 border border-primary/20 rounded-full"
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 -right-20 w-60 h-60 border border-primary/15 rounded-full"
        />
        {/* Additional animated orbs */}
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-1/2 right-1/3 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
        />
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
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                className={`lg:col-span-7 ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="relative group cursor-pointer perspective">
                  <motion.div 
                    className="aspect-video rounded-xl bg-gradient-to-br from-primary/30 via-primary/10 to-secondary border-2 border-primary/30 overflow-hidden flex items-center justify-center relative group-hover:border-primary/70 transition-all duration-500 shadow-xl"
                    whileHover={{ 
                      boxShadow: "0 0 50px rgba(172, 255, 240, 0.4)",
                      borderColor: "rgba(172, 255, 240, 0.7)"
                    }}
                  >
                    {/* Project image with glow */}
                    <motion.img
                      src={project.image}
                      alt={project.title + " logo"}
                      className="max-h-48 max-w-full object-contain rounded-xl drop-shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.2, filter: "brightness(1.2)" }}
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
                  </motion.div>
                  
                  {/* Decorative glow with animations */}
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/30 rounded-full blur-3xl group-hover:bg-primary/50 transition-all"
                  />
                  <motion.div 
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.25, 0.15] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute -top-4 -left-4 w-16 h-16 bg-primary/20 rounded-full blur-2xl"
                  />
                </div>
              </motion.div>

              {/* Project Info with staggered animations */}
              <div
                className={`lg:col-span-5 ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <motion.div
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 }
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <motion.p 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="mono text-primary text-sm font-bold tracking-wider flex items-center gap-2 uppercase"
                  >
                    <span className="w-8 h-px bg-primary" />
                    Featured Project • {project.year}
                  </motion.p>
                  
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                    className="text-2xl md:text-4xl font-bold mb-4 hover:text-primary transition-colors cursor-pointer group inline-flex items-center gap-2"
                  >
                    <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                      {project.title}
                    </span>
                    <motion.span
                      animate={{ x: [0, 5, 0], y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ArrowUpRight size={24} className="text-primary" />
                    </motion.span>
                  </motion.h3>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className={`card-glow p-6 backdrop-blur-lg hover:backdrop-blur-xl transition-all duration-500 ${
                      index % 2 === 1 ? "lg:-mr-16" : "lg:-ml-16"
                    } relative z-10`}
                  >
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {project.description}
                    </p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 }}
                    className={`flex flex-wrap gap-3 ${
                      index % 2 === 1 ? "lg:justify-end" : ""
                    }`}
                  >
                    {project.tech.map((tech, techIndex) => (
                      <motion.span 
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + (techIndex * 0.05) }}
                        whileHover={{ scale: 1.1, color: "hsl(172 66% 50%)" }}
                        className="mono text-sm text-muted-foreground hover:text-primary transition-all duration-300 px-3 py-1 rounded-full border border-primary/20 hover:border-primary/50 hover:bg-primary/10"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35 }}
                    className={`flex gap-6 text-muted-foreground ${
                      index % 2 === 1 ? "lg:justify-end" : ""
                    }`}
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, scale: 1.2, color: "hsl(172 66% 50%)" }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 hover:text-primary transition-all duration-300 relative group/link"
                    >
                      <Github size={24} />
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-primary/20 text-primary text-xs rounded opacity-0 group-hover/link:opacity-100 transition-opacity whitespace-nowrap">
                        GitHub
                      </span>
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target={project.live !== "#" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, scale: 1.2, color: "hsl(172 66% 50%)" }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 hover:text-primary transition-all duration-300 relative group/link"
                    >
                      <ExternalLink size={24} />
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-primary/20 text-primary text-xs rounded opacity-0 group-hover/link:opacity-100 transition-opacity whitespace-nowrap">
                        {project.live === "#" ? "Coming Soon" : "Live"}
                      </span>
                    </motion.a>
                  </motion.div>
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
