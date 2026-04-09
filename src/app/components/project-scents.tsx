import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ShoppingCart, Sparkles, TrendingUp } from 'lucide-react';
import scentsImage1 from '../../assets/73ef7b487eb1fb1a8140ca71f471a04b76ee0d5d.png';
import scentsImage2 from '../../assets/fdfb503d828338b171ce15388ab7178ec8ee196a.png';
import scentsImage3 from '../../assets/650f8ab5fd3e64fb72b5145c250837ff50242d1d.png';

export function ProjectScents() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Scents4Pence
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            An e-commerce platform for a luxury fragrance business offering premium scents at affordable prices
          </p>

          {/* Project Details */}
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-emerald-600" />
              <span className="text-gray-700 dark:text-gray-300">E-commerce</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-600" />
              <span className="text-gray-700 dark:text-gray-300">Luxury Products</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-emerald-600" />
              <span className="text-gray-700 dark:text-gray-300">Sales Platform</span>
            </div>
          </div>
        </div>

        {/* Project Overview */}
        <div className="bg-gradient-to-br from-emerald-50 to-white dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-emerald-200 dark:border-gray-700 p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project Overview</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Scents4Pence needed a sophisticated e-commerce solution to showcase their collection of premium fragrances while maintaining their brand promise of luxury at affordable prices. The challenge was to create an online shopping experience that felt high-end yet accessible.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            We developed a fully functional e-commerce website with product catalogs, shopping cart functionality, secure checkout, and an elegant design that reflects the premium nature of their products while emphasizing value and accessibility.
          </p>
        </div>

        {/* Project Images */}
        <div className="space-y-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src={scentsImage1}
              alt="Scents4Pence website screenshot 1"
              className="w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src={scentsImage2}
              alt="Scents4Pence website screenshot 2"
              className="w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src={scentsImage3}
              alt="Scents4Pence website screenshot 3"
              className="w-full h-auto"
            />
          </motion.div>
        </div>

        {/* Key Features */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Product Catalog</h3>
              <p className="text-gray-600 dark:text-gray-300">Beautiful showcase of fragrance collections with detailed descriptions</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Shopping Cart</h3>
              <p className="text-gray-600 dark:text-gray-300">Seamless cart experience with real-time updates</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Secure Checkout</h3>
              <p className="text-gray-600 dark:text-gray-300">Safe and easy payment processing integration</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Mobile Commerce</h3>
              <p className="text-gray-600 dark:text-gray-300">Fully responsive design optimized for mobile shopping</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Product Search & Filtering</h3>
              <p className="text-gray-600 dark:text-gray-300">Easy navigation through extensive product catalog</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Brand Storytelling</h3>
              <p className="text-gray-600 dark:text-gray-300">Compelling content that connects with customers</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-br from-emerald-50 to-white dark:from-gray-800 dark:to-gray-800 rounded-2xl border-2 border-emerald-200 dark:border-gray-700 p-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to launch your online store?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-xl mx-auto">
            Let's build an e-commerce platform that drives sales and grows your business
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              to="/bookings"
              className="inline-block bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Start Your Project
            </Link>
            <Link
              to="/inquiries"
              className="inline-block bg-white dark:bg-gray-800 hover:bg-gray-50 text-emerald-600 border-2 border-emerald-600 px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
