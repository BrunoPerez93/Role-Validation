'use client'

import Navbar from "@/components/Navbar";
import { useAuth } from "@/context/AuthContext";
import Footer from "./Footer";

const LayoutContent = ({ children }) => {
  const { user } = useAuth();

  return (
    <>
      {user && <Navbar />}
      {children}
      <Footer/>
    </>
  );
};

export default LayoutContent;