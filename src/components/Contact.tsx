import { Mail, Phone, Send, Github, Linkedin, ArrowUpRight, Sparkles, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative">
          <div className="font-mono border border-primary rounded-lg p-6 bg-background/80 shadow-lg">
            {/* ...existing content... */}
          </div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Sparkles className="text-primary" size={16} />
            <span className="mono text-primary text-sm">05. What's Next?</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg mb-12 leading-relaxed"
          >
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question, want to collaborate on a project, or just 
            want to say hi, I'll do my best to get back to you!
          </motion.p>

          {/* Contact Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <motion.a
              href="mailto:priyanshujibansal@gmail.com"
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 px-6 py-4 glass-card hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <Mail size={18} />
              </div>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                priyanshujibansal@gmail.com
              </span>
              <ArrowUpRight className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
            </motion.a>
            
            <motion.a
              href="tel:+917505675163"
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 px-6 py-4 glass-card hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <Phone size={18} />
              </div>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                +91-7505675163
              </span>
              <ArrowUpRight className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
            </motion.a>
          </motion.div>

          {/* CTA Button */}
          <motion.a
            href="mailto:priyanshujibansal@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              Say Hello
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[size:200%] animate-[shimmer_2s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-4 mt-12"
          >
            {[
              { icon: Github, href: "https://github.com/PriyanshuBansalji", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/priyanshu-bansal-2926512b8/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:priyanshujibansal@gmail.com", label: "Email" },
                { icon: Instagram, href: "https://www.instagram.com/priyanshu__bansal__/", label: "Instagram" },
                // https://www.instagram.com/priyanshu__bansal__/
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.icon !== Mail ? "_blank" : undefined}
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 glass-card text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
