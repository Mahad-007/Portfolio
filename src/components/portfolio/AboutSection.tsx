import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Cpu, Database, Zap, Bot, TrendingUp, Code, Target, MessageSquare } from "lucide-react";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const expertise = [
    { name: "Machine Learning", icon: Brain, color: "text-primary" },
    { name: "Deep Learning", icon: Cpu, color: "text-accent" },
    { name: "AI Agents", icon: Bot, color: "text-primary" },
    { name: "MCP Servers", icon: Database, color: "text-accent" },
    { name: "CrewAI", icon: TrendingUp, color: "text-primary" },
    { name: "Conversational AI", icon: MessageSquare, color: "text-accent" },
    { name: "Data Science", icon: Database, color: "text-primary" },
    { name: "Python Development", icon: Code, color: "text-accent" },
    { name: "AI Model Deployment", icon: Zap, color: "text-primary" },
  ];

  const stats = [
    { label: "AI Projects", value: "25+", icon: Brain },
    { label: "ML Models", value: "50+", icon: Cpu },
    { label: "Technologies", value: "25+", icon: Zap },
    { label: "AI Agents", value: "10+", icon: Bot }
  ];

  return (
    <section id="about" className="py-20 px-4 ai-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="flex items-center justify-center gap-3 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Brain className="w-8 h-8 text-primary" />
              <Cpu className="w-8 h-8 text-accent" />
              <Database className="w-8 h-8 text-primary" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About <span className="text-shimmer">Me</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate AI/ML engineer crafting intelligent solutions for the future
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio Text */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a dedicated <span className="text-primary font-semibold">AI & Machine Learning Engineer</span> with a passion for 
                  creating intelligent systems that solve real-world problems. My expertise spans across the entire ML pipeline, 
                  from data preprocessing and model development to deployment and monitoring.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With a strong foundation in <span className="text-accent font-semibold">Python</span> and deep learning frameworks like 
                  <span className="text-primary font-semibold"> TensorFlow</span> and <span className="text-accent font-semibold">PyTorch</span>, 
                  I specialize in building scalable AI solutions that drive business value and innovation.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My journey includes developing <span className="text-primary font-semibold">trading algorithms</span>, 
                  <span className="text-accent font-semibold"> NLP applications</span>, 
                  <span className="text-primary font-semibold"> computer vision systems</span>, and 
                  <span className="text-accent font-semibold"> generative AI models</span> that push the boundaries of what's possible.
                </p>
              </div>
            </motion.div>

            {/* Expertise Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Card className="ai-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                    <Brain className="w-6 h-6 text-primary" />
                    Core Expertise
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-3">
                    {expertise.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <motion.div
                          key={item.name}
                          className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors hover-lift hover-glow"
                          initial={{ opacity: 0, x: 20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                          whileHover={{ scale: 1.02, x: 5 }}
                        >
                          <IconComponent className={`w-5 h-5 ${item.color}`} />
                          <span className="text-foreground font-medium">{item.name}</span>
                        </motion.div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="text-center p-6 rounded-xl bg-card/50 border border-border/30 hover:border-primary/50 transition-colors hover-lift hover-glow"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                >
                  <IconComponent className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};