import { motion } from "framer-motion";
import { Brain, Cpu, Zap } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/50 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* AI Icons */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Brain className="w-6 h-6 text-primary" />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Cpu className="w-6 h-6 text-accent" />
            </motion.div>
            <motion.div
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-6 h-6 text-primary" />
            </motion.div>
          </motion.div>

          {/* Main Footer Text */}
          <motion.p
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            © 2025 <span className="text-shimmer">Mahad Khalid Ghafoor</span>
          </motion.p>

          {/* Bottom Message */}
          <motion.p
            className="text-xs text-muted-foreground/70"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Building the future of AI, one algorithm at a time
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};