
"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [links, setLinks] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (user?.role === 'Admin') {
      setLinks([
        { href: '/dashboard', label: 'Dashboard' },
        { href: '/settings', label: 'Settings' },
        { href: '/reports', label: 'Reports' },
        { href: '/users', label: 'Users' },
        { href: '/profile', label: 'Profile' },
      ]);
    } else if (user?.role === 'Client') {
      setLinks([
        { href: '/dashboard', label: 'Dashboard' },
        { href: '/profile', label: 'Profile' },
        { href: '/support', label: 'Support' },
      ]);
    }
  }, [user]);

  const handleLogout = () => {
    logout(); 
    router.push("/"); 
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <ul className="flex space-x-4">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="hover:underline">
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <Button onClick={handleLogout}>
        Logout
      </Button>
    </nav>
  );
};

export default Navbar;
