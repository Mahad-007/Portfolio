import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Brain, Cpu, Bot, TrendingUp, Code, Target, GraduationCap, Briefcase } from "lucide-react";

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const experiences = [
    {
      title: "AI Engineer",
      company: "Vanar",
      period: "Aug 2025 - Present",
      location: "Dubai, United Arab Emirates",
      description: "AI Engineer at Vanar working on myNeutron - AI Second Brain & Search for Chrome, a revolutionary browser extension that serves as personal memory for the internet with AI-powered context management and semantic search capabilities.",
      achievements: [
        "Developed AI memory system for Chrome with 4.6/5 rating and 21+ active users",
        "Built semantic search functionality across Google Drive, Gmail, Dropbox, Slack, and Notion",
        "Implemented client-side encryption and privacy-first architecture with 256-bit encryption",
        "Created one-click capture system for articles, emails, chats, and ideas with instant retrieval",
        "Integrated AI context injection for ChatGPT, Claude, and Gemini to eliminate repetitive explanations",
        "Developed blockchain preservation system using Vanar blockchain for verifiable Neutron Seeds"
      ],
      icon: Bot,
      color: "text-primary",
      category: "AI Engineering"
    },
    {
      title: "AI Engineer",
      company: "Spiral Labs",
      period: "Jul 2025 - Aug 2025",
      location: "Lahore, Punjab, Pakistan",
      description: "Excited to join Spiral Labs as an AI Engineer Intern, where I'm applying my experience in building intelligent systems — from fitness coaches and resume optimization agents to terminal-based assistants and CrewAI-based solutions.",
      achievements: [
        "Developed AI Web Researcher using Groq's function calling for intelligent web research",
        "Created Prompt Optimizer MCP Server deployed on Smithery platform",
        "Built ResuMatch AI system for resume gap analysis and improvement suggestions",
        "Implemented advanced AI agents and conversational AI systems",
        "Delivered production-ready AI solutions with high accuracy and user satisfaction"
      ],
      icon: Brain,
      color: "text-accent",
      category: "AI Engineering"
    },
    {
      title: "Software Developer",
      company: "Freelance",
      period: "Jan 2025 - Aug 2025",
      location: "Remote",
      description: "Worked as an independent software developer, delivering custom solutions for various clients. Focused on full-stack development, API integrations, and database management.",
      achievements: [
        "Developed custom web applications for multiple clients",
        "Built RESTful APIs and database solutions",
        "Implemented responsive frontend designs",
        "Delivered end-to-end software solutions",
        "Maintained and optimized existing applications"
      ],
      icon: Code,
      color: "text-green-500",
      category: "Software Development"
    },
    {
      title: "AI Engineer",
      company: "Al-Khawarizmi Institute of Computer Science (KICS), UET Lahore",
      period: "Oct 2024 - Aug 2025",
      location: "Lahore, Punjab, Pakistan",
      description: "Thrilled to start my journey as an intern at KICS, UET Lahore in the Center for Language Engineering (CLE). Focusing on exciting projects related to Natural Language Processing (NLP) and Optical Character Recognition (OCR), contributing to advancements in language technology.",
      achievements: [
        "Developed and optimized Urdu OCR model for improved text recognition accuracy",
        "Contributed to NLP research projects in language processing and understanding",
        "Worked on advanced OCR techniques for multilingual text recognition",
        "Collaborated with research team on language technology innovations",
        "Applied machine learning algorithms for text processing and analysis",
        "Contributed to academic research in computational linguistics"
      ],
      icon: GraduationCap,
      color: "text-blue-500",
      category: "Research & Development"
    },
    {
      title: "Summer Intern - ML/Advanced Programming",
      company: "National Vocational and Technical Training Commission NAVTTC",
      period: "Jul 2024 - Oct 2024",
      location: "Lahore, Punjab, Pakistan",
      description: "Completed intensive summer internship program in Machine Learning and Advanced Programming, focusing on practical implementation of ML algorithms, data analysis, and advanced programming techniques. Achieved A+ grade for exceptional performance.",
      achievements: [
        "Completed ML/Advanced Programming course with A+ grade",
        "Gained hands-on experience in machine learning algorithms and data analysis",
        "Developed practical projects using advanced programming techniques",
        "Mastered data preprocessing, model training, and evaluation methodologies",
        "Applied statistical analysis and visualization techniques to real-world datasets"
      ],
      icon: GraduationCap,
      color: "text-orange-500",
      category: "ML Training"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
  };

  return (
    <section id="experience" className="py-20 px-4 ai-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="flex items-center justify-center gap-3 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Brain className="w-8 h-8 text-primary" />
            <TrendingUp className="w-8 h-8 text-accent" />
            <Code className="w-8 h-8 text-primary" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Professional <span className="text-shimmer">Experience</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Building the future of AI through innovative research and practical applications
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {experiences.map((experience, index) => {
            const IconComponent = experience.icon;
            return (
              <motion.div
                key={experience.title}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="group"
              >
                <Card className="ai-card group-hover:shadow-2xl group-hover:shadow-primary/10 h-full flex flex-col hover-lift hover-glow">
                  <CardHeader className="pb-4">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg bg-card border border-border/50 ${experience.color}`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col gap-2">
                            <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                              {experience.title}
                            </CardTitle>
                            <p className="text-sm text-muted-foreground font-medium">{experience.company}</p>
                            <Badge variant="outline" className="bg-primary/10 border-primary/30 text-primary text-xs w-fit">
                              {experience.category}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col text-xs text-muted-foreground space-y-1">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3 h-3" />
                          {experience.period}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3 h-3" />
                          {experience.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="flex-1 flex flex-col space-y-4">
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {experience.description}
                    </p>
                    
                    <div className="space-y-2 flex-1">
                      <h4 className="text-xs font-semibold text-foreground flex items-center gap-2">
                        <Target className="w-3 h-3 text-primary" />
                        Key Achievements:
                      </h4>
                      <div className="space-y-1">
                        {experience.achievements.slice(0, 3).map((achievement, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-start gap-2 p-2 rounded-md bg-secondary/30 hover:bg-secondary/50 transition-colors"
                            initial={{ opacity: 0, x: 20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.8 + index * 0.3 + idx * 0.1 }}
                            whileHover={{ scale: 1.02, x: 5 }}
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                            <span className="text-xs text-foreground leading-relaxed">{achievement}</span>
                          </motion.div>
                        ))}
                        {experience.achievements.length > 3 && (
                          <div className="text-xs text-muted-foreground text-center pt-1">
                            +{experience.achievements.length - 3} more achievements
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};