"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import { useEffect, useState } from "react";

import Home from "../assets/images/cil_home.png";
import AboutMe from "../assets/images/carbon_user-profile.png";
import Edu_Exp from "../assets/images/pajamas_project.png";
import Spec from "../assets/images/cib_when-i-work.png";
import Projects from "../assets/images/mdi_work-outline.png";
import Skills from "../assets/images/Vector.png";
import ContactMe from "../assets/images/Vector_contact.png";

export default function SideMenu() {
  const pathname = usePathname();
  const [activeNav, setActiveNav] = useState("/");

  // อัปเดต activeNav ทุกครั้งที่ URL (pathname) เปลี่ยนแปลง
  useEffect(() => {
    setActiveNav(pathname);
  }, [pathname]);

  const menuItems = [
    { src: Home, alt: "home", href: "/" },
    { src: AboutMe, alt: "about", href: "/aboutme" }, 
    { src: Edu_Exp, alt: "education", href: "/eduexp" },
    { src: Spec, alt: "spec", href: "/spec" },
    { src: Projects, alt: "projects", href: "/projects" },
    { src: Skills, alt: "skills", href: "/skills" },
    { src: ContactMe, alt: "contact", href: "/contactme" },
  ];

  return (
    <div className="flex items-center pl-6">
      <div className="flex flex-col items-center justify-between
                      rounded-full px-4 py-8 shadow-md border border-gray-500
                      w-[60px] h-[499px] bg-transparent">

        {menuItems.map((item, index) => {
          // เช็คว่า Path ปัจจุบันตรงกับ href ของปุ่มไหม
          const isActive = activeNav === item.href;

          return (
            <Link 
              key={index} 
              href={item.href}
              className="relative transition-all duration-300"
            >
              <div 
                className="transition-all duration-300"
                style={{
                  // ถ้า active จะย้อมสีด้วย filter ให้เป็นโทนส้ม (#ff5c00)
                  filter: isActive 
                    ? "invert(48%) sepia(79%) saturate(2476%) hue-rotate(346deg) brightness(101%) contrast(105%)" 
                    : "brightness(0) invert(1) opacity(0.5)", // สีขาวจางเมื่อไม่เลือก
                  transform: isActive ? "scale(1.2)" : "scale(1)",
                }}
              >
                <Image src={item.src} alt={item.alt} width={35} height={35} />
              </div>
            </Link>
          );
        })}

      </div>
    </div>
  );
}