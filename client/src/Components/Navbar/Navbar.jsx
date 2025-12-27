// Navbar.jsx
import { useState, useContext, useMemo, useEffect, useRef } from "react";
import AuthContext from "../../AuthContext";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo.webp";
import {
  FaTimes,
  FaBars,
  FaHome,
  FaInfoCircle,
  FaUsers,
  FaRegNewspaper,
  FaHandHoldingHeart,
  FaChevronDown,
  FaUserCircle,
  FaSignOutAlt,
  FaCog,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [state, setState] = useState({
    isOpen: false,
    isPopUp: false,
    isScrolled: false,
    mobilePopUp: false,
  });
  const { isLoggedIn, logout, firstName, isAdmin } = useContext(AuthContext);
  const location = useLocation();
  const popupRef = useRef(null);
  const navbarRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    setState((prev) => ({ ...prev, isOpen: false, mobilePopUp: false }));
  }, [location]);

  useEffect(() => {
    if (!isHomePage) {
      setState((prev) => ({ ...prev, isScrolled: true }));
      return;
    }

    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== state.isScrolled) {
        setState((prev) => ({ ...prev, isScrolled }));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [state.isScrolled, isHomePage]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        if (navbarRef.current && !navbarRef.current.contains(event.target)) {
          closePopUp();
        }
      }

      if (
        state.isOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        if (navbarRef.current && !navbarRef.current.contains(event.target)) {
          setState((prev) => ({ ...prev, isOpen: false, mobilePopUp: false }));
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [state.isOpen]);

  const navLinks = useMemo(
    () => [
      { path: "/", label: "Home", icon: <FaHome className="text-lg" /> },
      {
        path: "/about-us",
        label: "About Us",
        icon: <FaInfoCircle className="text-lg" />,
      },
      { path: "/our-team", label: "Our Team", icon: <FaUsers className="text-lg" /> },
      { path: "/blogs", label: "Blogs", icon: <FaRegNewspaper className="text-lg" /> },
      {
        path: "/what-we-do",
        label: "What We Do",
        icon: <FaHandHoldingHeart className="text-lg" />,
      },
    ],
    []
  );

  const toggleMenu = () =>
    setState((prev) => ({
      ...prev,
      isOpen: !prev.isOpen,
      mobilePopUp: false,
    }));

  const togglePopUp = () =>
    setState((prev) => ({
      ...prev,
      isPopUp: !prev.isPopUp,
    }));

  const toggleMobilePopUp = () =>
    setState((prev) => ({
      ...prev,
      mobilePopUp: !prev.mobilePopUp,
    }));

  const closePopUp = () =>
    setState((prev) => ({
      ...prev,
      isPopUp: false,
      mobilePopUp: false,
    }));

  const getNavLinkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
      isActive
        ? "bg-[#233875] text-white font-medium shadow-md"
        : "text-gray-700 hover:bg-[#233875]/10 hover:text-[#233875]"
    }`;

  return (
    <nav
      ref={navbarRef}
      className={`fixed w-full z-50 transition-all duration-300 font-text ${
        !isHomePage || state.isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex justify-between items-center py-3 sm:py-4 md:py-4 px-6 md:px-8 lg:px-16">
        {/* Logo */}
        <NavLink 
          to="/" 
          className="flex items-center gap-3 hover:opacity-90 transition-opacity"
        >
          <motion.img
            src={logo}
            alt="Help Ethiopia Logo"
            className="w-11 md:w-14 h-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
          <span
            className={`text-center items-center flex justify-center md:block text-lg font-semibold ${
              state.isScrolled ? "text-[#233875]" : "text-white"
            }`}
          >
            HELP Ethiopia
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center px-3 py-2 rounded-lg transition-all duration-200 ${
                  isActive
                    ? "bg-[#233875] text-white font-medium shadow-md"
                    : state.isScrolled
                    ? "text-gray-700 hover:bg-[#233875]/10 hover:text-[#233875]"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`
              }
            >
              <span className="text-sm font-medium">{link.label}</span>
            </NavLink>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          {isLoggedIn ? (
            <div className="relative" ref={popupRef}>
              <motion.button
                onClick={togglePopUp}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer transition-colors ${
                  state.isScrolled
                    ? "bg-gray-50 hover:bg-gray-100"
                    : "bg-white/10 hover:bg-white/20"
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-medium ${
                    state.isScrolled
                      ? "bg-[#233875] text-white"
                      : "bg-white text-[#233875]"
                  }`}
                >
                  {firstName.charAt(0).toUpperCase()}
                </div>
                <span
                  className={`text-sm ${
                    state.isScrolled ? "text-gray-800" : "text-white"
                  }`}
                >
                  {firstName}
                </span>
                <FaChevronDown
                  className={`transition-transform duration-200 ${
                    state.isPopUp ? "rotate-180" : ""
                  } ${state.isScrolled ? "text-gray-600" : "text-white/80"}`}
                  size={12}
                />
              </motion.button>

              <AnimatePresence>
                {state.isPopUp && (
                  <UserPopup
                    firstName={firstName}
                    logout={logout}
                    closePopUp={closePopUp}
                    isAdmin={isAdmin}
                  />
                )}
              </AnimatePresence>
            </div>
          ) : (
            <NavLink to="/login">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`px-5 py-2.5 rounded-lg font-medium text-sm cursor-pointer transition-colors ${
                  state.isScrolled
                    ? "text-[#233875] bg-[#FFDE59] hover:bg-[#FFDE59]/90"
                    : "text-white bg-white/10 hover:bg-white/20"
                }`}
              >
                Sign In
              </motion.button>
            </NavLink>
          )}
          <NavLink to="/donate">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={`px-5 py-2.5 rounded-lg font-medium text-sm shadow-sm hover:shadow-md cursor-pointer transition-all ${
                state.isScrolled
                  ? "bg-[#233875] text-white hover:bg-[#1a2b5f]"
                  : "bg-[#FFDE59] text-[#233875] hover:bg-[#FFDE59]/90"
              }`}
            >
              Donate
            </motion.button>
          </NavLink>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center gap-3">
          {isLoggedIn && (
            <div className="relative">
              <motion.button
                onClick={toggleMobilePopUp}
                whileTap={{ scale: 0.95 }}
                className={`w-10 h-10 rounded-full flex items-center cursor-pointer justify-center ${
                  state.isScrolled
                    ? "bg-gray-50 hover:bg-gray-100"
                    : "bg-white/10 hover:bg-white/20"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    state.isScrolled
                      ? "bg-[#233875] text-white"
                      : "bg-white text-[#233875]"
                  }`}
                >
                  {firstName.charAt(0).toUpperCase()}
                </div>
              </motion.button>

              <AnimatePresence>
                {state.mobilePopUp && (
                  <MobileUserPopup
                    firstName={firstName}
                    logout={() => {
                      toggleMobilePopUp();
                      logout();
                    }}
                    closePopUp={toggleMobilePopUp}
                    isAdmin={isAdmin}
                  />
                )}
              </AnimatePresence>
            </div>
          )}
          <motion.button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={state.isOpen}
            whileTap={{ scale: 0.9 }}
            className={`p-2 rounded-md focus:outline-none ${
              state.isScrolled
                ? "text-gray-800 hover:bg-gray-50"
                : "text-white hover:bg-white/10"
            }`}
          >
            {state.isOpen ? (
              <FaTimes className="w-5 h-5 md:w-6 md:h-6 cursor-pointer" />
            ) : (
              <FaBars className="w-5 h-5 md:w-6 md:h-6 cursor-pointer" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {state.isOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`lg:hidden overflow-hidden ${
              state.isScrolled ? "bg-white" : "bg-white/95 backdrop-blur-md"
            }`}
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={toggleMenu}
                  className={getNavLinkClass}
                >
                  <span className="text-xs md:text-sm font-medium">{link.label}</span>
                </NavLink>
              ))}
              <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-gray-100">
                {isLoggedIn ? (
                  <>
                    {isAdmin && (
                      <NavLink
                        to="/admin/dashboard"
                        onClick={toggleMenu}
                        className="flex items-center gap-3 px-4 py-3 text-sm md:text-sm text-left rounded-lg hover:bg-gray-50"
                      >
                        <FaCog className="text-gray-600" />
                        Admin Dashboard
                      </NavLink>
                    )}
                    <button
                      onClick={() => {
                        toggleMenu();
                        logout();
                      }}
                      className="flex items-center gap-3 px-4 py-3 text-xs md:text-sm  text-left text-red-600 rounded-lg hover:bg-red-50 cursor-pointer"
                    >
                      <FaSignOutAlt />
                      Sign Out
                    </button>
                  </>
                ) : (
                  <NavLink
                    to="/login"
                    onClick={toggleMenu}
                    className="px-4 py-3 text-xs md:text-sm font-medium text-center rounded-lg bg-[#233875] text-white hover:bg-[#1a2b5f]"
                  >
                    Sign In
                  </NavLink>
                )}
                <NavLink
                  to="/donate"
                  onClick={toggleMenu}
                  className="px-4 py-3 text-xs md:text-sm font-medium text-center rounded-lg border border-[#233875] text-[#233875] hover:bg-[#233875]/10"
                >
                  Donate
                </NavLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function MobileUserPopup({ firstName, logout, closePopUp, isAdmin }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50"
    >
      <div className="p-4 border-b border-gray-100 bg-[#233875]">
        <p className="font-medium text-sm text-white">Hello, {firstName}</p>
      </div>
      <div className="p-1">
        {isAdmin && (
          <Link
            to="/admin/dashboard"
            onClick={closePopUp}
            className="flex items-center gap-3 px-4 py-3 text-sm text-left rounded-lg hover:bg-gray-50 text-gray-700"
          >
            <FaCog className="text-[#233875]" />
            Admin Dashboard
          </Link>
        )}
        <button
          onClick={logout}
          className="flex items-center gap-3 w-full px-4 py-3 text-sm text-left rounded-lg hover:bg-gray-50 text-red-600  cursor-pointer"
        >
          <FaSignOutAlt />
          Sign Out
        </button>
      </div>
    </motion.div>
  );
}

function UserPopup({ firstName, logout, closePopUp, isAdmin }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute right-0 top-full mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50"
    >
      <div className="p-4 border-b border-gray-100 bg-[#233875]">
        <p className="font-medium text-white">Hello, {firstName}</p>
        <p className="text-sm text-white/80">Welcome back</p>
      </div>
      <div className="p-1">
        {isAdmin && (
          <Link
            to="/admin/dashboard"
            onClick={closePopUp}
            className="flex items-center gap-3 px-4 py-3 text-sm text-left rounded-lg hover:bg-gray-50 text-gray-700"
          >
            <FaCog className="text-[#233875]" />
            Admin Dashboard
          </Link>
        )}
        <button
          onClick={logout}
          className="flex items-center gap-3 w-full px-4 py-3 text-sm text-left rounded-lg hover:bg-gray-50 text-red-600 cursor-pointer"
        >
          <FaSignOutAlt />
          Sign Out
        </button>
      </div>
    </motion.div>
  );
}