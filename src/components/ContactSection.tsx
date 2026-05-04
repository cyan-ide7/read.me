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

          <form className="bg-surface border border-surface-hover p-8 rounded-2xl max-w-xl mx-auto text-left shadow-lg">
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-muted mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-background border border-surface-hover rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors"
                placeholder="John Doe"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-muted mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-background border border-surface-hover rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors"
                placeholder="john@example.com"
              />
            </div>
            
            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-medium text-muted mb-2">Message</label>
              <textarea 
                id="message" 
                rows={4}
                className="w-full bg-background border border-surface-hover rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="Hello!"
              ></textarea>
            </div>
            
            <button 
              type="button"
              className="w-full inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-background bg-accent hover:bg-accent-hover rounded-lg transition-all"
            >
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
