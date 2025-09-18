
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail } from 'lucide-react';

export const ContactSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Let's Connect
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to collaborate on exciting AI/ML projects? Let's build the future together.
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
          </motion.div>

          {/* Contact Info & Social Links */}
          <div className="max-w-4xl mx-auto">
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Contact Information */}
              <div className="glass rounded-2xl p-8 hover:shadow-glow transition-all duration-500 text-center">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">mahadghafoor.07@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-4">
                    <div className="p-3 bg-secondary/20 rounded-lg">
                      <Github className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium">GitHub</p>
                      <p className="text-muted-foreground">@Mahad-007</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-4">
                    <div className="p-3 bg-accent/20 rounded-lg">
                      <Linkedin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-muted-foreground">Mahad Khalid Ghafoor</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Social Icons */}
              <div className="relative">
                <div className="glass rounded-2xl p-8 text-center">
                  <h3 className="text-xl font-bold mb-6">Connect with Me</h3>
                  
                  <div className="flex justify-center space-x-6">
                    {[
                      { Icon: Github, color: 'hover:text-purple-400', href: 'https://github.com/muzamilfaisal1' },
                      { Icon: Linkedin, color: 'hover:text-blue-400', href: 'https://linkedin.com/in/muhammad-muzamil-50266431a' },
                      { Icon: Mail, color: 'hover:text-green-400', href: 'mailto:muzamilfaisal46@gmail.com' },
                    ].map(({ Icon, color, href }, index) => (
                      <a
                        key={index}
                        href={href}
                        target={Icon === Mail ? undefined : "_blank"}
                        rel={Icon === Mail ? undefined : "noopener noreferrer"}
                        className={`social-icon p-4 bg-muted hover:bg-gradient-primary rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-glow ${color} group cursor-pointer`}
                      >
                        <Icon className="w-6 h-6 group-hover:text-white transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};