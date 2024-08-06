import { ComputerIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import github from "@/public/github.svg";
import facebook from "@/public/facebook.svg";
import instagram from "@/public/instagram.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="p-5 bg-gray-800 text-white mt-3 flex justify-between items-center">
      <div>
        <ComputerIcon  width={50} height={50}/>
      </div>
      <div className="flex md:space-x-3 md:flex-row flex-col space-y-3 md:space-y-0 justify-center items-center">
        <Link href="">
        <Image src={github} width={50} height={50} />
        </Link>
        <Link href="">
          <Image src={facebook} width={50} height={50} />
        </Link>
        <Link href="">
          <Image src={instagram} width={50} height={50} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
