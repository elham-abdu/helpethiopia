import { Link } from "react-router-dom";
import logo from "../../assets/l.webp";
import { useFormik } from "formik";
import { subscribeSchema } from "../../Schemas/schemas";
import {
  Mail,
  CheckCircle,
  Facebook,
  Twitter,
  Instagram,
  Send,
} from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useBackendUrl } from "../../BackendUrlContext";

export default function Footer() {
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [message, setMessage] = useState("");

  const backendUrl = useBackendUrl();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: subscribeSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      setErrorMessage(null);

      try {
        const response = await axios.post(`${backendUrl}/subscribe`, {
          email: values.email,
        });

        if (response.data.subscribedBefore) {
          setMessage("You are already subscribed to our newsletter!");
        }

        if (response.data.newSubscriber) {
          setMessage("Thank you for subscribing to our newsletter!");
        }

        if (response.data.success) {
          setSubscribed(true);
          resetForm();
        } else {
          setErrorMessage(response.data.message || "Subscription failed");
        }
      } catch (error) {
        setErrorMessage(
          error.response?.data?.message ||
            error.message ||
            "Failed to subscribe. Please try again."
        );
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <footer className="pt-16 pb-8 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-[#233875] to-[#1a2b5f] font-text text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <img
              src={logo}
              alt="Help Ethiopia Logo"
              loading="lazy"
              className="w-14 sm:w-16 md:w-20 h-auto mb-6"
            />
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed text-center sm:px-12 md:px-0 md:text-left">
              We advocate for quality education, nurture leadership, and forge
              collaborations for sustainable healthcare and societal
              development.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-base md:text-lg font-semibold mb-6">
              Quick Links
            </h3>
            <ul className="flex flex-wrap gap-4 justify-center md:grid md:space-y-3 text-xs sm:text-sm">
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-[#FFDE59] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/our-team"
                  className="text-gray-300 hover:text-[#FFDE59] transition-colors"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  to="/what-we-do"
                  className="text-gray-300 hover:text-[#FFDE59] transition-colors"
                >
                  What We Do
                </Link>
              </li>
              <li>
                <Link
                  to="/donate"
                  className="text-gray-300 hover:text-[#FFDE59] transition-colors"
                >
                  Donate
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-[#FFDE59] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-base md:text-lg font-semibold mb-2 sm:mb-3 md:mb-6">
              Newsletter
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm mb-4 text-center md:text-left">
              Subscribe to our newsletter for updates and news.
            </p>

            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 bg-[#FFDE59] text-[#233875] rounded-lg flex items-center gap-3"
              >
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />
                <span className="font-medium text-xs sm:text-sm">
                  {message}
                </span>
              </motion.div>
            ) : (
              <form
                onSubmit={formik.handleSubmit}
                autoComplete="off"
                className="w-full"
              >
                {errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4 p-3 bg-red-100 text-red-700 rounded text-xs text-center"
                  >
                    {errorMessage}
                  </motion.div>
                )}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="text-gray-400 w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    className={`pl-10 w-full px-4 py-3 text-xs md:text-sm rounded-lg border ${
                      formik.touched.email && formik.errors.email
                        ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                        : "border-gray-300 focus:ring-[#FFDE59] focus:border-[#FFDE59]"
                    } focus:outline-none focus:ring-1 md:focus:ring-2`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                </div>
                {formik.touched.email && formik.errors.email && (
                  <p className="mt-1 text-xs text-red-300">
                    {formik.errors.email}
                  </p>
                )}
                <motion.button
                  type="submit"
                  disabled={loading || !formik.isValid}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full mt-4 py-3 px-6 rounded-lg text-xs sm:text-sm font-medium ${
                    loading || !formik.isValid
                      ? "bg-[#FFDE59]/70 cursor-not-allowed"
                      : "bg-[#FFDE59] hover:bg-[#FFDE59]/90 text-[#233875] shadow-md hover:shadow-lg cursor-pointer"
                  } transition-all duration-300 flex items-center justify-center gap-2`}
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin w-3 h-3 md:w-4 md:h-4 text-[#233875]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Subscribing...
                    </>
                  ) : (
                    <>
                      <Send className="w-3 h-3 md:w-4 md:h-4" />
                      Subscribe
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-base md:text-lg font-semibold mb-6">
              Connect With Us
            </h3>
            <div className="flex gap-4">
              <motion.a
                href="https://www.facebook.com/profile.php?id=100092545625116"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="p-3 bg-[#233875]/50 hover:bg-[#FFDE59] rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://twitter.com/YeEteyeCharity?s=35"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="p-3 bg-[#233875]/50 hover:bg-[#FFDE59] rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/p/Cr1NJ15o9pS/?igshid=YmMyMTA2M2Y="
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="p-3 bg-[#233875]/50 hover:bg-[#FFDE59] rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://t.me/help_for_eth"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="p-3 bg-[#233875]/50 hover:bg-[#FFDE59] rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
            </div>

            <div className="flex flex-col items-center md:items-start mt-8 w-full">
              <h4 className="text-base md:text-lg font-semibold mb-3">
                Contact Info
              </h4>
              <p className="text-gray-300 text-xs sm:text-sm mb-2">
                <span className="font-medium">Email:</span>{" "}
                helpforethiopia@gmail.com
              </p>
              <p className="text-gray-300 text-xs sm:text-sm">
                <span className="font-medium">Phone:</span> +251-939-808-182
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-[#FFDE59]/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-300 text-xs sm:text-sm">
            © {new Date().getFullYear()} HELP Ethiopia. All rights reserved.
          </p>
          <div className="flex gap-6">
            <p className="text-gray-300 hover:text-[#FFDE59] text-xs sm:text-sm transition-colors cursor-pointer">
              Privacy Policy
            </p>
            <p className="text-gray-300 hover:text-[#FFDE59] text-xs sm:text-sm transition-colors cursor-pointer">
              Terms of Service
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
