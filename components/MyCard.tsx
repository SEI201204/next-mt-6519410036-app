import React from "react";
import Image from "next/image";
import Link from "next/link"; 

import Myprofile from "../assets/images/Myprofile.jpg";
import FacebookIcon from "../assets/images/Social_Icons_facebook.png";
import XIcon from "../assets/images/Social_Icons_x.png";
import InstagramIcon from "../assets/images/Social_Icons_ig.png";
import LinkedInIcon from "../assets/images/Social_Icons_in.png";
import GoogleIcon from "../assets/images/Social_Icons_google.png";

export default function MyCard() {
  return (
    <div className="p-10 border border-gray-600 rounded-[40px] w-[395px] h-[695px] flex flex-col items-center justify-between bg-transparent">
      
      {/* ส่วนบน: Logo */}
      <div className="w-full">
        <h1 className="text-3xl font-bold text-white tracking-tight">
          <span className="text-[#ff5c00]">T</span>hitiporn
        </h1>
      </div>

      {/* ส่วนกลาง: รูปโปรไฟล์ */}
      <div className="relative w-[325px] h-[324px] overflow-hidden rounded-[30px] border border-gray-800">
        <Image
          src={Myprofile}
          alt="Profile Picture"
          fill
          className="object-cover"
        />
      </div>

      {/* ข้อมูลเนื้อหา */}
      <div className="text-center">
        <h2 className="text-white text-2xl font-semibold mb-2">STU ID: 6519410036</h2>
        <p className="text-gray-400 text-lg">FullStack Web Developer</p>
      </div>

      {/* Social Icons */}
      <div className="flex gap-4 justify-center">
        {[FacebookIcon, XIcon, InstagramIcon, LinkedInIcon, GoogleIcon].map((icon, index) => (
          <div key={index} className="inline-block cursor-pointer transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(255,92,0,0.8)]">
            <Image src={icon} alt="social" width={32} height={32} />
          </div>
        ))}
      </div>

        {/* ปุ่ม Hire Me */}
      <Link 
        href="/contactme"
        className="block text-center w-full bg-[#ff5c00] hover:bg-[#e65300] font-[24px] text-black font-bold py-5 rounded-full uppercase tracking-widest text-sm transition-all shadow-lg shadow-orange-500/20"
      >
        Hire ME !
      </Link>

    </div>
  );
}