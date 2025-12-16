import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Brain, Code2, Cpu, Database, Smartphone, Link2 } from 'lucide-react';
import {
  SiPython,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiFastapi,
  SiTensorflow,
  SiPytorch,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiSolidity,
  SiOpenai,
  SiLangchain,
  SiSupabase,
  SiTailwindcss,
} from 'react-icons/si';

type CategoryKey = 'all' | 'generative-ai' | 'frontend' | 'ai-ml' | 'backend' | 'mobile' | 'web3';

export const SkillsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('all');

  const categories = [
    {
      id: 'generative-ai' as CategoryKey,
      title: 'Generative AI',
      icon: Brain,
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      id: 'frontend' as CategoryKey,
      title: 'Web Development',
      icon: Code2,
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      id: 'ai-ml' as CategoryKey,
      title: 'AI / ML',
      icon: Cpu,
      gradient: 'from-orange-500 to-red-600',
    },
    {
      id: 'backend' as CategoryKey,
      title: 'Backend & APIs',
      icon: Database,
      gradient: 'from-green-500 to-teal-600',
    },
    {
      id: 'mobile' as CategoryKey,
      title: 'Mobile Apps',
      icon: Smartphone,
      gradient: 'from-indigo-500 to-purple-600',
    },
    {
      id: 'web3' as CategoryKey,
      title: 'Web3 & Blockchain',
      icon: Link2,
      gradient: 'from-yellow-500 to-orange-600',
    },
  ];

  const technologies = [
    { name: 'Python', icon: SiPython, categories: ['generative-ai', 'ai-ml', 'backend'] },
    { name: 'TypeScript', icon: SiTypescript, categories: ['frontend', 'backend', 'mobile'] },
    { name: 'React', icon: SiReact, categories: ['frontend', 'mobile'] },
    { name: 'Next.js', icon: SiNextdotjs, categories: ['frontend'] },
    { name: 'Node.js', icon: SiNodedotjs, categories: ['backend', 'frontend'] },
    { name: 'FastAPI', icon: SiFastapi, categories: ['backend', 'ai-ml'] },
    { name: 'TensorFlow', icon: SiTensorflow, categories: ['ai-ml', 'generative-ai'] },
    { name: 'PyTorch', icon: SiPytorch, categories: ['ai-ml', 'generative-ai'] },
    { name: 'PostgreSQL', icon: SiPostgresql, categories: ['backend'] },
    { name: 'MongoDB', icon: SiMongodb, categories: ['backend'] },
    { name: 'Docker', icon: SiDocker, categories: ['backend'] },
    { name: 'Solidity', icon: SiSolidity, categories: ['web3'] },
    { name: 'OpenAI', icon: SiOpenai, categories: ['generative-ai', 'ai-ml'] },
    { name: 'LangChain', icon: SiLangchain, categories: ['generative-ai', 'ai-ml'] },
    { name: 'Supabase', icon: SiSupabase, categories: ['backend', 'frontend'] },
    { name: 'Tailwind CSS', icon: SiTailwindcss, categories: ['frontend'] },
  ];

  const filteredTechnologies = selectedCategory === 'all'
    ? technologies
    : technologies.filter(tech => tech.categories.includes(selectedCategory));

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  const techVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20 relative ai-bg" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 border-2 border-primary rounded-lg mb-6">
              <span className="text-primary font-semibold">Skills & Expertise</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Technical <span className="text-primary">Skills</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hover or click on a category to explore related tools
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left: Category Cards */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4"
            >
              {categories.map((category, index) => {
                const IconComponent = category.icon;
                const isSelected = selectedCategory === category.id;

                return (
                  <motion.button
                    key={category.id}
                    variants={cardVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`group relative p-6 rounded-xl border-2 transition-all duration-300 ${
                      isSelected
                        ? 'border-primary bg-primary/10 shadow-lg shadow-primary/20'
                        : 'border-border bg-card hover:border-primary/50 hover:bg-primary/5'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div
                        className={`p-3 rounded-lg bg-gradient-to-br ${category.gradient} transition-transform duration-300 group-hover:scale-110`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-foreground">
                        {category.title}
                      </span>
                    </div>
                  </motion.button>
                );
              })}
            </motion.div>

            {/* Right: Technical Proficiency Panel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="border-2 border-border rounded-xl p-6 md:p-8 bg-card"
            >
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Technical Proficiency
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Core skills across AI/ML, full-stack development, and Web3. Click a category to filter.
              </p>

              {/* Technology Grid */}
              <div className="grid grid-cols-2 gap-3">
                {filteredTechnologies.map((tech, index) => {
                  const TechIcon = tech.icon;

                  return (
                    <motion.div
                      key={tech.name}
                      variants={techVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                    >
                      <TechIcon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium text-foreground">
                        {tech.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Show all button */}
              {selectedCategory !== 'all' && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={() => setSelectedCategory('all')}
                  className="mt-6 w-full py-2 px-4 rounded-lg border-2 border-primary text-primary font-medium hover:bg-primary/10 transition-all duration-300"
                >
                  Show All Technologies
                </motion.button>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};