import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef } from 'react';

export const SkillsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const skillsRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: 'Programming & Web',
      skills: [
        { name: 'Python', level: 95, color: 'from-yellow-400 to-yellow-600' },
        { name: 'JavaScript', level: 85, color: 'from-yellow-300 to-orange-500' },
        { name: 'React', level: 80, color: 'from-blue-400 to-blue-600' },
        { name: 'Next.js', level: 88, color: 'from-gray-600 to-gray-800' },
        { name: 'HTML/CSS', level: 90, color: 'from-orange-400 to-red-500' },
        { name: 'Tailwind CSS', level: 85, color: 'from-teal-400 to-blue-500' },
      ],
    },
    {
      title: 'Machine Learning & AI',
      skills: [
        { name: 'TensorFlow', level: 90, color: 'from-orange-400 to-orange-600' },
        { name: 'PyTorch', level: 85, color: 'from-red-500 to-red-700' },
        { name: 'Scikit-learn', level: 88, color: 'from-blue-500 to-indigo-600' },
        { name: 'Keras', level: 85, color: 'from-red-400 to-pink-500' },
        { name: 'OpenCV', level: 80, color: 'from-green-400 to-green-600' },
        { name: 'Pandas', level: 92, color: 'from-purple-400 to-purple-600' },
        { name: 'Langchain', level: 82, color: 'from-cyan-400 to-blue-500' },
      ],
    },
    {
      title: 'AI Agents & Conversational AI',
      skills: [
        { name: 'AI Agents', level: 90, color: 'from-purple-500 to-pink-600' },
        { name: 'CrewAI', level: 85, color: 'from-indigo-500 to-purple-600' },
        { name: 'MCP Servers', level: 88, color: 'from-blue-500 to-cyan-600' },
        { name: 'Conversational AI', level: 87, color: 'from-green-500 to-teal-600' },
        { name: 'Chatbot Development', level: 89, color: 'from-orange-500 to-red-500' },
        { name: 'RAG Systems', level: 86, color: 'from-cyan-400 to-blue-500' },
        { name: 'Vapi', level: 80, color: 'from-pink-400 to-purple-500' },
      ],
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'FastAPI', level: 85, color: 'from-green-500 to-teal-600' },
        { name: 'Supabase', level: 82, color: 'from-green-400 to-emerald-600' },
        { name: 'PostgreSQL', level: 80, color: 'from-blue-400 to-indigo-600' },
        { name: 'Drizzle ORM', level: 78, color: 'from-orange-400 to-red-500' },
        { name: 'Docker', level: 75, color: 'from-blue-400 to-blue-600' },
        { name: 'Git', level: 90, color: 'from-orange-500 to-red-500' },
        { name: 'AWS', level: 70, color: 'from-yellow-400 to-orange-500' },
      ],
    },
    {
      title: 'Development Tools & Frameworks',
      skills: [
        { name: 'Streamlit', level: 88, color: 'from-red-400 to-pink-500' },
        { name: 'Chainlit', level: 85, color: 'from-purple-400 to-pink-500' },
        { name: 'Machine Learning', level: 95, color: 'from-indigo-500 to-purple-600' },
        { name: 'Deep Learning', level: 90, color: 'from-purple-500 to-pink-600' },
        { name: 'NLP', level: 85, color: 'from-green-500 to-teal-600' },
        { name: 'Computer Vision', level: 80, color: 'from-blue-500 to-cyan-600' },
      ],
    },
  ];

  useEffect(() => {
    // Skill animations on scroll
    if (inView && skillsRef.current) {
      const progressBars = skillsRef.current.querySelectorAll('.progress-bar');
      progressBars.forEach((bar) => {
        const element = bar as HTMLElement;
        const width = element.getAttribute('data-width');
        if (width) {
          setTimeout(() => {
            element.style.width = `${width}%`;
          }, 500);
        }
      });
    }
  }, [inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="skills" className="py-20 relative ai-bg" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Skills & <span className="text-shimmer">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building intelligent solutions
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6"></div>
          </motion.div>

          {/* Skills Grid */}
          <div ref={skillsRef} className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={categoryVariants}
                className="ai-card hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500"
              >
                <h3 className="text-xl font-bold mb-6 text-center text-foreground">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="group">
                      {/* Skill Name and Level */}
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="relative">
                        <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                          <div
                            className={`progress-bar h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                            data-width={skill.level}
                            style={{ width: '0%' }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};