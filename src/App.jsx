import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Zap, Brain, Rocket, Shield, Code } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function App() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);

  const features = [
    { icon: <Brain size={24} />, title: "Neural Networks", desc: "Advanced AI models integrated directly into your workflow for maximum efficiency." },
    { icon: <Zap size={24} />, title: "Lightning Fast", desc: "Optimized architecture ensuring sub-millisecond response times globally." },
    { icon: <Shield size={24} />, title: "Bank-grade Security", desc: "End-to-end encryption and compliance with top-tier security standards." },
    { icon: <Sparkles size={24} />, title: "Magic Integration", desc: "Seamlessly connects with your existing stack without any friction." },
    { icon: <Rocket size={24} />, title: "Infinite Scalability", desc: "Built to handle millions of requests without breaking a sweat." },
    { icon: <Code size={24} />, title: "Developer First", desc: "Comprehensive APIs and SDKs designed for modern development teams." },
    { icon: <Zap size={24} />, title: "Global Edge", desc: "Distributed across 200+ edge locations for reduced latency and high availability." }
  ];

  return (
    <div className="app-container">
      {/* Dynamic Background */}
      <div className="bg-gradients">
        <motion.div style={{ y: y1 }} className="gradient-blob blue" />
        <motion.div style={{ y: y2 }} className="gradient-blob purple" />
      </div>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="navbar"
      >
        <div className="logo">
          <Sparkles />
          NexuraAI
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="btn">Get Started</button>
      </motion.nav>

      {/* Hero Section */}
      <main className="hero" id="home">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="hero-content"
        >
          <motion.div variants={fadeIn} className="badge">
            ✨ Introducing NexuraAI 2.0
          </motion.div>
          <motion.h1 variants={fadeIn}>
            Build the Future <br />
            with <span>Unstoppable AI</span>
          </motion.h1>
          <motion.p variants={fadeIn}>
            Unleash the power of autonomous agents and next-generation neural engines to transform how you build, scale, and innovate on the web.
          </motion.p>
          <motion.div variants={fadeIn} className="hero-cta">
            <button className="btn">Start Building Free</button>
            <button className="btn btn-outline">Read Documentation</button>
          </motion.div>
        </motion.div>
      </main>

      {/* Features Section */}
      <section className="features" id="features">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="features-header"
        >
          <h2>Supercharge your stack</h2>
          <p>Everything you need to deploy intelligent applications at scale.</p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={stagger}
          className="features-grid"
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              className="feature-card"
            >
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; {new Date().getFullYear()} NexuraAI Inc. All rights reserved. Crafted with 💛 and AI.</p>
      </footer>
    </div>
  );
}
