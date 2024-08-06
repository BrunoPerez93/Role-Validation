"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [links, setLinks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (user?.role === "Admin") {
      setLinks([
        { href: "/pages/about", label: "About" },
        { href: "/pages/settings", label: "Settings" },
        { href: "/pages/reports", label: "Reports" },
        { href: "/pages/users", label: "Users" },
        { href: "/pages/profile", label: "Profile" },
      ]);
    } else if (user?.role === "Client") {
      setLinks([
        { href: "/pages/about", label: "About" },
        { href: "/pages/profile", label: "Profile" },
        { href: "/pages/contact", label: "Contact" },
      ]);
    }
  }, [user]);

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-full bg-gray-800">
      <div className="flex justify-between items-center w-full p-4">
        <div className="text-white text-lg">LOGO</div>
        <div className="md:hidden">
          <Button onClick={toggleMenu} className="text-white">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </Button>
        </div>
        <NavigationMenu className="hidden md:flex space-x-5 w-full">
          <NavigationMenuList className="space-x-5">
            {links.map((link) => (
              <NavigationMenuItem key={link.href}>
                <Link href={link.href} passHref>
                  <NavigationMenuLink className="text-white hover:underline">
                    {link.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
          <Button onClick={handleLogout} className="text-white">
            Logout
          </Button>
        </NavigationMenu>
      </div>
      {isOpen && (
        <NavigationMenu className="flex flex-col md:hidden bg-gray-800 space-y-2 p-4 min-w-full">
          <NavigationMenuList className="flex flex-col w-full justify-center items-center space-y-2">
            {links.map((link) => (
              <NavigationMenuItem key={link.href}>
                <Link href={link.href} passHref>
                  <NavigationMenuLink
                    onClick={() => {
                      handleLinkClick();
                    }}
                    className="text-white hover:underline"
                  >
                    {link.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
          <Button onClick={handleLogout} className="text-white">
            Logout
          </Button>
        </NavigationMenu>
      )}
    </div>
  );
};

export default Navbar;
