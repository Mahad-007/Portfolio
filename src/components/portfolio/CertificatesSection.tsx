import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, FileText, Star, Trophy } from "lucide-react";

export const CertificatesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const certificates = [
    {
      title: "Microsoft Certified Azure AI Engineer Associate",
      issuer: "Microsoft",
      date: "2024",
      description: "Professional certification demonstrating expertise in designing and implementing AI solutions on Microsoft Azure platform, including machine learning models, cognitive services, and AI applications.",
      skills: ["Azure AI Services", "Machine Learning", "Cognitive Services", "AI Solutions"],
      icon: FileText,
      color: "text-blue-500",
      category: "Professional Certification"
    },
    {
      title: "NAVTTC Certified ML Engineer",
      issuer: "National Vocational and Technical Training Commission",
      date: "2024",
      description: "Certified Machine Learning Engineer with A+ grade, demonstrating advanced proficiency in ML algorithms, data analysis, and practical implementation of machine learning solutions.",
      skills: ["Machine Learning", "Data Analysis", "Python Programming", "Statistical Modeling"],
      icon: Award,
      color: "text-green-500",
      category: "Technical Certification"
    },
    {
      title: "High Achiever Award",
      issuer: "Lahore Garrison University",
      date: "2024",
      description: "Recognized for extraordinary study efforts and exceptional academic performance, demonstrating dedication to excellence in computer science and artificial intelligence studies.",
      skills: ["Academic Excellence", "Leadership", "Innovation", "Research"],
      icon: Trophy,
      color: "text-yellow-500",
      category: "Academic Achievement"
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
    <section id="certificates" className="py-20 px-4 ai-bg">
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
            <Award className="w-8 h-8 text-primary" />
            <FileText className="w-8 h-8 text-accent" />
            <Trophy className="w-8 h-8 text-primary" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Certifications & <span className="text-shimmer">Achievements</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional certifications and academic achievements demonstrating expertise and commitment to excellence
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {certificates.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <motion.div
                key={cert.title}
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
                        <div className={`p-3 rounded-lg bg-card border border-border/50 ${cert.color}`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col gap-2">
                            <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                              {cert.title}
                            </CardTitle>
                            <p className="text-sm text-muted-foreground font-medium">{cert.issuer}</p>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="bg-primary/10 border-primary/30 text-primary text-xs">
                                {cert.category}
                              </Badge>
                              <span className="text-xs text-muted-foreground">{cert.date}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="flex-1 flex flex-col space-y-4">
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {cert.description}
                    </p>
                    
                    <div className="space-y-2 flex-1">
                      <h4 className="text-xs font-semibold text-foreground flex items-center gap-2">
                        <Star className="w-3 h-3 text-primary" />
                        Key Skills:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.map((skill, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-xs bg-secondary/50 text-secondary-foreground border-border/50 px-2 py-0.5"
                          >
                            {skill}
                          </Badge>
                        ))}
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
