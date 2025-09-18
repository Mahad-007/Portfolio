import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Brain, Cpu, Bot, TrendingUp, Code, Target } from "lucide-react";

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const experiences = [
    {
      title: "Freelance AI Developer",
      company: "Independent Consultant",
      period: "2023 - Present",
      location: "Remote",
      description: "Developing cutting-edge AI solutions for clients across various industries, specializing in machine learning models, natural language processing, and computer vision applications.",
      achievements: [
        "Built 50+ AI/ML models with 95%+ accuracy for diverse clients",
        "Developed intelligent trading algorithms using reinforcement learning",
        "Created advanced NLP systems for sentiment analysis and text generation",
        "Implemented computer vision solutions for object detection and classification",
        "Delivered end-to-end AI solutions from concept to production deployment"
      ],
      icon: Brain,
      color: "text-primary",
      category: "AI Development"
    },
    {
      title: "Creator - Profitron AI Trading Platform",
      company: "Personal Project",
      period: "2023 - Present",
      location: "Remote",
      description: "Designed and developed an intelligent cryptocurrency trading platform that combines advanced machine learning algorithms with real-time market analysis for automated trading decisions.",
      achievements: [
        "Built intelligent trading bot with 85%+ success rate",
        "Integrated multiple cryptocurrency exchanges via APIs",
        "Implemented real-time market sentiment analysis using NLP",
        "Created automated risk management and portfolio optimization",
        "Developed user-friendly dashboard with live trading metrics"
      ],
      icon: TrendingUp,
      color: "text-accent",
      category: "AI Trading"
    },
    {
      title: "AI Intern - Vanar Technologies",
      company: "Vanar Technologies",
      period: "Aug 2025 - Present",
      location: "Remote",
      description: "Worked as an AI intern focusing on developing machine learning solutions for enterprise clients, including predictive analytics, recommendation systems, and automated decision-making tools.",
      achievements: [
        "Developed fraud detection systems with 99.2% accuracy",
        "Built recommendation engines for e-commerce platforms",
        "Created automated data preprocessing and feature engineering pipelines",
        "Implemented MLOps practices for model deployment and monitoring",
        "Collaborated with senior AI engineers on large-scale ML projects"
      ],
      icon: Bot,
      color: "text-primary",
      category: "AI Internship"
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