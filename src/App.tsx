import { motion } from "motion/react";
import { 
  Cpu, 
  Globe, 
  Smartphone, 
  ArrowRight, 
  CheckCircle2, 
  Mail, 
  MessageSquare, 
  Zap, 
  Shield, 
  Code2,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <Cpu className="text-white w-6 h-6" />
            </div>
            <span className="font-display text-2xl font-bold tracking-tight">Leotechnology</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Services</a>
            <a href="#process" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Process</a>
            <a href="#contact" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Contact</a>
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all">
              Get Started
            </button>
          </div>

          <button 
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-gray-950 border-b border-white/10 px-6 py-8 space-y-6"
          >
            <a href="#services" className="block text-lg font-medium text-gray-400" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#process" className="block text-lg font-medium text-gray-400" onClick={() => setIsMenuOpen(false)}>Process</a>
            <a href="#contact" className="block text-lg font-medium text-gray-400" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold">
              Get Started
            </button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8"
          >
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-100">Next-Gen AI Solutions</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-5xl md:text-7xl font-display font-bold mb-8 leading-[1.1] tracking-tight"
          >
            Transforming Ideas into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Smart Digital Solutions
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto mb-12"
          >
            We build powerful AI-driven and scalable technology solutions for modern businesses looking to lead in the digital era.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 group transition-all">
              Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold transition-all">
              Book Consultation
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Our Services</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Comprehensive technology services tailored to your business needs.</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "AI Solutions",
                desc: "Custom AI tools to automate and scale your business operations with machine learning.",
                icon: Cpu,
                color: "text-blue-400"
              },
              {
                title: "Web Development",
                desc: "Modern, fast, and responsive websites built with the latest frameworks and technologies.",
                icon: Globe,
                color: "text-emerald-400"
              },
              {
                title: "Mobile Apps",
                desc: "High-performance iOS & Android apps designed for exceptional user experience.",
                icon: Smartphone,
                color: "text-purple-400"
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                variants={fadeIn}
                className="bg-gray-900 border border-white/5 p-8 rounded-3xl hover:border-blue-500/50 transition-all group"
              >
                <div className={`w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">How It Works</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Our streamlined process ensures your project is delivered on time and with excellence.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600/0 via-blue-600/50 to-blue-600/0 -translate-y-1/2 -z-10" />
            
            {[
              { step: "01", title: "Discovery", desc: "Understanding your vision and goals." },
              { step: "02", title: "Strategy", desc: "Planning the roadmap for success." },
              { step: "03", title: "Development", desc: "Building your solution with precision." },
              { step: "04", title: "Launch", desc: "Deploying and scaling your project." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-950 p-8 rounded-3xl border border-white/5 text-center relative"
              >
                <span className="text-4xl font-display font-black text-blue-600/20 absolute top-4 right-6">{item.step}</span>
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                  <CheckCircle2 className="text-white w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600 -z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 -z-10" />
        
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight"
          >
            Ready to Build Your <br /> Next Big Project?
          </motion.h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto opacity-90">
            Join forward-thinking companies already scaling with our smart technology solutions.
          </p>
          <button className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-5 rounded-2xl font-bold text-lg shadow-xl transition-all active:scale-95">
            Start Your Project Now
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-400 text-lg mb-10">
                Have a project in mind? We'd love to hear from you. Our team of experts is ready to help you transform your ideas into reality.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center">
                    <Mail className="text-blue-400 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email us at</p>
                    <p className="text-lg font-medium">hello@leotechnology.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center">
                    <MessageSquare className="text-blue-400 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Chat with us</p>
                    <p className="text-lg font-medium">Available 24/7 for support</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-8 md:p-12 rounded-[2.5rem] border border-white/5 shadow-2xl"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full bg-gray-950 border border-white/10 rounded-2xl p-4 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">Email</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full bg-gray-950 border border-white/10 rounded-2xl p-4 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
                  <textarea 
                    placeholder="Tell us about your project..." 
                    rows={4}
                    className="w-full bg-gray-950 border border-white/10 rounded-2xl p-4 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-5 rounded-2xl font-bold text-lg transition-all shadow-lg shadow-blue-600/20">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 bg-gray-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Cpu className="text-white w-5 h-5" />
            </div>
            <span className="font-display text-xl font-bold tracking-tight">Leotechnology</span>
          </div>
          
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>

          <p className="text-gray-500 text-sm">
            © 2026 Leotechnology. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
