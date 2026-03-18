import { Github, Linkedin, Mail, Heart, Code, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="font-mono border-t-2 border-primary/30 py-12 bg-gradient-to-t from-background via-background to-background/80 text-center relative overflow-hidden">
      {/* Animated background effects */}
      <motion.div
        animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"
      />
      <motion.div
        animate={{ opacity: [0.08, 0.2, 0.08], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -z-10"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-8"
        >
          {/* Divider Line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full"
          />
          
          {/* Social Links with enhanced animations */}
          <motion.div 
            className="flex items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {[
              { icon: Github, href: "https://github.com/PriyanshuBansalji", label: "GitHub", color: "hover:text-white" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/priyanshu-bansal-2926512b8/", label: "LinkedIn", color: "hover:text-blue-400" },
              { icon: Mail, href: "mailto:priyanshujibansal@gmail.com", label: "Email", color: "hover:text-red-400" },
              { icon: Instagram, href: "https://www.instagram.com/priyanshu__bansal__/", label: "Instagram", color: "hover:text-pink-400" },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.icon !== Mail ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 rounded-full border-2 border-primary/40 text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary group relative overflow-hidden ${social.color}`}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="relative z-10"
                >
                  <social.icon size={22} />
                </motion.div>
              </motion.a>
            ))}
          </motion.div>
          
          {/* Credit section with enhanced styling */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-4"
          >
            <motion.div
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/30 bg-primary/10"
              whileHover={{ borderColor: "rgba(172, 255, 240, 0.6)", scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Code className="text-primary" size={16} />
              </motion.div>
              <p className="mono text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                Designed & Built by 
                <span className="text-primary font-bold ml-2">Priyanshu Bansal</span>
              </p>
            </motion.div>
            
            <motion.p 
              className="text-xs text-muted-foreground/70 flex items-center gap-2 group hover:text-muted-foreground transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Made with 
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart size={12} className="text-red-500 fill-red-500" />
              </motion.span>
              using React &amp; Tailwind
            </motion.p>
          </motion.div>
          
          {/* Copyright with typing effect */}
          <motion.p 
            className="text-xs text-muted-foreground/50 font-mono tracking-wider cursor-default"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            © {new Date().getFullYear()} 
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="ml-2"
            >
              All Rights Reserved
            </motion.span>
          </motion.p>

          {/* Bottom accent line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-6 w-32 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
          />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
