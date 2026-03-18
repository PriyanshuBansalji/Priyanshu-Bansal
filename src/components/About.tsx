import { GraduationCap, Calendar, MapPin, Code2, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import formalImage from "@/assets/priyanshu-formal.jpg";

const About = () => {
  const education = [
    {
      institution: "Graphic Era Deemed to be University",
      location: "Dehradun",
      degree: "B.Tech in Computer Science and Engineering",
      period: "2023 – 2027",
      score: "CGPA: 8.80",
    },
    {
      institution: "Jai Hind Public School",
      degree: "Class XII (CBSE)",
      period: "2022 – 2023",
      score: "Percentage: 78.80%",
    },
    {
      institution: "Lord Mahavira Academy",
      degree: "Class X (CBSE)",
      period: "2020 – 2021",
      score: "Percentage: 84.40%",
    },
  ];

  const technologies = [
    "JavaScript (ES6+)", 
    "React.js", 
    "Node.js", 
    "Express.js", 
    "MongoDB", 
    "MySQL", 
    "C/C++", 
    "Java"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="min-h-screen py-24 relative overflow-hidden flex items-center">
      {/* Enhanced Background decoration with animations */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-[200px] opacity-50"
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
      />
      
      <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="mono text-primary text-3xl font-bold">01.</span>
          <h2 className="section-heading">About Me</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent ml-4" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* About Text - Takes 3 columns */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-6"
          >
            <motion.p 
              variants={itemVariants} 
              className="text-muted-foreground text-lg leading-relaxed hover:text-foreground transition-colors duration-300"
            >
              Hello! I'm Priyanshu, a passionate software developer and Computer Science 
              student at <span className="text-primary font-bold hover:animate-glow-pulse">Graphic Era University</span>. I enjoy 
              creating things that live on the internet, whether that be websites, applications, 
              or anything in between.
            </motion.p>
            <motion.p 
              variants={itemVariants} 
              className="text-muted-foreground text-lg leading-relaxed hover:text-foreground transition-colors duration-300"
            >
              My journey in tech has led me to participate in prestigious hackathons like 
              <span className="text-primary font-bold hover:animate-glow-pulse"> Smart India Hackathon 2024</span> and 
              <span className="text-primary font-bold hover:animate-glow-pulse"> IIT Roorkee COMET 2025</span>, where I've developed 
              solutions for real-world problems and honed my problem-solving skills.
            </motion.p>
            <motion.p 
              variants={itemVariants} 
              className="text-muted-foreground text-lg leading-relaxed hover:text-foreground transition-colors duration-300"
            >
              As a <span className="text-primary font-bold hover:animate-glow-pulse">Core Member of Code Craft Community (IEEE)</span>, 
              I've mentored peers and organized coding sessions, fostering a collaborative learning 
              environment. I believe in the power of community and continuous learning.
            </motion.p>

            <motion.div variants={itemVariants} className="pt-6">
              <motion.div 
                className="flex items-center gap-2 mb-6"
                whileHover={{ x: 10 }}
              >
                <motion.div 
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="p-2 rounded-lg bg-primary/20"
                >
                  <Code2 className="text-primary" size={20} />
                </motion.div>
                <p className="text-foreground font-bold text-lg">Technologies I work with:</p>
              </motion.div>
              <div className="grid grid-cols-2 gap-3">
                {technologies.map((tech, index) => (
                  <motion.div 
                    key={tech} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ x: 10, scale: 1.05 }}
                    className="flex items-center gap-3 group px-3 py-2 rounded-lg hover:bg-primary/10 transition-all duration-300"
                  >
                    <motion.span 
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                      className="text-primary font-bold text-lg"
                    >
                      ▹
                    </motion.span>
                    <span className="text-muted-foreground group-hover:text-foreground transition-all duration-300 font-medium">
                      {tech}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image - Takes 2 columns with enhanced effects */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotateZ: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
            className="lg:col-span-2 flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Multiple animated glow effects */}
              <motion.div 
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -inset-4 bg-gradient-to-br from-primary/40 via-primary/20 to-primary/10 rounded-2xl blur-2xl"
              />
              <motion.div 
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -inset-2 bg-gradient-to-tr from-accent/30 to-transparent rounded-xl blur-xl"
              />
              
              {/* Rotating border */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-1 rounded-xl border border-dashed border-primary/40"
              />
              
              {/* Image */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative w-64 h-80 rounded-xl overflow-hidden border-2 border-primary/40 group-hover:border-primary/100 transition-all duration-500 shadow-2xl"
              >
                <motion.img 
                  src={formalImage} 
                  alt="Priyanshu Bansal" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  whileHover={{ filter: "brightness(1.2)" }}
                />
                <motion.div 
                  animate={{ opacity: [0.4, 0.6, 0.4] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"
                />
                <motion.div 
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </motion.div>
              
              {/* Decorative animated border */}
              <motion.div 
                whileHover={{ bottom: -16, right: -16 }}
                className="absolute -bottom-3 -right-3 w-full h-full border-2 border-primary/30 rounded-xl -z-10 transition-all duration-300"
              />
            </div>
          </motion.div>
        </div>

        {/* Education Timeline with enhanced animations */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <motion.div 
            className="flex items-center gap-3 mb-8"
            whileHover={{ x: 10 }}
          >
            <motion.div 
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="p-3 rounded-lg bg-gradient-to-br from-primary/30 to-primary/10"
            >
              <GraduationCap className="text-primary" size={28} />
            </motion.div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">Education</h3>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="card-glow p-6 hover:border-primary/80 transition-all duration-500 group relative overflow-hidden cursor-pointer"
              >
                {/* Animated top accent line */}
                <motion.div 
                  animate={{ scaleX: [0, 1, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary origin-left"
                />
                
                {/* Floating context icon */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                  className="absolute -top-8 -right-8 w-24 h-24 bg-primary/10 rounded-full blur-2xl"
                />
                
                <motion.h4 
                  className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 relative z-10"
                  whileHover={{ x: 5 }}
                >
                  {edu.institution}
                </motion.h4>
                <motion.p 
                  className="text-primary font-bold text-sm mt-2 group-hover:translate-x-1 transition-transform duration-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  {edu.degree}
                </motion.p>
                <motion.div 
                  className="flex flex-wrap items-center gap-4 mt-4 text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300"
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.25 }}
                >
                  <motion.span 
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Calendar size={16} />
                    {edu.period}
                  </motion.span>
                  {edu.location && (
                    <motion.span 
                      className="flex items-center gap-2 hover:text-primary transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <MapPin size={16} />
                      {edu.location}
                    </motion.span>
                  )}
                </motion.div>
                <motion.div 
                  className="mt-4 pt-4 border-t border-primary/30 group-hover:border-primary/70 transition-colors duration-300"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.3 }}
                  style={{ originX: 0 }}
                >
                  <motion.p 
                    className="mono text-sm text-primary font-bold"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  >
                    {edu.score}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
