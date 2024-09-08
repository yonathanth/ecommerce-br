"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import CartModal from "./CartModal";

const mobileNavContainerVariant = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const linkVariants = {
  hover: {
    scale: 1.1,
    transition: { type: "spring", stiffness: 300 },
  },
  rest: { scale: 1 },
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const className = isActive
    ? "text-purple-500 dark:text-purple-900 underline-active"
    : "text-gray-800 dark:text-gray-300 hover:text-purple-900 dark:hover:text-purple-900 transition-colors duration-300";

  return (
    <motion.div
      variants={linkVariants}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="relative inline-block"
    >
      <Link href={href} className={`${className}`}>
        {children}
      </Link>
    </motion.div>
  );
};

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const isHome = pathname === "/";

  return (
    <>
      <nav
        className={`w-full flex items-center justify-between p-8  ${
          isHome
            ? "bg-transparent"
            : "bg-gradient-to-r from-purple-100 to-purple-200 border"
        }`}
      >
        <Link href="/" className="text-3xl font-bold logo-hover">
          Brikti&apos;s
        </Link>
        <div className="flex items-center mr-16">
          <div className="hidden md:flex space gap-8 ml-10 text-2xl pr-8 ">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/shop">Shop</NavLink>
            <NavLink href="/auth/account">Sign In</NavLink>
          </div>
        </div>

        <div className="flex items-center">
          <button
            onClick={toggleNavbar}
            aria-label="Toggle navigation"
            className="md:hidden ml-2 mr-14"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 " />}
          </button>
          <CartModal />
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileNavContainerVariant}
            initial="hidden"
            animate="show"
            exit="exit"
            className="fixed top-0 left-0 w-3/4 h-full bg-white shadow-lg p-6 z-50 md:hidden"
          >
            <div className="flex flex-col items-start space-y-6">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/shop">Shop</NavLink>
              <NavLink href="/auth/account">Sign In</NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
