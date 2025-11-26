import { Github, Linkedin, Mail, Heart, Code, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="font-mono border-t border-primary p-4 bg-background/80 text-center shadow-lg">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent" />
      
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: "https://github.com/PriyanshuBansalji", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/priyanshu-bansal-2926512b8/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:priyanshujibansal@gmail.com", label: "Email" },
                { icon: Instagram, href: "https://www.instagram.com/priyanshu__bansal__/", label: "Instagram" },
                // https://www.instagram.com/priyanshu__bansal__/
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.icon !== Mail ? "_blank" : undefined}
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
          
          {/* Credit */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-2"
          >
            <p className="mono text-sm text-muted-foreground text-center flex items-center gap-2">
              <Code size={14} className="text-primary" />
              Designed & Built by 
              <span className="text-primary font-medium">Priyanshu Bansal</span>
            </p>
            <p className="text-xs text-muted-foreground/60 flex items-center gap-1">
              Made with <Heart size={12} className="text-red-500 fill-red-500" /> using React & Tailwind
            </p>
          </motion.div>
          
          {/* Copyright */}
          <p className="text-xs text-muted-foreground/40">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
    // Technical enhancement: monospace font and subtle code-like styling
  );
};

export default Footer;
