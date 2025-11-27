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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-border/50 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl py-4 shadow-lg"
            : "bg-gradient-to-r from-black via-background to-black py-6"
        } font-mono`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <motion.a 
            href="#" 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 text-2xl font-bold tracking-tight font-mono"
          >
            <Terminal className="text-primary" size={24} />
            <span className="gradient-text">PB</span>
            <span className="text-primary">.tech</span>
          </motion.a>
          {/* System Status Indicator */}
          <div className="hidden md:flex items-center gap-2 mr-6">
            <Server size={18} className={systemStatus === "Online" ? "text-green-500" : "text-red-500"} />
            <span className={`text-xs font-mono ${systemStatus === "Online" ? "text-green-500" : "text-red-500"}`}>{systemStatus}</span>
          </div>
          {/* Theme Toggle */}
          <button
            aria-label="Toggle theme"
            className="hidden md:inline-flex items-center justify-center p-2 rounded-lg border border-border hover:bg-muted/30 transition-colors mr-2"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 font-mono">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 border border-transparent hover:border-primary ${
                  activeSection === link.href.slice(1)
                    ? "text-primary bg-primary/10 border-primary shadow-md"
                    : "text-muted-foreground hover:text-primary hover:bg-muted/50 hover:shadow-lg"
                }`}
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                <span className="mono text-xs text-primary mr-1">0{index + 1}.</span>
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="/public/Priyanshu Bansal.pdf"
              target="_blank"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-5 py-2.5 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-all duration-300 text-sm font-medium font-mono"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              Resume
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-foreground p-2 glass-card border border-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
                href="/Priyanshu_Bansal_Resume.pdf"
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
