"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 relative bg-surface/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-accent font-mono text-sm sm:text-base mb-4 tracking-wider uppercase">
            04. What's Next?
          </h2>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-muted text-lg mb-12 max-w-2xl mx-auto">
            I'm currently looking for new opportunities in robotics and software engineering. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="bg-surface border border-surface-hover p-12 rounded-2xl max-w-xl mx-auto text-center shadow-lg">
            <Mail className="w-12 h-12 text-accent mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-foreground mb-4">Email Me Directly</h3>
            <p className="text-muted mb-8 font-mono">
              subhamdey228540@gmail.com
            </p>
            <a 
              href="mailto:subhamdey228540@gmail.com"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-background bg-accent hover:bg-accent-hover rounded-lg transition-all hover:scale-105 active:scale-95"
            >
              <Send className="w-5 h-5 mr-2" />
              Say Hello
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
