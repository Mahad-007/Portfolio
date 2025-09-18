import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Bot, Brain, MessageSquare, TrendingUp, Users } from "lucide-react";
import {
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiOpenai,
  SiHuggingface,
  SiFastapi,
  SiStreamlit,
  SiDocker,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiOpencv,
  SiSpacy,
} from "react-icons/si";

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: "AI Trading Bot",
      description: "Intelligent cryptocurrency trading bot with advanced ML algorithms for market prediction, real-time analysis, and automated trading using Binance API integration.",
      tech: ["Python", "TensorFlow", "Pandas", "Binance API", "TA-Lib"],
      category: "AI/Trading",
      icon: TrendingUp,
      color: "text-green-500",
      features: ["Market Prediction", "Risk Management", "Real-time Trading", "Portfolio Optimization"]
    },
    {
      title: "LLM-Powered Chatbot",
      description: "Advanced conversational AI chatbot using OpenAI GPT and Hugging Face transformers with RAG (Retrieval-Augmented Generation) for context-aware responses.",
      tech: ["OpenAI API", "Hugging Face", "FastAPI", "Python", "RAG"],
      category: "NLP/LLM",
      icon: MessageSquare,
      color: "text-blue-500",
      features: ["Context Awareness", "RAG Implementation", "Multi-turn Conversations", "Knowledge Base"]
    },
    {
      title: "AI Content Generator",
      description: "Intelligent content generation platform using transformer models for automated text, image, and code generation with customizable templates.",
      tech: ["Hugging Face", "OpenAI", "Gradio", "Python", "Transformers"],
      category: "Generative AI",
      icon: Bot,
      color: "text-cyan-500",
      features: ["Multi-modal Generation", "Template System", "Quality Control", "API Integration"]
    },
    {
      title: "Face Recognition Attendance System",
      description: "AI-powered attendance management system that leverages OpenCV face recognition and a Tkinter GUI to automate student attendance with accuracy and ease.",
      tech: ["Python", "OpenCV", "Tkinter", "Pandas", "NumPy"],
      category: "Computer Vision",
      icon: Users,
      color: "text-indigo-500",
      features: ["LBPH Face Recognition", "Password Protection", "Real-time Logging", "CSV Reports"]
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1
    },
  };

  const getTechIcon = (tech: string) => {
    const iconMap: { [key: string]: any } = {
      "Python": SiPython,
      "TensorFlow": SiTensorflow,
      "PyTorch": SiPytorch,
      "OpenAI API": SiOpenai,
      "Hugging Face": SiHuggingface,
      "FastAPI": SiFastapi,
      "Streamlit": SiStreamlit,
      "Docker": SiDocker,
      "Pandas": SiPandas,
      "NumPy": SiNumpy,
      "Scikit-learn": SiScikitlearn,
      "OpenCV": SiOpencv,
      "spaCy": SiSpacy,
    };
    return iconMap[tech] || SiPython;
  };

  return (
    <section id="projects" className="py-12 px-4 ai-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <motion.div
            className="flex items-center justify-center gap-3 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Bot className="w-8 h-8 text-primary" />
            <Brain className="w-8 h-8 text-accent" />
            <MessageSquare className="w-8 h-8 text-primary" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          A small selection of<span className="text-shimmer"> Recent Projects</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions leveraging cutting-edge artificial intelligence and machine learning technologies
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02, 
                  y: -8,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="group h-full"
              >
                <Card className="project-card h-full group-hover:shadow-2xl group-hover:shadow-primary/10 flex flex-col hover-lift hover-glow">
                  <CardHeader className="pb-3 flex-shrink-0">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg bg-card border border-border/50 ${project.color}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <Badge variant="outline" className="bg-primary/10 border-primary/30 text-primary text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="flex-1 flex flex-col space-y-3">
                    <CardDescription className="text-muted-foreground leading-relaxed text-sm line-clamp-3">
                      {project.description}
                    </CardDescription>
                    
                    {/* Features - Compact */}
                    <div className="space-y-1">
                      <h4 className="text-xs font-semibold text-foreground">Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.features.slice(0, 3).map((feature) => (
                          <Badge
                            key={feature}
                            variant="secondary"
                            className="text-xs bg-secondary/50 text-secondary-foreground border-border/50 px-2 py-0.5"
                          >
                            {feature}
                          </Badge>
                        ))}
                        {project.features.length > 3 && (
                          <Badge
                            variant="secondary"
                            className="text-xs bg-secondary/50 text-secondary-foreground border-border/50 px-2 py-0.5"
                          >
                            +{project.features.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    {/* Tech Stack - Compact */}
                    <div className="space-y-1 mt-auto">
                      <h4 className="text-xs font-semibold text-foreground">Tech:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.slice(0, 4).map((tech) => {
                          const TechIcon = getTechIcon(tech);
                          return (
                            <div
                              key={tech}
                              className="flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-card/50 border border-border/30 hover:border-primary/50 transition-colors"
                            >
                              <TechIcon className="w-2.5 h-2.5" />
                              <span className="text-xs text-muted-foreground">{tech}</span>
                            </div>
                          );
                        })}
                        {project.tech.length > 4 && (
                          <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-card/50 border border-border/30">
                            <span className="text-xs text-muted-foreground">+{project.tech.length - 4}</span>
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