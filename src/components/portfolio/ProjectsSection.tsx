import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Bot, Brain, Users, Activity, GraduationCap, Globe, Cpu, ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";
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

/* ── Image Gallery (for projects with screenshots) ── */
const ImageGallery = ({ images, title }: { images: string[]; title: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const next = (e: React.MouseEvent) => { e.preventDefault(); e.stopPropagation(); setCurrentIndex((i) => (i + 1) % images.length); };
  const prev = (e: React.MouseEvent) => { e.preventDefault(); e.stopPropagation(); setCurrentIndex((i) => (i - 1 + images.length) % images.length); };
  const go = (idx: number, e: React.MouseEvent) => { e.preventDefault(); e.stopPropagation(); setCurrentIndex(idx); };

  return (
    <div className="relative w-full h-52 overflow-hidden group/gallery">
      <img src={images[currentIndex]} alt={`${title} - ${currentIndex + 1}`} className="w-full h-full object-cover object-top transition-transform duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent" />
      {images.length > 1 && (
        <>
          <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white opacity-0 group-hover/gallery:opacity-100 transition-opacity hover:bg-black/70"><ChevronLeft className="w-4 h-4" /></button>
          <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white opacity-0 group-hover/gallery:opacity-100 transition-opacity hover:bg-black/70"><ChevronRight className="w-4 h-4" /></button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (<button key={i} onClick={(e) => go(i, e)} className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? "bg-white w-4" : "bg-white/50 hover:bg-white/75"}`} />))}
          </div>
        </>
      )}
    </div>
  );
};

/* ── 3D tilt card wrapper ── */
const TiltCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 });
  const handleMouse = (e: React.MouseEvent) => { const r = ref.current?.getBoundingClientRect(); if (!r) return; mx.set((e.clientX - r.left) / r.width - 0.5); my.set((e.clientY - r.top) / r.height - 0.5); };
  const handleLeave = () => { mx.set(0); my.set(0); };
  return (<motion.div ref={ref} style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} onMouseMove={handleMouse} onMouseLeave={handleLeave} className={className}>{children}</motion.div>);
};

/* ── Tech icon map ── */
const getTechIcon = (tech: string) => {
  const m: Record<string, any> = { "Python": SiPython, "TensorFlow": SiTensorflow, "PyTorch": SiPytorch, "OpenAI API": SiOpenai, "Hugging Face": SiHuggingface, "FastAPI": SiFastapi, "Streamlit": SiStreamlit, "Docker": SiDocker, "Pandas": SiPandas, "NumPy": SiNumpy, "Scikit-learn": SiScikitlearn, "OpenCV": SiOpencv, "spaCy": SiSpacy, "React": SiReact, "Next.js": SiNextdotjs, "Tailwind CSS": SiTailwindcss, "TypeScript": SiTypescript, "Node.js": SiNodedotjs, "Supabase": SiSupabase, "PostgreSQL": SiPostgresql };
  return m[tech] || SiPython;
};

/* ── Project type ── */
interface Project {
  title: string;
  description: string;
  tech: string[];
  category: string;
  icon: any;
  color: string;
  features: string[];
  images?: string[];
  link?: string;
  gradient: string;      // fallback header gradient for cards without images
}

/* ── Single project card ── */
const ProjectCard = ({ project }: { project: Project }) => {
  const IconComponent = project.icon;
  const hasLink = !!project.link;
  const hasImages = project.images && project.images.length > 0;

  return (
    <div className="w-[400px] flex-shrink-0 group" style={{ perspective: 1000 }}>
      <TiltCard className="h-full">
        <Card className="project-card h-full group-hover:shadow-2xl group-hover:shadow-primary/10 flex flex-col hover-glow overflow-hidden transition-shadow duration-300">
          {/* Header — image gallery or gradient fallback */}
          {hasImages ? (
            <ImageGallery images={project.images!} title={project.title} />
          ) : (
            <div className={`relative w-full h-52 overflow-hidden flex items-center justify-center ${project.gradient}`}>
              <IconComponent className="w-16 h-16 text-white/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent" />
            </div>
          )}

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
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-primary/10 transition-colors">
                  <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
                </a>
              )}
            </div>
            <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </CardTitle>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col space-y-4">
            <CardDescription className="text-muted-foreground leading-relaxed text-sm line-clamp-3">
              {project.description}
            </CardDescription>

            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-foreground">Key Features:</h4>
              <div className="flex flex-wrap gap-1.5">
                {project.features.map((f) => (
                  <Badge key={f} variant="secondary" className="text-xs bg-secondary/50 text-secondary-foreground border-border/50 px-2 py-0.5">{f}</Badge>
                ))}
              </div>
            </div>

            <div className="space-y-2 mt-auto">
              <h4 className="text-xs font-semibold text-foreground">Tech Stack:</h4>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.slice(0, 5).map((t) => {
                  const TI = getTechIcon(t);
                  return (<div key={t} className="flex items-center gap-1 px-2 py-1 rounded-md bg-card/50 border border-border/30 hover:border-primary/50 transition-colors"><TI className="w-3 h-3" /><span className="text-xs text-muted-foreground">{t}</span></div>);
                })}
                {project.tech.length > 5 && (
                  <div className="flex items-center px-2 py-1 rounded-md bg-card/50 border border-border/30"><span className="text-xs text-muted-foreground">+{project.tech.length - 5}</span></div>
                )}
              </div>
            </div>

            {hasLink && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-4">
                <Button className="w-full" variant="outline">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
                </Button>
              </a>
            )}
          </CardContent>
        </Card>
      </TiltCard>
    </div>
  );
};

/* ════════════════════════════════════════════════════════════
   PROJECTS SECTION — infinite horizontal marquee
   ════════════════════════════════════════════════════════════ */

export const ProjectsSection = () => {
  const ref = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Parallax background
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const orbY1 = useTransform(scrollYProgress, [0, 1], [120, -100]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [80, -140]);
  const orbY3 = useTransform(scrollYProgress, [0, 1], [150, -70]);
  const floatX = useTransform(scrollYProgress, [0, 1], [-25, 25]);

  // ── All projects (unified, no categories) ──
  const projects: Project[] = [
    {
      title: "Distriq AI",
      description: "Global relocation intelligence platform that helps expats and families know their neighborhood before they sign. AI-powered neighborhood comparison, interactive maps, market analytics, school ratings, and safety indices.",
      tech: ["React", "Next.js", "TypeScript", "Node.js"],
      category: "PropTech / AI",
      icon: Globe,
      color: "text-blue-600",
      features: ["Neighborhood Intelligence", "AI-Powered Analytics", "Interactive Maps", "Market Comparison"],
      images: ["/projects/distriq-1.png", "/projects/distriq-2.png", "/projects/distriq-3.png", "/projects/distriq-4.png"],
      link: "https://distriq-ai-production.up.railway.app/",
      gradient: "",
    },
    {
      title: "myNeutron",
      description: "Revolutionary Chrome extension — your AI Second Brain & Search. Personal memory for the internet with AI-powered context management, semantic search across platforms, and one-click capture with client-side encryption.",
      tech: ["Chrome Extension", "JavaScript", "AI Integration", "Semantic Search"],
      category: "AI Product",
      icon: Brain,
      color: "text-purple-500",
      features: ["AI Memory System", "Semantic Search", "Context Injection", "Privacy-First"],
      images: ["/projects/neutron-1.png", "/projects/neutron-2.png"],
      link: "https://chromewebstore.google.com/detail/ojjgidkegodkkcjcpoefndpgfjhamhhb?utm_source=item-share-cb",
      gradient: "",
    },
    {
      title: "BeanBee AI",
      description: "Real-time BSC token scanner tracking every new token launch on Binance Smart Chain. BeeScore safety ratings, whale activity monitoring, rug detection, custom alerts, and bonding curve progress — all in one place.",
      tech: ["React", "TypeScript", "Node.js", "Blockchain"],
      category: "Web3 / DeFi",
      icon: TrendingUp,
      color: "text-yellow-500",
      features: ["Real-time Token Tracking", "BeeScore Safety Ratings", "Whale Monitoring", "Rug Detection"],
      images: ["/projects/beanbee-1.png", "/projects/beanbee-2.png", "/projects/beanbee-3.png"],
      link: "https://beanbee.ai/",
      gradient: "",
    },
    {
      title: "LynxFlow Health",
      description: "Remote patient treatment monitoring platform — track medication adherence, predict risks early, improve patient outcomes. Real-time dose monitoring, analytics dashboard, and IoT device integration with 94% adherence rates.",
      tech: ["React", "Next.js", "Node.js", "Healthcare IoT"],
      category: "Healthcare Tech",
      icon: Activity,
      color: "text-orange-500",
      features: ["Remote Monitoring", "Medication Tracking", "Analytics Dashboard", "IoT Integration"],
      images: ["/projects/lynxflow-1.png", "/projects/lynxflow-2.png", "/projects/lynxflow-3.png"],
      link: "https://lynxflowhealth.com/",
      gradient: "",
    },
    {
      title: "FileScout",
      description: "Data intelligence platform that orchestrates web scraping pipelines, AI research agents, and post-processing workflows. Features scheduled crawls, Apify actor management, data quality pipelines with deduplication, conflict resolution, and metadata merging.",
      tech: ["React", "TypeScript", "Node.js", "Apify", "Railway"],
      category: "Data Intelligence",
      icon: Cpu,
      color: "text-amber-500",
      features: ["Pipeline Orchestration", "AI Web Research Agent", "Data Quality Pipelines", "Crawl Scheduling"],
      images: ["/projects/filescout-1.png", "/projects/filescout-2.png", "/projects/filescout-3.png", "/projects/filescout-4.png"],
      link: "https://dashboard-development-f9bb.up.railway.app/",
      gradient: "",
    },
    {
      title: "LUMI",
      description: "Personal AI-powered learning platform — adaptive learning paths, gamification, real-time collaboration. AI Chat Coach, intelligent quizzes, interactive whiteboard, and progress tracking with XP rewards and leaderboards.",
      tech: ["React", "Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
      category: "EdTech",
      icon: GraduationCap,
      color: "text-purple-500",
      features: ["AI Chat Coach", "Personalized Learning", "Gamification", "Real-time Collaboration"],
      images: ["/projects/lumi-1.png", "/projects/lumi-2.png", "/projects/lumi-3.png", "/projects/lumi-4.png"],
      link: "https://www.lumi-learn.app/",
      gradient: "",
    },
  ];

  // ── Scroll-based marquee (no CSS animation — full JS control) ──
  const CARD_WIDTH = 432; // 400px card + 32px gap
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const autoScrollSpeed = 0.8; // px per frame (~48px/s at 60fps)

  // Auto-scroll loop
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let raf: number;

    const tick = () => {
      if (!isPaused) {
        el.scrollLeft += autoScrollSpeed;
        // Seamless wrap: jump back when past the first copy
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) el.scrollLeft -= half;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isPaused]);

  // Arrow click — smooth native scroll by one card
  const scrollByCard = useCallback((direction: 1 | -1) => {
    const el = containerRef.current;
    if (!el) return;
    const half = el.scrollWidth / 2;

    // If going left near the start, jump to the duplicate half first
    if (direction === -1 && el.scrollLeft < CARD_WIDTH) {
      el.scrollLeft += half;
    }

    el.scrollBy({ left: direction * CARD_WIDTH, behavior: "smooth" });
  }, []);

  return (
    <section id="projects" className="py-16 ai-bg relative overflow-hidden" ref={sectionRef}>
      {/* Parallax background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div className="absolute -top-10 right-[10%] w-80 h-80 bg-primary/4 rounded-full blur-3xl will-change-transform" style={{ y: orbY1, x: floatX }} />
        <motion.div className="absolute bottom-10 -left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl will-change-transform" style={{ y: orbY2 }} />
        <motion.div className="absolute top-1/3 left-[60%] w-48 h-48 bg-primary/3 rounded-full blur-2xl will-change-transform" style={{ y: orbY3 }} />
        <motion.div className="absolute top-[12%] left-[8%] w-2 h-2 rounded-full bg-accent/20 will-change-transform" style={{ y: orbY2 }} />
        <motion.div className="absolute bottom-[15%] right-[6%] w-1.5 h-1.5 rounded-full bg-primary/25 will-change-transform" style={{ y: orbY1 }} />
      </div>

      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
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
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions spanning web applications and artificial intelligence
          </p>
        </motion.div>
      </div>

      {/* ── Infinite scroll carousel with arrow controls ── */}
      <div
        className="relative w-full group/carousel"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left arrow */}
        <button
          onClick={() => scrollByCard(-1)}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-card/90 backdrop-blur-sm border border-border/50 shadow-lg shadow-black/10 flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:border-primary hover:shadow-primary/25 transition-all duration-300 opacity-0 group-hover/carousel:opacity-100"
          aria-label="Previous project"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Right arrow */}
        <button
          onClick={() => scrollByCard(1)}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-card/90 backdrop-blur-sm border border-border/50 shadow-lg shadow-black/10 flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:border-primary hover:shadow-primary/25 transition-all duration-300 opacity-0 group-hover/carousel:opacity-100"
          aria-label="Next project"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Edge fade masks */}
        <div
          className="relative w-full"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
          }}
        >
          <div
            ref={containerRef}
            className="flex gap-8 overflow-x-auto marquee-scroll-container"
          >
            {/* Render cards twice for seamless loop */}
            {[...projects, ...projects].map((project, i) => (
              <ProjectCard key={`${project.title}-${i}`} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
