import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ExternalLink, User, Target, Palette } from "lucide-react";
import hartImage1 from "../../assets/1606a94e1a158c71098654ece820fbe9b742961c.png";
import hartImage2 from "../../assets/e8494a185aeda0e0a760e8ea1ba1cda7620088c5.png";
import hartImage3 from "../../assets/de80de30383ef0599d04a3accf80f59b05a69126.png";

export function ProjectHart() {
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
                        H'art of Family
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                        A professional website for a life coach looking to expand their client base
                        and establish their online presence
                    </p>

                    {/* Project Details */}
                    <div className="flex flex-wrap gap-6 mb-8">
                        <div className="flex items-center gap-2">
                            <User className="w-5 h-5 text-emerald-600" />
                            <span className="text-gray-700 dark:text-gray-300">Life Coaching</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Target className="w-5 h-5 text-emerald-600" />
                            <span className="text-gray-700 dark:text-gray-300">
                                Client Acquisition
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Palette className="w-5 h-5 text-emerald-600" />
                            <span className="text-gray-700 dark:text-gray-300">Custom Design</span>
                        </div>
                    </div>
                </div>

                {/* Project Overview */}
                <div className="bg-gradient-to-br from-emerald-50 to-white dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-emerald-200 dark:border-gray-700 p-8 mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Project Overview
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        H'art of Family approached us to create a warm, professional website that
                        would help them connect with potential clients seeking life coaching
                        services. The goal was to create an inviting online presence that reflects
                        the personal nature of their coaching practice while establishing
                        credibility and trust.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        The website features a clean, approachable design with easy navigation,
                        service descriptions, testimonials, and a simple contact system to help grow
                        their client base effectively.
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
                            src={hartImage1}
                            alt="H'art of Family website screenshot 1"
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
                            src={hartImage2}
                            alt="H'art of Family website screenshot 2"
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
                            src={hartImage3}
                            alt="H'art of Family website screenshot 3"
                            className="w-full h-auto"
                        />
                    </motion.div>
                </div>

                {/* Key Features */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-lg p-8 mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Key Features
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                Responsive Design
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Optimized for all devices to reach clients wherever they are
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                Service Showcase
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Clear presentation of coaching services and approach
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                Contact Integration
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Easy-to-use contact forms for client inquiries
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                Professional Branding
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Custom design that reflects the coach's personality and values
                            </p>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center bg-gradient-to-br from-emerald-50 to-white dark:from-gray-800 dark:to-gray-800 rounded-2xl border-2 border-emerald-200 dark:border-gray-700 p-10">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Ready to grow your business?
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-xl mx-auto">
                        Let's create a website that helps you reach more clients
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
