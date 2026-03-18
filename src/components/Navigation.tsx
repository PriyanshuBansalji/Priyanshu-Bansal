import { useState, useEffect } from "react";
import { Menu, X, Terminal, Moon, Sun, Server } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark";
    }
    return "dark";
  });
    // Update document class and persist theme
    useEffect(() => {
      if (typeof window !== "undefined") {
        document.documentElement.classList.remove("dark", "light");
        document.documentElement.classList.add(theme);
        localStorage.setItem("theme", theme);
      }
    }, [theme]);
  const [systemStatus, setSystemStatus] = useState("Online");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Detect active section
      const sections = navLinks.map(link => link.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            return;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-background/80 backdrop-blur-2xl py-4 shadow-xl border-primary/30"
            : "bg-gradient-to-b from-background via-background/95 to-background/80 py-6 border-primary/10"
        } font-mono`}
      >
        {/* Animated background gradient */}
        {isScrolled && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 opacity-0"
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        )}
        
        <div className="container mx-auto px-6 flex items-center justify-between relative z-10">
          <motion.a 
            href="#" 
            whileHover={{ scale: 1.08, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-xl font-black tracking-tight font-mono group"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="p-2 rounded-lg bg-gradient-to-br from-primary/30 to-primary/10"
            >
              <Terminal className="text-primary group-hover:text-accent transition-colors" size={22} />
            </motion.div>
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent group-hover:via-accent transition-all duration-300">
              PB
            </span>
            <span className="text-primary group-hover:text-accent transition-colors">.tech</span>
          </motion.a>
          
          {/* System Status Indicator with animation */}
          <motion.div 
            className="hidden md:flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/30"
            animate={{ boxShadow: ["0 0 20px rgba(0,0,0,0), 0 0 40px rgba(172, 255, 240, 0.2)"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2.5 h-2.5 bg-green-400 rounded-full"
            />
            <span className="text-xs font-mono text-green-400 font-bold">{systemStatus}</span>
          </motion.div>
          
          {/* Theme Toggle with enhanced animation */}
          <motion.button
            aria-label="Toggle theme"
            whileHover={{ scale: 1.1, rotate: 20 }}
            whileTap={{ scale: 0.9 }}
            className="hidden md:inline-flex items-center justify-center p-2 rounded-lg border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all mr-4 group"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <motion.div
              key={theme}
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {theme === "dark" ? (
                <Sun className="text-primary group-hover:text-accent transition-colors" size={20} />
              ) : (
                <Moon className="text-primary group-hover:text-accent transition-colors" size={20} />
              )}
            </motion.div>
          </motion.button>

          {/* Desktop Navigation with enhanced styling */}
          <div className="hidden md:flex items-center gap-2 font-mono">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${
                  activeSection === link.href.slice(1)
                    ? "bg-gradient-to-r from-primary/30 to-accent/20 text-primary border-2 border-primary shadow-lg shadow-primary/30"
                    : "text-muted-foreground hover:text-foreground border-2 border-transparent hover:border-primary/50 hover:bg-primary/10"
                }`}
              >
                <span className="text-primary text-xs mr-1.5">0{index + 1}.</span>
                {link.name}
              </motion.a>
            ))}
            
            <motion.a
              href="/Priyanshu Bansal.pdf"
              download
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.08, boxShadow: "var(--glow-primary)" }}
              whileTap={{ scale: 0.95 }}
              className="ml-3 px-5 py-2.5 border-2 border-primary text-primary-foreground rounded-lg bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300 text-sm font-bold shadow-lg hover:shadow-2xl"
            >
              Resume
            </motion.a>
          </div>

          {/* Mobile Menu Button with animation */}
          <motion.button
            whileTap={{ scale: 0.85, rotate: 90 }}
            className="md:hidden p-2 rounded-lg border-2 border-primary text-primary hover:bg-primary/10 transition-all"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 font-mono"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-medium text-muted-foreground hover:text-primary transition-colors border border-transparent hover:border-primary px-6 py-2 rounded-lg"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  <span className="mono text-sm text-primary mr-2">0{index + 1}.</span>
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="/Priyanshu Bansal.pdf"
                target="_blank"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-4 px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-all duration-300 text-lg font-mono"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
