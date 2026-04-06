import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Bot, Brain, MessageSquare, TrendingUp, Users, Activity, GraduationCap, ChevronLeft, ChevronRight, Globe, Cpu } from "lucide-react";
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
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiSupabase,
  SiPostgresql,
} from "react-icons/si";

// Image Gallery Component for Web Projects
const ImageGallery = ({ images, title }: { images: string[]; title: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-56 overflow-hidden group/gallery">
      <img
        src={images[currentIndex]}
        alt={`${title} - ${currentIndex + 1}`}
        className="w-full h-full object-cover object-top transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent" />

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white opacity-0 group-hover/gallery:opacity-100 transition-opacity hover:bg-black/70"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white opacity-0 group-hover/gallery:opacity-100 transition-opacity hover:bg-black/70"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => goToImage(index, e)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-white w-4"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeCategory, setActiveCategory] = useState<"web" | "ai">("web");

  // Web Projects with multiple images
  const webProjects = [
    {
      title: "Distriq AI",
      description: "Global relocation intelligence platform that helps expats and families know their neighborhood before they sign. Features AI-powered neighborhood comparison, interactive maps, market analytics, school ratings, and safety indices across Dubai, Singapore, and London.",
      tech: ["React", "Next.js", "TypeScript", "Node.js", "AI/ML"],
      category: "PropTech / AI",
      icon: Globe,
      color: "text-blue-600",
      features: ["Neighborhood Intelligence", "AI-Powered Analytics", "Interactive Maps", "Market Comparison"],
      images: ["/projects/distriq-1.png", "/projects/distriq-2.png", "/projects/distriq-3.png", "/projects/distriq-4.png"],
      link: "https://distriq.ai/"
    },
    {
      title: "BeanBee AI",
      description: "Real-time BSC token scanner that tracks every new token launch on Binance Smart Chain. Features BeeScore safety ratings, whale activity monitoring, rug detection, custom alerts, and bonding curve progress — all in one place.",
      tech: ["React", "TypeScript", "Node.js", "Blockchain", "Real-time Data"],
      category: "Web3 / DeFi",
      icon: TrendingUp,
      color: "text-yellow-500",
      features: ["Real-time Token Tracking", "BeeScore Safety Ratings", "Whale Monitoring", "Rug Detection"],
      images: ["/projects/beanbee-1.png", "/projects/beanbee-2.png", "/projects/beanbee-3.png"],
      link: "https://beanbee.ai/"
    },
    {
      title: "LynxFlow Health",
      description: "Remote patient treatment monitoring platform that helps healthcare providers track medication adherence, predict risks early, and improve patient outcomes. Features real-time dose monitoring, analytics dashboard, and IoT device integration with 94% better medication adherence rates.",
      tech: ["React", "Next.js", "Node.js", "Healthcare IoT", "Analytics"],
      category: "Healthcare Tech",
      icon: Activity,
      color: "text-orange-500",
      features: ["Remote Monitoring", "Medication Tracking", "Analytics Dashboard", "IoT Integration"],
      images: ["/projects/lynxflow-1.png", "/projects/lynxflow-2.png", "/projects/lynxflow-3.png"],
      link: "https://lynxflowhealth.com/"
    },
    {
      title: "LUMI - AI Learning Coach",
      description: "Personal AI-powered learning platform that revolutionizes education with adaptive learning paths, gamification, and real-time collaboration. Features AI Chat Coach, intelligent quizzes, interactive whiteboard, and progress tracking with XP rewards and leaderboards.",
      tech: ["React", "Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
      category: "EdTech",
      icon: GraduationCap,
      color: "text-purple-500",
      features: ["AI Chat Coach", "Personalized Learning", "Gamification", "Real-time Collaboration"],
      images: ["/projects/lumi-1.png", "/projects/lumi-2.png", "/projects/lumi-3.png", "/projects/lumi-4.png"],
      link: "https://www.lumi-learn.app/"
    },
  ];

  // AI/ML Projects
  const aiProjects = [
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
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 }
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
      "React": SiReact,
      "Next.js": SiNextdotjs,
      "Tailwind CSS": SiTailwindcss,
      "TypeScript": SiTypescript,
      "Node.js": SiNodedotjs,
      "Supabase": SiSupabase,
      "PostgreSQL": SiPostgresql,
    };
    return iconMap[tech] || SiPython;
  };

  return (
    <section id="projects" className="py-16 px-4 ai-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <motion.div
            className="flex items-center justify-center gap-3 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Globe className="w-8 h-8 text-primary" />
            <Cpu className="w-8 h-8 text-accent" />
            <Brain className="w-8 h-8 text-primary" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            A small selection of<span className="text-shimmer"> Featured Work</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Innovative solutions spanning web applications and artificial intelligence
          </p>

          {/* Category Tabs */}
          <div className="flex justify-center gap-4 mb-8">
            <Button
              variant={activeCategory === "web" ? "default" : "outline"}
              size="lg"
              onClick={() => setActiveCategory("web")}
              className={`flex items-center gap-2 px-6 py-3 transition-all ${
                activeCategory === "web"
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "hover:bg-primary/10"
              }`}
            >
              <Globe className="w-5 h-5" />
              Web Projects
            </Button>
            <Button
              variant={activeCategory === "ai" ? "default" : "outline"}
              size="lg"
              onClick={() => setActiveCategory("ai")}
              className={`flex items-center gap-2 px-6 py-3 transition-all ${
                activeCategory === "ai"
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "hover:bg-primary/10"
              }`}
            >
              <Cpu className="w-5 h-5" />
              AI/ML Projects
            </Button>
          </div>
        </motion.div>

        {/* Web Projects Grid */}
        {activeCategory === "web" && (
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key="web-projects"
          >
            {webProjects.map((project) => {
              const IconComponent = project.icon;
              const hasLink = project.link && project.link.length > 0;

              return (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  whileHover={{
                    y: -8,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className="group h-full"
                >
                  <Card className="project-card h-full group-hover:shadow-2xl group-hover:shadow-primary/10 flex flex-col hover-lift hover-glow overflow-hidden">
                    <ImageGallery images={project.images} title={project.title} />

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
                        {hasLink && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
                          </a>
                        )}
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="flex-1 flex flex-col space-y-4">
                      <CardDescription className="text-muted-foreground leading-relaxed text-sm">
                        {project.description}
                      </CardDescription>

                      {/* Features */}
                      <div className="space-y-2">
                        <h4 className="text-xs font-semibold text-foreground">Key Features:</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {project.features.map((feature) => (
                            <Badge
                              key={feature}
                              variant="secondary"
                              className="text-xs bg-secondary/50 text-secondary-foreground border-border/50 px-2 py-0.5"
                            >
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div className="space-y-2 mt-auto">
                        <h4 className="text-xs font-semibold text-foreground">Tech Stack:</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tech.map((tech) => {
                            const TechIcon = getTechIcon(tech);
                            return (
                              <div
                                key={tech}
                                className="flex items-center gap-1 px-2 py-1 rounded-md bg-card/50 border border-border/30 hover:border-primary/50 transition-colors"
                              >
                                <TechIcon className="w-3 h-3" />
                                <span className="text-xs text-muted-foreground">{tech}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* View Project Button */}
                      {hasLink && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4"
                        >
                          <Button className="w-full" variant="outline">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Live Project
                          </Button>
                        </a>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {/* AI/ML Projects Grid */}
        {activeCategory === "ai" && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key="ai-projects"
          >
            {aiProjects.map((project) => {
              const IconComponent = project.icon;
              const hasLink = project.link && project.link.length > 0;
              const CardWrapper = hasLink ? 'a' : 'div';
              const cardProps = hasLink ? {
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
                  <CardWrapper {...cardProps} className="block h-full">
                    <Card className={`project-card h-full group-hover:shadow-2xl group-hover:shadow-primary/10 flex flex-col hover-lift hover-glow ${hasLink ? 'cursor-pointer' : ''}`}>
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
                          {hasLink && (
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
        )}
      </div>
    </section>
  );
};
