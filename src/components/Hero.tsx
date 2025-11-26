import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ChevronDown, Terminal, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import profileImage from "@/assets/priyanshu-profile.jpg";

const Hero = () => {
  const headlines = [
    "I build things for the web.",
    "I solve problems.",
    "I create digital experiences.",
  ];
  const [displayText, setDisplayText] = useState("");
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let charIndex = 0;
    let typingTimer;
    let pauseTimer;
    setIsTyping(true);
    function type() {
      if (charIndex <= headlines[headlineIndex].length) {
        setDisplayText(headlines[headlineIndex].slice(0, charIndex));
        charIndex++;
        typingTimer = setTimeout(type, 50);
      } else {
        setIsTyping(false);
        pauseTimer = setTimeout(() => {
          setHeadlineIndex((prev) => (prev + 1) % headlines.length);
        }, 1200);
      }
    }
    type();
    return () => {
      clearTimeout(typingTimer);
      clearTimeout(pauseTimer);
    };
  }, [headlineIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Particle Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <canvas id="particle-canvas" className="w-full h-full absolute inset-0" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px]" />
        {/* Gradient orbs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[100px]" 
        />
        {/* Floating code snippets */}
        <motion.div 
          animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-20 left-10 text-primary/20 font-mono text-sm hidden lg:block"
        >
          {"<Developer />"}
        </motion.div>
        <motion.div 
          animate={{ y: [20, -20, 20], rotate: [0, -5, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-40 right-20 text-primary/20 font-mono text-sm hidden lg:block"
        >
          {"const passion = '∞';"}
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2 mb-4"
            >
              <Terminal className="text-primary" size={18} />
              <span className="mono text-sm md:text-base">Hi, my name is</span>
              {/* Live System Status Badge */}
              <span className="ml-4 px-3 py-1 rounded-full bg-green-900/80 text-green-400 text-xs font-mono flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Online
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text">
                Priyanshu Bansal
              </span>
              <span className="text-primary">.</span>
              {/* Real-time Coding Stats Placeholder */}
              <span className="ml-4 text-xs font-mono text-muted-foreground"></span>
            </motion.h1>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-2xl md:text-4xl lg:text-5xl font-bold text-muted-foreground mb-6 h-[1.2em] flex items-center"
            >
              {displayText}
              <span className="animate-pulse">{isTyping ? "|" : " "}</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-8 leading-relaxed"
            >
              I'm a Computer Science enthusiast passionate about solving complex problems and creating impactful digital experiences.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="#contact"
                className="group px-8 py-4 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">Get In Touch</span>
              </a>
              <a
                href="/Priyanshu Bansal.pdf"
                download
                className="group px-8 py-4 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">Download Resume</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-6"
            >
              {[
                { icon: Github, href: "https://github.com/PriyanshuBansalji", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/priyanshu-bansal-2926512b8/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:priyanshujibansal@gmail.com", label: "Email" },
                { icon: Instagram, href: "https://www.instagram.com/priyanshu__bansal__/", label: "Instagram" },
                // https://www.instagram.com/priyanshu__bansal__/
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.icon !== Mail ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 glass-card text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                >
                  <social.icon size={22} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right - Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative hidden lg:flex justify-center"
          >
            <div className="relative group">
              {/* Animated ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 rounded-full border border-dashed border-primary/30"
              />
              
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-primary/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/50 to-transparent rounded-2xl" />
              
              {/* Image container */}
              <div className="relative w-80 h-96 rounded-2xl overflow-hidden border-2 border-primary/30 group-hover:border-primary/60 transition-all duration-500">
                <img 
                  src={profileImage} 
                  alt="Priyanshu Bansal" 
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-all duration-500" />
              </div>

              {/* Corner decorations */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/30 rounded-2xl -z-10 group-hover:-bottom-5 group-hover:-right-5 transition-all duration-300" />
              
              {/* Status badge */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -right-4 top-8 glass-card px-4 py-2 flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-muted-foreground">Available for work</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs font-mono">scroll</span>
          <ChevronDown size={24} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
