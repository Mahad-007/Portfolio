
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
                
                <div className="space-y-6">
                  <a 
                    href="mailto:mahadghafoor.07@gmail.com?subject=Hello from Portfolio&body=Hi Mahad, I came across your portfolio and would like to connect!"
                    className="flex items-center justify-center space-x-4 p-4 rounded-xl hover:bg-primary/10 transition-all duration-300 group cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = 'mailto:mahadghafoor.07@gmail.com?subject=Hello from Portfolio&body=Hi Mahad, I came across your portfolio and would like to connect!';
                    }}
                  >
                    <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">Email</p>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors">mahadghafoor.07@gmail.com</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://github.com/Mahad-007"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-4 p-4 rounded-xl hover:bg-gray-800/10 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-gray-800/20 rounded-lg group-hover:bg-gray-800/30 transition-colors">
                      <Github className="w-6 h-6 text-gray-800 dark:text-white" />
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-foreground group-hover:text-gray-800 dark:group-hover:text-white transition-colors">GitHub</p>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors">@Mahad-007</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/mahad-khalid-ghafoor-001574240/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-4 p-4 rounded-xl hover:bg-accent/10 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-accent/20 rounded-lg group-hover:bg-accent/30 transition-colors">
                      <Linkedin className="w-6 h-6 text-accent" />
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-foreground group-hover:text-accent transition-colors">LinkedIn</p>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors">Mahad Khalid Ghafoor</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Floating Social Icons */}
              <div className="relative">
                <div className="glass rounded-2xl p-8 text-center">
                  <h3 className="text-xl font-bold mb-6">Connect with Me</h3>
                  
                  <div className="flex justify-center space-x-8">
                    {[
                      { 
                        Icon: Github, 
                        color: 'text-white hover:text-white', 
                        bgColor: 'bg-gray-800 hover:bg-primary',
                        href: 'https://github.com/Mahad-007',
                        label: 'GitHub'
                      },
                      { 
                        Icon: Linkedin, 
                        color: 'text-foreground hover:text-white', 
                        bgColor: 'bg-card hover:bg-blue-500',
                        href: 'https://www.linkedin.com/in/mahad-khalid-ghafoor-001574240/',
                        label: 'LinkedIn'
                      },
                      { 
                        Icon: Mail, 
                        color: 'text-foreground hover:text-white', 
                        bgColor: 'bg-card hover:bg-green-500',
                        href: 'mailto:mahadghafoor.07@gmail.com?subject=Hello from Portfolio&body=Hi Mahad, I came across your portfolio and would like to connect!',
                        label: 'Email'
                      },
                    ].map(({ Icon, color, bgColor, href, label }, index) => (
                      <a
                        key={index}
                        href={href}
                        target={Icon === Mail ? undefined : "_blank"}
                        rel={Icon === Mail ? undefined : "noopener noreferrer"}
                        className={`social-icon p-4 ${bgColor} rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-glow group cursor-pointer border border-border/50 hover:border-primary/50`}
                        title={label}
                        onClick={Icon === Mail ? (e) => {
                          e.preventDefault();
                          window.location.href = 'mailto:mahadghafoor.07@gmail.com?subject=Hello from Portfolio&body=Hi Mahad, I came across your portfolio and would like to connect!';
                        } : undefined}
                      >
                        <Icon className={`w-6 h-6 ${color} transition-colors`} />
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