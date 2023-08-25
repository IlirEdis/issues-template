"use client";

import { useContext, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { HeaderMenu } from "../data/Menu";
import HeaderMobile from "./HeaderMobile";
import { AppContext } from "./AppContext";
import { usePathname } from "next/navigation";

const Underline = () => (
  <motion.div
    layoutId='underline'
    layout
    className='absolute h-[2px] bg-primary left-0 right-0 '
  ></motion.div>
);

interface HeaderProps {
  title?: string;
  link?: string;
  submenu?: [];
}

export default function Header({ infoBannerData, sorryData }: any) {
  // const theme = useTheme();
  // const { query } = useKBar();
  const [openBanner, setOpenBanner] = useState(true);

  const headerRef: any = useRef();
  const { setHeaderHeight }: any = useContext(AppContext);

  useEffect(() => {
    setHeaderHeight(headerRef.current.clientHeight);
  }, [openBanner, setHeaderHeight]);

  return (
    <header
      ref={headerRef}
      className='w-[100%] fixed flex content-between px-[30px] py-[10px] md:px-[70px] bg-[rgba(255,255,255,0.7)] backdrop-blur-md z-[998]'
    >
      <div className='w-[100%] flex justify-between items-center gap-[30px] '>
        <Link href='/' className='block w-[150px] md:w-[220px]'>
          {/* <Logo color='secondary' /> */}
          <h3>Logo</h3>
        </Link>
        <div className='hidden md:block w-[2px] h-[100%] bg-gray-200'></div>
        <div className='w-[100%] hidden md:flex justify-between items-center '>
          <motion.nav role='menubar' className='flex '>
            {HeaderMenu.map((menuItem: HeaderProps, i: any) => {
              return (
                <MenuItem
                  // role='menuitem'
                  key={i}
                  text={menuItem.title}
                  link={menuItem.link}
                  hasSubmenu={menuItem?.submenu!}
                >
                  {menuItem.submenu &&
                    menuItem.submenu.map((subItem: any, i: any) => {
                      return (
                        <SubItem
                          key={i}
                          icon={subItem?.icon ? subItem?.icon : null}
                          title={subItem.title}
                          text={subItem?.text ? subItem.text : ""}
                          link={subItem.link}
                        />
                      );
                    })}
                </MenuItem>
              );
            })}
          </motion.nav>
        </div>
      </div>
      <HeaderMobile sorryData={sorryData} />
    </header>
  );
}

const MenuItemVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,

    transition: {
      staggerChildren: 0.05,
    },
  },
};

const MenuItem = ({ text, link, hasSubmenu, children, ...props }: any) => {
  const currentRoute = usePathname();

  const [isBeingHovered, setIsBeingHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsBeingHovered(true)}
      onHoverEnd={() => setIsBeingHovered(false)}
      className='pr-[30px]'
    >
      {!hasSubmenu ? (
        <Link
          className='relative text-secondary uppercase font-semibold'
          role='menuitem'
          href={link}
        >
          {text}
          {(isBeingHovered || currentRoute === link) && <Underline />}
        </Link>
      ) : (
        <span style={{ position: "relative", fontWeight: 600 }}>
          {text}
          {(isBeingHovered || currentRoute === link) && <Underline />}
        </span>
      )}
      {isBeingHovered && hasSubmenu && (
        <div className='py-5 min-w-max '>
          <motion.div
            {...props}
            layoutId='menu'
            variants={MenuItemVariants}
            style={{ minWidth: 400 }}
            initial='hidden'
            animate='visible'
          >
            {children}
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

const SubItemVariants = {
  hidden: {
    x: -20,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const SubItem = ({ icon, title, text, link }: any) => {
  return (
    <motion.div layout variants={SubItemVariants}>
      <Link href={link}>
        <div>{icon}</div>
        <div>
          <p>{title}</p>
          <p>{text}</p>
        </div>
      </Link>
    </motion.div>
  );
};
