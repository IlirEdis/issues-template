import { forwardRef, useRef, useState } from "react";
import { motion, AnimatePresence, useCycle } from "framer-motion";

import Link from "next/link";
// import { useKBar } from "kbar";

import { HeaderMenu } from "../data/Menu";
import IconArrowLeft from "./icons/IconArrowLeft";
import IconArrowRight from "./icons/IconArrowRight";
// import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import IconSearch from "./icons/IconSearch";
import { SorryAppNotices } from "./SorryAppNotices";
import IconExternalLink from "./icons/IconExternalLink";
import Button from "./Button";
import IconButton from "./IconButton";

// const HeaderWrapper = styled("div")(({ theme }) => ({
//   // width: "100%",
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   [theme.breakpoints.up("md")]: {
//     display: "none",
//   },
// }));

// const HamburgerButton = styled(Button)({
//   // background: "red",
//   minWidth: 40,
// });

// const MotionButton = motion(HamburgerButton);

// const StyledDropdown = styled("nav")(({ theme }) => ({
//   position: "absolute",
//   top: 80,
//   right: 10,
//   padding: 20,
//   borderRadius: 8,
//   width: "auto",
//   transition: "height 1s",
//   backdropFilter: "blur(8px)",
//   border: "1px solid rgba(0, 0, 0, 0.3)",
//   // backgroundColor: "rgba(255,255,255,0.9)",
//   backgroundColor: "#fff",
//   color: theme.palette.primary.main,
// }));

// const MotionDropdown = motion(StyledDropdown);

// const HeaderButtons = styled("div")({
//   display: "flex",
//   justifyContent: "space-between",
//   gap: 20,
//   paddingBottom: 20,
// });

// const StyledButton = styled(Button)({
//   // height: "40px",
// });

// const MenuList = styled("ul")({
//   listStyle: "none",
// });

// const MenuItem = styled("li", {
//   shouldForwardProp: (prop) => prop !== "color",
// })(({ theme, color }: any) => ({
//   padding: 10,
//   borderRadius: 4,
//   fontWeight: 600,
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "space-between",
//   color: color,

//   ":hover": {
//     backgroundColor: theme.palette.customTextColors.neutral10,
//     cursor: "pointer",
//   },
// }));

// const SubMenuHeader = styled("div")({
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   paddingBottom: 20,
// });

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

// const StyledSubitemWrapper = styled("div")(({ theme }) => ({
//   padding: "10px",
//   cursor: "pointer",
//   borderRadius: 4,
//   ":hover": {
//     background: theme.palette.customTextColors.neutral10,
//   },
// }));

// const AnimatedSubitemWrapper = motion(StyledSubitemWrapper);

// const SubitemWrapper = styled("div")({
//   display: "flex",
//   alignItems: "center",
//   gap: 20,
// });

// const SubitemTitle = styled("p")(({ theme }) => ({
//   fontWeight: 600,
//   fontSize: 14,
//   color: theme.palette.customTextColors.neutral40,
// }));
// const SubitemText = styled("p")(({ theme }) => ({
//   fontWeight: 600,
//   fontSize: 12,
//   color: theme.palette.customTextColors.neutral60,
// }));

const SubItem = ({ icon, title, text }: any) => {
  return (
    <motion.div layout variants={SubItemVariants}>
      <div>
        <div>{icon}</div>
        <div>
          <p>{title}</p>
          <p>{text}</p>
        </div>
      </div>
    </motion.div>
  );
};

const slideVerticalAnimation = {
  open: {
    rotateX: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      mass: 0.8,
      type: "spring",
    },
    display: "block",
  },
  close: {
    rotateX: -15,
    y: -20,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
    transitionEnd: {
      display: "none",
    },
  },
};

const Path = (props: any) => {
  return (
    <motion.path
      className='stroke-primary'
      fill='transparent'
      strokeWidth='2'
      // stroke={"red"}
      strokeLinecap='round'
      {...props}
    />
  );
};

const MenuButton = (props: any) => {
  const { onClick, isOpen }: any = props;

  return (
    <IconButton onClick={onClick} role='button' aria-label='Hamburger button'>
      <motion.svg
        animate={isOpen ? "open" : "closed"}
        initial={false}
        width='23'
        height='23'
        style={{ margin: "4px 0 0 2px" }}
        viewBox='0 0 23 23'
      >
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d='M 2 9.423 L 20 9.423'
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </motion.svg>
    </IconButton>
  );
};

interface HeaderProps {
  title?: string;
  link?: string;
  submenu?: [];
}

export default function HeaderMobile({ sorryData }: any) {
  const currentRoute = usePathname();

  // const { query } = useKBar();

  const [activeItem, setActiveItem]: any = useState(null);
  var [isOpen, toggleDropdown]: any = useCycle(false, true);

  function closeDropdown() {
    isOpen = "close";
  }

  const item: HeaderProps = HeaderMenu[activeItem];

  const Navigation = () => {
    return (
      <ul className='pt-[20px]'>
        {HeaderMenu.map((item: HeaderProps, index: any) =>
          item.submenu ? (
            <li
              className='mt-[10px] text-secondary'
              // role='menuitem'
              key={index}
              color={currentRoute === item.link ? "red" : "pink"}
              onClick={() => setActiveItem(index)}
            >
              {item.title}
              <IconArrowRight width='16' color={"blue"} />
            </li>
          ) : (
            <li
              className='mt-[10px] text-secondary'
              role='menuitem'
              key={index}
              color={currentRoute === item.link ? "red" : "pink"}
            >
              <Link
                href={item.link ? item.link : ""}
                onClick={toggleDropdown}
                role='menuitem'
              >
                {item.title}
              </Link>
            </li>
          )
        )}
      </ul>
    );
  };

  const Submenu = ({ submenuItems }: any) => {
    return (
      <ul>
        <div>
          <IconButton onClick={() => setActiveItem(null)}>
            <IconArrowLeft width='14' color={"pink"} />
          </IconButton>
          <p>{item.title}</p>
        </div>

        {submenuItems.map((subItem: any, index: any) => (
          <SubItem
            key={index}
            icon={subItem.icon}
            title={subItem.title}
            text='Latest posts'
            onClick={() => setActiveItem(index)}
          />
        ))}
      </ul>
    );
  };

  return (
    <div className='flex gap-[10px] content-between items-center md:hidden'>
      <IconButton aria-label='Serach button'>
        <IconSearch width='23px' color={"red"} />
      </IconButton>

      <SorryAppNotices sorryData={sorryData} />

      <MenuButton onClick={toggleDropdown} isOpen={isOpen} />

      <motion.nav
        className='absolute w-[auto] top-[80px] right-[10px] p-[20px] bg-white rounded-lg border border-slate-200'
        role='navigation'
        initial='close'
        animate={isOpen ? "open" : "close"}
        variants={slideVerticalAnimation}
      >
        {activeItem === null ? (
          <AnimatePresence>
            <motion.div
              className='divide-y'
              initial={{
                opacity: 0,
                x: -20,
              }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { staggerChildren: 0.5 },
              }}
              exit={{
                opacity: 0,
                x: -20,
                transition: { staggerChildren: 0.5 },
              }}
            >
              <div className='flex gap-[10px] pb-[20px]'>
                <Link href='/#server-locations' role='menuitem'>
                  <Button
                    variant='contained'
                    color='secondary'
                    role='button'
                    aria-label='Get Started button'
                    text='Get Started'
                  />
                </Link>
                <Link
                  href='https://www.edis.guide/l/en'
                  target='_blank'
                  rel='noreferrer'
                  role='menuitem'
                >
                  <Button
                    variant='outlined'
                    color='secondary'
                    role='button'
                    aria-label='Docs button'
                    text='Docs'
                    endIcon={
                      <IconExternalLink width='12px' color='secondary' />
                    }
                  />
                </Link>
                <Link
                  href='https://manage.edis.at/whmcs/clientarea.php'
                  target='_blank'
                  rel='noreferrer'
                  role='menuitem'
                >
                  <Button
                    variant='outlined'
                    color='secondary'
                    role='button'
                    aria-label='Login button'
                    text='Login'
                    endIcon={
                      <IconExternalLink width='12px' color='secondary' />
                    }
                  />
                </Link>
              </div>

              <Navigation />
            </motion.div>
          </AnimatePresence>
        ) : (
          item?.submenu && (
            <motion.div
              initial={{
                opacity: 0,
                x: 20,
              }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { staggerChildren: 0.5 },
              }}
              exit={{
                opacity: 0,
                x: 20,
                transition: { staggerChildren: 0.5 },
              }}
            >
              <Submenu submenuItems={item?.submenu} />
            </motion.div>
          )
        )}
      </motion.nav>
    </div>
  );
}
