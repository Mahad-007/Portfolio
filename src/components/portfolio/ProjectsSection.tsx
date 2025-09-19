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
      title: "myNeutron - AI Second Brain & Search",
      description: "Revolutionary Chrome extension that serves as your personal memory for the internet. Features AI-powered context management, semantic search across multiple platforms, and one-click capture system with client-side encryption.",
      tech: ["Chrome Extension", "JavaScript", "AI Integration", "Semantic Search", "Blockchain"],
      category: "AI Product",
      icon: Brain,
      color: "text-purple-500",
      features: ["AI Memory System", "Semantic Search", "Context Injection", "Privacy-First"],
      link: "https://chromewebstore.google.com/detail/ojjgidkegodkkcjcpoefndpgfjhamhhb?utm_source=item-share-cb"
    },
    {
      title: "AI Web Researcher",
      description: "Intelligent web research system using Groq's function calling capabilities. The system can automatically search the web, scrape content, and provide comprehensive research results with real-time data analysis.",
      tech: ["Groq API", "Python", "Streamlit", "Web Scraping", "Function Calling"],
      category: "AI Research",
      icon: Brain,
      color: "text-blue-500",
      features: ["Function Calling", "Web Search", "Content Scraping", "Real-time Analysis"],
      link: "https://github.com/Mahad-007/Web-Researcher-Via-Groq-sFunction-Calling"
    },
    {
      title: "Prompt Optimizer MCP Server",
      description: "Advanced MCP server deployed on Smithery platform for optimizing AI prompts. Provides intelligent prompt suggestions, A/B testing capabilities, and performance analytics for better AI model interactions.",
      tech: ["MCP Servers", "Python", "Smithery", "Prompt Engineering", "API Development"],
      category: "MCP Development",
      icon: Bot,
      color: "text-purple-500",
      features: ["Prompt Optimization", "A/B Testing", "Performance Analytics", "API Integration"],
      link: "https://smithery.ai/server/@Mahad-007/promptoptimizermcp"
    },
    {
      title: "ResuMatch AI",
      description: "Intelligent resume analysis system that identifies gaps and provides personalized improvement suggestions. Uses advanced NLP and machine learning to analyze resumes and offer actionable career development advice.",
      tech: ["Streamlit", "Python", "NLP", "Machine Learning", "Resume Analysis"],
      category: "AI Analytics",
      icon: Users,
      color: "text-green-500",
      features: ["Gap Analysis", "Improvement Suggestions", "NLP Processing", "Career Insights"],
      link: "https://mahad-007-resumatch-ai-main-1jiakw.streamlit.app/"
    },
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
      "CrewAI": SiPython,
      "MCP Servers": SiPython,
      "Langchain": SiPython,
      "Vapi": SiPython,
      "Next.js": SiPython,
      "Supabase": SiPython,
      "PostgreSQL": SiPython,
      "Drizzle ORM": SiPython,
      "RAG": SiPython,
      "Chainlit": SiPython,
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
            const CardWrapper = project.link ? 'a' : 'div';
            const cardProps = project.link ? {
              href: project.link,
              target: "_blank",
              rel: "noopener noreferrer"
            } : {};
            
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
                <CardWrapper {...cardProps} className={project.link ? "block h-full" : ""}>
                  <Card className={`project-card h-full group-hover:shadow-2xl group-hover:shadow-primary/10 flex flex-col hover-lift hover-glow ${project.link ? 'cursor-pointer' : ''}`}>
                    <CardHeader className="pb-3 flex-shrink-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg bg-card border border-border/50 ${project.color}`}>
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <Badge variant="outline" className="bg-primary/10 border-primary/30 text-primary text-xs">
                            {project.category}
                          </Badge>
                        </div>
                        {project.link && (
                          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        )}
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
                </CardWrapper>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};