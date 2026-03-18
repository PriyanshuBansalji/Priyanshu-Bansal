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
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <canvas id="particle-canvas" className="w-full h-full absolute inset-0" />
        
        {/* Grid pattern with animation */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.2)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.2)_1px,transparent_1px)] bg-[size:60px_60px] opacity-50 hover:opacity-100 transition-opacity duration-500" />
        
        {/* Multiple animated gradient orbs */}
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2], x: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/25 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.35, 0.15], x: [-30, 30, -30] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.3, 0.1], y: [-30, 30, -30] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 -right-1/4 w-[600px] h-[600px] bg-accent/15 rounded-full blur-[150px]" 
        />
        
        {/* Floating code snippets with enhanced animations */}
        <motion.div 
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10], rotate: [0, 8, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 text-primary/30 font-mono text-sm hidden lg:block font-bold"
        >
          {"<Developer />"}
        </motion.div>
        <motion.div 
          animate={{ y: [20, -20, 20], x: [10, -10, 10], rotate: [0, -8, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 right-20 text-primary/25 font-mono text-sm hidden lg:block font-bold"
        >
          {"const passion = '∞';"}
        </motion.div>
        
        {/* Additional floating elements */}
        <motion.div 
          animate={{ y: [0, 30, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          className="absolute top-1/3 right-1/4 text-primary/20 font-mono text-xs hidden lg:block"
        >
          {"function create() {}"}
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
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, boxShadow: "var(--glow-primary)" }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl font-semibold overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                <motion.span 
                  className="relative z-10 flex items-center gap-2"
                  whileHover={{ x: 5 }}
                >
                  View My Work
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="inline-block"
                  >
                    →
                  </motion.span>
                </motion.span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              </motion.a>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary/10 transition-all duration-300 relative overflow-hidden backdrop-blur-sm"
              >
                <span className="relative z-10">Get In Touch</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.a>
              
              <motion.a
                href="/Priyanshu Bansal.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary/10 transition-all duration-300 relative overflow-hidden backdrop-blur-sm"
              >
                <span className="relative z-10">Download Resume</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.a>
            </motion.div>

            {/* Social Links with enhanced animations */}
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
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.icon !== Mail ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ y: -8, scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + (index * 0.1) }}
                  className="group p-3 rounded-full border-2 border-primary/30 text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 bg-primary/5 backdrop-blur-sm"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, repeatType: "loop" }}
                    className="absolute -inset-2 rounded-full border border-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <social.icon size={22} className="relative z-10" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right - Profile Image with enhanced effects */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:flex justify-center perspective"
          >
            <div className="relative group">
              {/* Animated multiple rings */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 rounded-full border-2 border-dashed border-primary/30 group-hover:border-primary/60 transition-colors duration-500"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-12 rounded-full border border-dotted border-primary/20 group-hover:border-primary/40 transition-colors duration-500"
              />
              
              {/* Decorative gradient blob */}
              <div className="absolute -inset-6 bg-gradient-to-br from-primary/40 via-accent/20 to-primary/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-60 group-hover:opacity-80" />
              <div className="absolute -inset-3 bg-gradient-to-br from-primary/50 to-transparent rounded-2xl group-hover:to-accent/30 transition-all duration-500" />
              
              {/* Image container with better styling */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative w-80 h-96 rounded-2xl overflow-hidden border-2 border-primary/40 group-hover:border-primary/100 transition-all duration-500 shadow-2xl"
              >
                <img 
                  src={profileImage} 
                  alt="Priyanshu Bansal" 
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                {/* Enhanced overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-40 group-hover:opacity-30 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>

              {/* Corner decorations with animations */}
              <motion.div 
                whileHover={{ bottom: -24, right: -24 }}
                className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/30 rounded-2xl -z-10 transition-all duration-300" 
              />
              
              {/* Status badge with enhanced styling */}
              <motion.div 
                initial={{ opacity: 0, x: 20, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.1, x: 10 }}
                className="absolute -right-4 top-8 px-4 py-3 rounded-full bg-gradient-to-r from-green-900/90 to-green-800/80 text-green-300 text-sm font-mono flex items-center gap-3 border border-green-500/50 shadow-lg backdrop-blur-md"
              >
                <motion.span 
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2.5 h-2.5 bg-green-400 rounded-full" 
                />
                <span>Available for work</span>
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
