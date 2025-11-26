import { Trophy, Users, Award, Target, Star, Zap } from "lucide-react";
import { motion } from "framer-motion";
import ieeeImage from "@/assets/priyanshu-ieee.jpg";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Smart India Hackathon 2024",
      subtitle: "Finalist",
      description:
        "Developed 'Ram Setu', a healthcare solution for OPD queues, bed availability, and hospital admissions. Led project timelines, documentation, and team coordination while presenting to mentors and judges.",
      highlight: "National Level Finalist",
      gradient: "from-yellow-500/20 to-orange-500/20",
    },
    {
      icon: Award,
      title: "IIT Roorkee COMET 2025",
      subtitle: "AlgoVision - Top 7",
      description:
        "Analyzed Zepto Quick Commerce dataset to identify bottlenecks and suggest data-driven improvements. Successfully coordinated with team through multiple event rounds.",
      highlight: "Top 7 Nationwide",
      gradient: "from-blue-500/20 to-purple-500/20",
    },
  ];

  const extracurricular = {
    title: "Core Member - Code Craft Community (IEEE)",
    period: "2024 – Present",
    highlights: [
      { text: "Mentored 7+ peers in coding and development", icon: Users },
      { text: "Organized 5+ coding sessions and workshops", icon: Zap },
      { text: "Managed community events and collaborated with multiple clubs", icon: Star },
      { text: "Increased coding challenge participation by 40%", icon: Target },
    ],
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-6 relative">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="mono text-primary">04.</span>
          <h2 className="section-heading">Achievements</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border/50 to-transparent ml-4" />
        </motion.div>

        {/* Main Achievements */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 hover:border-primary/50 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Animated glow */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-20 -right-20 w-40 h-40 bg-primary rounded-full blur-3xl" 
              />
              
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  >
                    <achievement.icon size={28} />
                  </motion.div>
                  <motion.span 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mono text-xs text-primary bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20"
                  >
                    {achievement.highlight}
                  </motion.span>
                </div>
                
                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-primary font-medium text-sm mb-4">
                  {achievement.subtitle}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extracurricular with Image */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 hover:border-primary/50 transition-all duration-500 relative overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
          
          <div className="flex flex-col lg:flex-row gap-8 relative">
            {/* IEEE Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-72 flex-shrink-0"
            >
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-br from-primary/30 to-transparent rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative rounded-xl overflow-hidden border border-primary/30 group-hover:border-primary/60 transition-all">
                  <img 
                    src={ieeeImage} 
                    alt="Priyanshu Bansal - IEEE" 
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex items-start gap-4 mb-6">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0"
                >
                  <Users size={28} />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold">{extracurricular.title}</h3>
                  <span className="mono text-sm text-muted-foreground">
                    {extracurricular.period}
                  </span>
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {extracurricular.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group"
                  >
                    <highlight.icon className="text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" size={18} />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors text-sm">
                      {highlight.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
