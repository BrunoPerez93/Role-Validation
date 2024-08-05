'use client'

import Navbar from "@/components/Navbar";
import { useAuth } from "@/context/AuthContext";

const LayoutContent = ({ children }) => {
  const { user } = useAuth();

  return (
    <>
      {user && <Navbar />}
      {children}
    </>
  );
};

export default LayoutContent;