import {
  MapPin,
  Phone,
  Mail,
  User,
  Pencil,
  Send,
  ChevronRight,
} from "lucide-react";
import { useFormik } from "formik";
import { contactSchema } from "../../Schemas/schemas";
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useBackendUrl } from "../../BackendUrlContext";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const backendUrl = useBackendUrl();

  const openGoogleMaps = () => {
    const url =
      "https://www.google.com/maps/search/?api=1&query=Tikur+Ambessa+Teaching+Hospital,Addis+Ababa";
    window.open(url, "_blank");
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      message: "",
    },
    validationSchema: contactSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        setLoading(true);
        setErrorMessage(null);
        setSuccessMessage(null);

        const response = await axios.post(`${backendUrl}/send-message`, values);

        if (response.data.success) {
          setSuccessMessage(
            response.data.message || "Your message has been sent successfully!"
          );
          resetForm();
        } else {
          throw new Error(response.data.message || "Failed to send message");
        }
      } catch (error) {
        setErrorMessage(
          error.response?.data?.message ||
            error.message ||
            "Failed to send message. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="py-16 px-6 md:px-12 lg:px-24 bg-gray-100 font-text">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-14 md:mb-16"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl sm:px-12 md:px-0 mx-auto leading-relaxed">
            Have questions or want to get involved? Reach out to us and we'll
            get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-2/5"
          >
            <div className="bg-white p-6 sm:p-6 md:p-8 rounded-2xl shadow-lg h-full border border-gray-100">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 pb-2 sm:pb-4 md:pb-6 mb-4 sm:mb-4 md:mb-6 border-b border-gray-200">
                Contact Information
              </h2>

              <div className="space-y-6 md:space-y-8">
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-start"
                >
                  <div className="bg-[#233875]/10 p-2 md:p-3 rounded-xl mr-4">
                    <MapPin className="text-[#233875] w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base text-lg font-semibold text-gray-800">
                      Our Location
                    </h3>
                    <p className="text-gray-600 mt-2 leading-relaxed text-xs sm:text-sm md:text-base">
                      Tikur Ambessa Teaching Hospital, Zambia Street, Addis
                      Ababa, Ethiopia
                    </p>
                    <button
                      onClick={openGoogleMaps}
                      className="text-[#233875] hover:text-[#1a2b5f] font-medium mt-3 transition-colors flex items-center text-xs sm:text-sm md:text-base"
                    >
                      View on Google Maps
                      <ChevronRight className="ml-1 w-3 h-3 md:w-4 md:h-4" />
                    </button>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-start"
                >
                  <div className="bg-[#233875]/10 p-2 md:p-3 rounded-xl mr-4">
                    <Phone className="text-[#233875] w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base text-lg font-semibold text-gray-800">
                      Phone Number
                    </h3>
                    <p className="text-gray-600 mt-2 text-xs sm:text-sm md:text-base">
                      +251-939-808-182
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-start"
                >
                  <div className="bg-[#233875]/10 p-2 md:p-3 rounded-xl mr-4">
                    <Mail className="text-[#233875] w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base text-lg font-semibold text-gray-800">
                      Email Address
                    </h3>
                    <p className="text-gray-600 mt-2 text-xs sm:text-sm md:text-base">
                      helpforethiopia@gmail.com
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-3/5"
          >
            <div className="bg-white p-6 sm:p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 pb-2 sm:pb-4 md:pb-6 mb-4 sm:mb-4 md:mb-6 border-b border-gray-200">
                Send Us a Message
              </h2>

              {successMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg border border-green-100"
                >
                  {successMessage}
                </motion.div>
              )}

              {errorMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg border border-red-100"
                >
                  {errorMessage}
                </motion.div>
              )}

              <form onSubmit={formik.handleSubmit} autoComplete="off">
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs md:text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="text-gray-400 w-4 h-4 md:w-5 md:h-5" />
                      </div>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder="Abebe Kebede"
                        className={`pl-10 pr-3 w-full py-2 md:py-3 text-xs sm:text-sm rounded-lg border ${
                          formik.touched.fullName && formik.errors.fullName
                            ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                            : "border-gray-300 focus:ring-[#233875] focus:border-[#233875]"
                        } focus:outline-none focus:ring-1 md:focus:ring-2`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.fullName}
                      />
                    </div>
                    {formik.touched.fullName && formik.errors.fullName && (
                      <p className="mt-2 text-xs text-sm text-red-600">
                        {formik.errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs md:text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="text-gray-400 w-4 h-4 md:w-5 md:h-5" />
                      </div>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="abebe@example.com"
                        className={`pl-10 pr-3 w-full py-2 md:py-3 text-xs sm:text-sm rounded-lg border ${
                          formik.touched.email && formik.errors.email
                            ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                            : "border-gray-300 focus:ring-[#233875] focus:border-[#233875]"
                        } focus:outline-none focus:ring-1 md:focus:ring-2`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                      />
                    </div>
                    {formik.touched.email && formik.errors.email && (
                      <p className="mt-2 text-xs text-sm text-red-600">
                        {formik.errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs md:text-sm font-medium text-gray-700 mb-2"
                    >
                      Your Message
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3">
                        <Pencil className="text-gray-400 w-4 h-4 md:w-5 md:h-5" />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="Type your message here..."
                        className={`pl-10 pr-3 w-full py-2 md:py-3 text-xs sm:text-sm rounded-lg border ${
                          formik.touched.message && formik.errors.message
                            ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                            : "border-gray-300 focus:ring-[#233875] focus:border-[#233875]"
                        } focus:outline-none focus:ring-1 md:focus:ring-2`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                      />
                    </div>
                    {formik.touched.message && formik.errors.message && (
                      <p className="mt-2 text-xs text-sm text-red-600">
                        {formik.errors.message}
                      </p>
                    )}
                    <p className="mt-2 text-xs text-sm text-gray-500 text-right">
                      {formik.values.message.length}/200 characters
                    </p>
                  </div>

                  <div className="pt-2">
                    <motion.button
                      type="submit"
                      disabled={loading || !formik.isValid}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full flex justify-center items-center py-3 md:py-4 px-6 rounded-lg text-white font-medium text-xs sm:text-sm ${
                        loading || !formik.isValid
                          ? "bg-[#233875]/70 cursor-not-allowed"
                          : "bg-[#233875] hover:bg-[#1a2b5f] shadow-md hover:shadow-lg cursor-pointer"
                      } transition-all duration-300`}
                    >
                      {loading ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 w-4 h-4 md:w-5 md:h-5 text-white"
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
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-3 w-4 h-4 md:w-5 md:h-5" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
