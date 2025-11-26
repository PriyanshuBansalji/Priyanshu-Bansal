import { Code2, Database, Wrench, BookOpen, Users, Award, Sparkles, Star, Zap, Database as DBIcon, Cpu, Code, TerminalSquare } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const Skills = () => {
  // Skill categories for filtering
  const categories = ["All", "Frontend", "Backend", "Database"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const skills = [
    { label: "React", value: 90, category: "Frontend", testimonial: "Excellent UI skills!" },
    { label: "Node.js", value: 85, category: "Backend", testimonial: "Great backend developer." },
    { label: "MongoDB", value: 80, category: "Database", testimonial: "Solid database knowledge." },
    { label: "Express", value: 80, category: "Backend", testimonial: "Fast API builder." },
    { label: "JavaScript", value: 95, category: "Frontend", testimonial: "JS wizard." },
    { label: "Python", value:  80, category: "Backend", testimonial: "Pythonic solutions." },
  ];
  // Filter skills by category
  const filteredSkills = selectedCategory === "All" ? skills : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="pt-8 pb-20 bg-background">
      <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-2">
            <span className="font-mono text-primary text-2xl">02.</span>
            <h2 className="section-heading">Skills</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-border/50 to-transparent ml-4" />
          </div>
          {/* <p className="text-muted-foreground text-lg mb-10 ml-12">A showcase of my technical expertise and core competencies.</p> */}
        {/* Category Filters */}
        <div className="flex gap-4 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full font-mono border ${selectedCategory === cat ? "bg-primary text-primary-foreground" : "bg-background text-primary"}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-mono mb-2">Tech Stack</h3>
            <div className="flex gap-6 overflow-x-auto py-2 mb-4">
              {[
                {src: "/public/react.png", alt: "React", label: "React", desc: "Frontend library, 3+ yrs"},
                {src: "/public/node.png", alt: "Node.js", label: "Node.js", desc: "Backend runtime, 3+ yrs"},
                {src: "/public/mongo.png", alt: "MongoDB", label: "MongoDB", desc: "NoSQL DB, 2+ yrs"},
                {src: "/public/python.png", alt: "Python", label: "Python", desc: "Language, 5+ yrs"},
                {src: "/public/vite.png", alt: "Vite", label: "Vite", desc: "Build tool, 2+ yrs"},
                {src: "/public/express.png", alt: "Express", label: "Express", desc: "Backend framework, 3+ yrs"},
                {src: "/public/javascript.png", alt: "JavaScript", label: "JavaScript", desc: "Language, 5+ yrs"},
              ].map(tech => (
                <div className="flex flex-col items-center group min-w-[64px] transition-transform duration-300 hover:scale-110 hover:z-20" key={tech.alt}>
                  <img src={tech.src} alt={tech.alt} className="h-14 w-14 object-contain mb-1 bg-background rounded shadow border border-primary/20 transition-shadow duration-300 group-hover:shadow-lg group-hover:border-primary" />
                  <span className="text-xs text-primary font-mono mt-1">{tech.label}</span>
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded bg-background/90 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity font-mono whitespace-nowrap z-10">{tech.desc}</span>
                </div>
              ))}
            </div>
            <h4 className="text-lg font-mono mb-2 mt-6">Skill Radar</h4>
            <div className="w-full flex flex-col gap-8">
              <div className="h-[32rem] bg-background rounded-lg flex items-center justify-center border border-primary/20 shadow-lg p-6">
                <Radar
                  data={{
                    labels: skills.map((skill) => skill.label),
                    datasets: [
                      {
                        label: "Skill Level",
                        data: skills.map((skill) => skill.value),
                        backgroundColor: "rgba(59, 130, 246, 0.2)",
                        borderColor: "rgba(59, 130, 246, 1)",
                        borderWidth: 3,
                        pointBackgroundColor: "rgba(59, 130, 246, 1)",
                        pointRadius: 6,
                        pointHoverRadius: 8,
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                    scales: {
                      r: {
                        angleLines: { display: false },
                        suggestedMin: 0,
                        suggestedMax: 100,
                        pointLabels: {
                          font: { size: 18 },
                          color: '#3b82f6',
                        },
                        ticks: {
                          stepSize: 20,
                          color: '#64748b',
                          backdropColor: 'transparent',
                          font: { size: 16 },
                        },
                        grid: {
                          color: 'rgba(59,130,246,0.1)',
                        },
                      },
                    },
                  }}
                  height={500}
                  width={500}
                />
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-mono mb-4">Core Skills</h3>
            <ul className="space-y-4">
              {filteredSkills.map(skill => {
                let Icon = Code;
                if (skill.label === "React") Icon = Zap;
                else if (skill.label === "Node.js") Icon = Cpu;
                else if (skill.label === "MongoDB") Icon = DBIcon;
                else if (skill.label === "Express") Icon = TerminalSquare;
                else if (skill.label === "JavaScript") Icon = Star;
                else if (skill.label === "Python") Icon = BookOpen;
                return (
                  <li className="flex flex-col gap-2 group" key={skill.label}>
                    <div className="flex items-center gap-3">
                      <Icon className="text-primary" size={20} />
                      <span className="font-mono">{skill.label}</span>
                      <div className="w-full bg-primary/10 rounded h-3 relative overflow-hidden group">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: skill.value + "%" }}
                          transition={{ duration: 1 }}
                          className="bg-primary h-3 rounded transition-all duration-300 group-hover:bg-primary/80 group-hover:shadow-lg"
                        />
                        <span className="ml-2 text-xs text-muted-foreground absolute right-2 top-1/2 -translate-y-1/2">{skill.value}%</span>
                      </div>
                    </div>
                    {/* Testimonial */}
                    <span className="text-xs text-muted-foreground italic ml-2 group-hover:text-primary transition-colors">{skill.testimonial}</span>
                  </li>
                );
              })}
            </ul>
            {/* About Me Card moved below Core Skills */}
            <div className="w-full bg-primary/5 border border-primary/20 rounded-lg shadow p-6 flex flex-col items-center text-center mt-10">
              <h5 className="text-lg font-bold text-primary mb-2">About Me</h5>
              <p className="text-base text-muted-foreground mb-4 max-w-md">
                Passionate full stack developer with a love for building modern web applications. Experienced in React, Node.js, and databases. Always eager to learn new technologies and solve real-world problems with code.
              </p>
              <a
                href="/public/Priyanshu Bansal.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 rounded-full bg-primary text-primary-foreground font-mono font-semibold shadow hover:bg-primary/90 transition"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
