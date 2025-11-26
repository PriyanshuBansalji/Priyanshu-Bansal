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
    <section id="about" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-[200px]" />
      
      <div className="container mx-auto px-6 relative">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="mono text-primary">01.</span>
          <h2 className="section-heading">About Me</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border/50 to-transparent ml-4" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* About Text - Takes 3 columns */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-6"
          >
            <motion.p variants={itemVariants} className="text-muted-foreground text-lg leading-relaxed">
              Hello! I'm Priyanshu, a passionate software developer and Computer Science 
              student at <span className="text-primary font-medium">Graphic Era University</span>. I enjoy 
              creating things that live on the internet, whether that be websites, applications, 
              or anything in between.
            </motion.p>
            <motion.p variants={itemVariants} className="text-muted-foreground text-lg leading-relaxed">
              My journey in tech has led me to participate in prestigious hackathons like 
              <span className="text-primary font-medium"> Smart India Hackathon 2024</span> and 
              <span className="text-primary font-medium"> IIT Roorkee COMET 2025</span>, where I've developed 
              solutions for real-world problems and honed my problem-solving skills.
            </motion.p>
            <motion.p variants={itemVariants} className="text-muted-foreground text-lg leading-relaxed">
              As a <span className="text-primary font-medium">Core Member of Code Craft Community (IEEE)</span>, 
              I've mentored peers and organized coding sessions, fostering a collaborative learning 
              environment. I believe in the power of community and continuous learning.
            </motion.p>

            <motion.div variants={itemVariants} className="pt-6">
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="text-primary" size={20} />
                <p className="text-foreground font-semibold">Technologies I work with:</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {technologies.map((tech, index) => (
                  <motion.div 
                    key={tech} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-2 group"
                  >
                    <span className="text-primary group-hover:translate-x-1 transition-transform">▹</span>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image - Takes 2 columns */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/30 to-primary/10 rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Image */}
              <div className="relative w-64 h-80 rounded-xl overflow-hidden border border-primary/30 group-hover:border-primary/60 transition-all duration-500">
                <img 
                  src={formalImage} 
                  alt="Priyanshu Bansal" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-all duration-500" />
              </div>
              
              {/* Border decoration */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-primary/40 rounded-xl -z-10 group-hover:-bottom-4 group-hover:-right-4 transition-all duration-300" />
            </div>
          </motion.div>
        </div>

        {/* Education Timeline */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-primary/10">
              <GraduationCap className="text-primary" size={24} />
            </div>
            <h3 className="text-2xl font-bold">Education</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 hover:border-primary/50 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                
                <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {edu.institution}
                </h4>
                <p className="text-primary font-medium text-sm mt-1">{edu.degree}</p>
                <div className="flex flex-wrap items-center gap-4 mt-3 text-muted-foreground text-sm">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {edu.period}
                  </span>
                  {edu.location && (
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {edu.location}
                    </span>
                  )}
                </div>
                <div className="mt-3 pt-3 border-t border-border/50">
                  <p className="mono text-sm text-primary font-medium">{edu.score}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
