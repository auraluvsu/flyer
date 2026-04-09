import { Link } from 'react-router-dom';
import { Palette, Smartphone, Zap, Rocket, TrendingUp, Wrench, Shield, RefreshCw, MessageSquare, Mail, Phone, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import hartImage from '../../assets/1606a94e1a158c71098654ece820fbe9b742961c.png';
import scentsImage from '../../assets/73ef7b487eb1fb1a8140ca71f471a04b76ee0d5d.png';

export function PricingPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white dark:bg-gray-900"
    >
      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        
        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Website Design & Development Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Modern, fast, and scalable websites built to grow with your business.
          </p>
        </header>

        {/* Pricing Cards */}
        <div className="space-y-8 mb-16">
          
          {/* Initial Website Build Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    Initial Website Build
                  </h2>
                  <p className="text-emerald-50 text-lg">
                    Everything you need to launch your online presence
                  </p>
                </div>
                <div className="md:text-right">
                  <div className="text-2xl font-semibold text-white">One-time payment</div>
                  <div className="text-emerald-50 text-sm mt-1">No hidden fees</div>
                </div>
              </div>
            </div>
            
            <div className="px-8 py-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="bg-emerald-50 p-2 rounded-lg shrink-0">
                    <Palette className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Custom website design</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Tailored to your brand</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-emerald-50 p-2 rounded-lg shrink-0">
                    <Smartphone className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Responsive design</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Mobile, tablet, desktop</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-emerald-50 p-2 rounded-lg shrink-0">
                    <Zap className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Performance & basic SEO optimisation</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Fast, discoverable websites</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-emerald-50 p-2 rounded-lg shrink-0">
                    <Rocket className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Deployment & launch support</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">We'll get you live and running smoothly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-8 py-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    Ongoing Development & Maintenance
                  </h2>
                  <p className="text-emerald-50 text-lg">
                    Keep your website growing and secure
                  </p>
                </div>
                <div className="md:text-right">
                  <div className="text-2xl font-semibold text-white">Monthly Subscription</div>
                  <div className="text-emerald-50 text-sm mt-1">Flexible plans available</div>
                </div>
              </div>
            </div>
            
            <div className="px-8 py-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="bg-emerald-50 p-2 rounded-lg shrink-0">
                    <TrendingUp className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Continuous feature development</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Regular improvements & additions</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-emerald-50 p-2 rounded-lg shrink-0">
                    <Wrench className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Bug fixes & performance updates</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Keep everything running smoothly</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-emerald-50 p-2 rounded-lg shrink-0">
                    <Shield className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Security updates & monitoring</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Stay protected from threats</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-emerald-50 p-2 rounded-lg shrink-0">
                    <RefreshCw className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Content updates & design changes</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Keep your site fresh and current</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 md:col-span-2">
                  <div className="bg-emerald-50 p-2 rounded-lg shrink-0">
                    <MessageSquare className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Priority support & long-term scalability</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Direct access to help when you need it</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Recent Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              See what we've built for our clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* H'art of Family Project */}
            <Link
              to="/projects/hart"
              className="group"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={hartImage}
                    alt="H'art of Family project"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 transition-colors">
                    H'art of Family
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Professional website for a life coach looking to grow their client base
                  </p>
                  <div className="flex items-center gap-2 text-emerald-600 font-semibold">
                    <span>View Project</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Scents4Pence Project */}
            <Link
              to="/projects/scents4pence"
              className="group"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={scentsImage}
                    alt="Scents4Pence project"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 transition-colors">
                    Scents4Pence
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    E-commerce platform for premium fragrances at affordable prices
                  </p>
                  <div className="flex items-center gap-2 text-emerald-600 font-semibold">
                    <span>View Project</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-br from-emerald-50 to-white dark:from-gray-800 dark:to-gray-800 rounded-2xl border-2 border-emerald-200 dark:border-gray-700 px-10 py-12 text-center shadow-md">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Let's build something great together
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-xl mx-auto">
            Get in touch to start your project
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link 
              to="/bookings"
              className="inline-block bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Book a FREE Consultation
            </Link>
            <Link 
              to="/inquiries"
              className="inline-block bg-white hover:bg-gray-50 text-emerald-600 border-2 border-emerald-600 px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Message Me
            </Link>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 text-center space-y-3">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Flexible pricing and packages available • Let's discuss your specific needs
          </p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <a 
              href="tel:+447523814099" 
              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+44 7523 814099</span>
            </a>
            <a 
              href="mailto:ntreasure2015@gmail.com" 
              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>ntreasure2015@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}