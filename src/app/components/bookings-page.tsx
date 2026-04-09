import { Link } from "react-router-dom";
import { InlineWidget } from "react-calendly";
import { motion } from "motion/react";
import { ArrowLeft, Mail, Phone } from "lucide-react";

export function BookingsPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-white dark:bg-gray-900"
        >
            <div className="max-w-5xl mx-auto px-6 py-16">
                {/* Back Button */}
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Services</span>
                </Link>

                {/* Header */}
                <header className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Book a Consultation
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Schedule a 30-minute call to discuss your project and explore how we can
                        work together
                    </p>
                </header>

                {/* Calendly Widget Container */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden mb-12">
                    <InlineWidget
                        url="https://calendly.com/ntreasure2015/30min?hide_event_type_details=1&hide_gdpr_banner=1"
                        styles={{
                            height: "700px",
                            minWidth: "320px",
                        }}
                    />
                </div>

                {/* Alternative Contact Methods */}
                <div className="bg-gradient-to-br from-emerald-50 to-white dark:from-gray-800 dark:to-gray-800 rounded-2xl border-2 border-emerald-200 dark:border-gray-700 px-10 py-8 text-center shadow-md">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Prefer to reach out directly?
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        You can also send me a message or contact me directly
                    </p>
                    <div className="flex items-center justify-center gap-6 flex-wrap mb-6">
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
                    <Link
                        to="/inquiries"
                        className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold transition-colors"
                    >
                        Send an Inquiry
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
