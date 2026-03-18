import { Code2, Database, Wrench, BookOpen, Users, Award, Sparkles, Star, Zap, Database as DBIcon, Cpu, Code, TerminalSquare } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const Skills = () => {
  // Skill categories for filtering
  const categories = ["All", "Frontend", "Backend", "Database"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const skills = [
    { label: "React", value: 90, category: "Frontend", testimonial: "Excellent UI skills!" },
    { label: "Node.js", value: 85, category: "Backend", testimonial: "Great backend developer." },
    { label: "MongoDB", value: 80, category: "Database", testimonial: "Solid database knowledge." },
    { label: "Express", value: 80, category: "Backend", testimonial: "Fast API builder." },
    { label: "JavaScript", value: 95, category: "Frontend", testimonial: "JS wizard." },
    { label: "Python", value:  80, category: "Backend", testimonial: "Pythonic solutions." },
  ];
  // Filter skills by category
  const filteredSkills = selectedCategory === "All" ? skills : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="pt-8 pb-20 bg-background relative overflow-hidden">
      {/* Background animations */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/3 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="font-mono text-primary text-3xl font-bold">02.</span>
          <h2 className="section-heading">Skills</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent ml-4" />
        </motion.div>
        
        {/* Category Filters with enhanced styling */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((cat, index) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-mono font-bold border-2 transition-all duration-300 ${
                selectedCategory === cat 
                  ? "bg-gradient-to-r from-primary to-accent text-primary-foreground border-primary shadow-lg shadow-primary/50" 
                  : "border-primary/50 text-primary hover:border-primary hover:bg-primary/10"
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Tech Stack & Radar */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-gradient-to-r from-foreground to-primary bg-clip-text">Tech Stack</h3>
              <div className="flex gap-6 overflow-x-auto py-4 mb-8 scroll-smooth">
                {[
                  {src: "/public/react.png", alt: "React", label: "React", desc: "Frontend library, 3+ yrs"},
                  {src: "/public/node.png", alt: "Node.js", label: "Node.js", desc: "Backend runtime, 3+ yrs"},
                  {src: "/public/mongo.png", alt: "MongoDB", label: "MongoDB", desc: "NoSQL DB, 2+ yrs"},
                  {src: "/public/python.png", alt: "Python", label: "Python", desc: "Language, 5+ yrs"},
                  {src: "/public/vite.png", alt: "Vite", label: "Vite", desc: "Build tool, 2+ yrs"},
                  {src: "/public/express.png", alt: "Express", label: "Express", desc: "Backend framework, 3+ yrs"},
                  {src: "/public/javascript.png", alt: "JavaScript", label: "JavaScript", desc: "Language, 5+ yrs"},
                ].map((tech, index) => (
                  <motion.div 
                    key={tech.alt}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ scale: 1.2, y: -15, rotateZ: 5 }}
                    className="flex flex-col items-center group min-w-[80px] transition-all duration-300"
                  >
                    <motion.div 
                      animate={{ boxShadow: ["0 0 20px rgba(0,0,0,0.1)", "0 0 40px rgba(172, 255, 240, 0.3)"] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="h-16 w-16 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 group-hover:border-primary shadow-lg flex items-center justify-center overflow-hidden transition-all duration-300"
                    >
                      <img 
                        src={tech.src} 
                        alt={tech.alt} 
                        className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-125" 
                      />
                    </motion.div>
                    <motion.span 
                      className="text-sm text-primary font-bold mt-2 group-hover:text-accent transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech.label}
                    </motion.span>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: -10 }}
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 rounded-lg bg-background/95 text-xs text-primary font-mono border border-primary/50 whitespace-nowrap shadow-xl backdrop-blur-md"
                    >
                      {tech.desc}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-2xl font-bold mb-6 text-transparent bg-gradient-to-r from-foreground to-primary bg-clip-text">Skill Radar</h4>
              <motion.div 
                className="h-[32rem] bg-gradient-to-br from-background to-primary/5 rounded-xl flex items-center justify-center border-2 border-primary/20 shadow-2xl p-6 hover:border-primary/50 transition-all duration-500 hover:shadow-primary/20"
                whileHover={{ scale: 1.02 }}
              >
                <Radar
                  data={{
                    labels: skills.map((skill) => skill.label),
                    datasets: [
                      {
                        label: "Skill Level",
                        data: skills.map((skill) => skill.value),
                        backgroundColor: "rgba(172, 255, 240, 0.2)",
                        borderColor: "rgba(172, 255, 240, 1)",
                        borderWidth: 3,
                        pointBackgroundColor: "rgba(172, 255, 240, 1)",
                        pointBorderColor: "rgba(13, 27, 42, 1)",
                        pointBorderWidth: 2,
                        pointRadius: 7,
                        pointHoverRadius: 10,
                        tension: 0.4,
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                    scales: {
                      r: {
                        angleLines: { display: false },
                        suggestedMin: 0,
                        suggestedMax: 100,
                        pointLabels: {
                          font: { size: 14, weight: "bold" },
                          color: 'rgba(172, 255, 240, 1)',
                        },
                        ticks: {
                          stepSize: 20,
                          color: '#64748b',
                          backdropColor: 'transparent',
                          font: { size: 14 },
                        },
                        grid: {
                          color: 'rgba(172, 255, 240, 0.15)',
                          lineWidth: 2,
                        },
                      },
                    },
                  }}
                  height={500}
                  width={500}
                />
              </motion.div>
            </motion.div>
          </div>
          
          {/* Right Column - Core Skills */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8 text-transparent bg-gradient-to-r from-foreground to-primary bg-clip-text">Core Skills</h3>
              <ul className="space-y-6">
                {filteredSkills.map((skill, index) => {
                  let Icon = Code;
                  if (skill.label === "React") Icon = Zap;
                  else if (skill.label === "Node.js") Icon = Cpu;
                  else if (skill.label === "MongoDB") Icon = DBIcon;
                  else if (skill.label === "Express") Icon = TerminalSquare;
                  else if (skill.label === "JavaScript") Icon = Star;
                  else if (skill.label === "Python") Icon = BookOpen;
                  return (
                    <motion.li 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex flex-col gap-3 group p-4 rounded-lg hover:bg-primary/5 transition-all duration-300" 
                      key={skill.label}
                    >
                      <motion.div 
                        className="flex items-center gap-4 cursor-pointer"
                        whileHover={{ x: 5 }}
                      >
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 3, repeat: Infinity , delay: index * 0.2 }}
                          className="p-2 rounded-lg bg-primary/20 group-hover:bg-primary/40 transition-all"
                        >
                          <Icon className="text-primary group-hover:text-accent transition-colors" size={22} />
                        </motion.div>
                        <span className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">{skill.label}</span>
                      </motion.div>
                      
                      {/* Enhanced skill bar */}
                      <div className="relative w-full h-3 bg-primary/10 rounded-full overflow-hidden group">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: skill.value + "%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-primary group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-300 relative overflow-hidden"
                        >
                          {/* Shimmer effect */}
                          <motion.div
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          />
                        </motion.div>
                        <motion.span 
                          className="ml-2 text-xs font-bold text-primary absolute right-2 top-1/2 -translate-y-1/2"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                        >
                          {skill.value}%
                        </motion.span>
                      </div>
                      
                      {/* Testimonial */}
                      <motion.span 
                        className="text-xs text-muted-foreground italic group-hover:text-primary transition-colors duration-300 duration-300 ml-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 }}
                      >
                        "{skill.testimonial}"
                      </motion.span>
                    </motion.li>
                  );
                })}
              </ul>
              
              {/* About Me Card with animations */}
              <motion.div
                initial={{ opacity: 0, y: 30, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.02, y: -10 }}
                className="card-glow backdrop-blur-xl shadow-2xl p-8 flex flex-col items-center text-center mt-10 hover:border-primary/80 transition-all"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="mb-4"
                >
                  <Award className="text-primary" size={40} />
                </motion.div>
                <h5 className="text-2xl font-bold text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text mb-3">About Me</h5>
                <p className="text-base text-muted-foreground mb-6 max-w-md leading-relaxed group-hover:text-foreground transition-colors">
                  Passionate full stack developer with a love for building modern web applications. Experienced in React, Node.js, and databases. Always eager to learn new technologies and solve real-world problems with code.
                </p>
                <motion.a
                  href="/Priyanshu Bansal.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, boxShadow: "var(--glow-primary)" }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold shadow-lg hover:shadow-2xl transition-all"
                >
                  Download Resume
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
