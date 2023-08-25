import IconMail from "../components/icons/IconMail";
import IconSupport from "../components/icons/IconSupport";
import IconTeam from "../components/icons/IconTeam";
import AliPay from "../components/icons/PaymentLogos/AliPay";
import AmericanExpress from "../components/icons/PaymentLogos/AmericanExpress";
import ApplePay from "../components/icons/PaymentLogos/ApplePay";
import Bitcoin from "../components/icons/PaymentLogos/Bitcoin";
import Dai from "../components/icons/PaymentLogos/Dai";
import DinersClub from "../components/icons/PaymentLogos/DinersClub";
import Discover from "../components/icons/PaymentLogos/Discover";
import Dogecoin from "../components/icons/PaymentLogos/Dogecoin";
import Etherum from "../components/icons/PaymentLogos/Etherum";
import GooglePay from "../components/icons/PaymentLogos/GooglePay";
import Jcb from "../components/icons/PaymentLogos/Jcb";
import Litecoin from "../components/icons/PaymentLogos/Litecoin";
import MasterCard from "../components/icons/PaymentLogos/MasterCard";
import Paypal from "../components/icons/PaymentLogos/Paypal";
import UnionPay from "../components/icons/PaymentLogos/UnionPay";
import Visa from "../components/icons/PaymentLogos/Visa";

export const HeaderMenu = [
  {
    title: "VPS",
    link: "/",
  },
  {
    title: "Dedicated",
    link: "/dedicated",
  },

  {
    title: "About",
    link: "/about",
  },
  {
    title: "Blog",
    link: "/blog",
  },
  {
    title: "Contact",
    link: "/contact",
  },
  // {
  //   title: "VPS Server",
  //   link: "/vps-server?continent=Europe",
  //   // submenu: [
  //   //   {
  //   //     title: "Europe",
  //   //     link: "/vps-server?continent=Europe",
  //   //   },
  //   //   {
  //   //     title: "Asia",
  //   //     link: "/vps-server?continent=Asia",
  //   //   },
  //   //   {
  //   //     title: "Americas",
  //   //     link: "/vps-server?continent=Americas",
  //   //   },
  //   //   {
  //   //     title: "Austraia",
  //   //     link: "/vps-server?continent=Australia",
  //   //   },
  //   // ],
  // },
];

export const FooterMenu = {
  contact: [
    {
      link: "/contact",
      text: "Contact Team",
      icon: <IconTeam color='#83828E' width='24' height='24' />,
    },
    {
      link: "mailto:support@edisglobal.com",
      text: "support@edisglobal.com",
      icon: <IconMail color='#83828E' width='24' height='24' />,
    },
    {
      link: "tel:+4319094111",
      text: "+43 1 909 4111",
      icon: <IconSupport color='#83828E' width='24' height='24' />,
    },
  ],

  important: [
    {
      link: "/blog",
      text: "Blog",
    },
    {
      link: "https://www.edis.guide/l/en",
      text: "Knowledgebase",
    },
    {
      link: "https://latency.edis.global/",
      text: "Latency Test",
    },
    {
      link: "/blog/looking-glass",
      text: "Looking Glass",
    },
    {
      link: "https://status.edis.global/",
      text: "Statuspage",
    },
  ],

  payments: [
    {
      name: "Visa",
      logo: <Visa width='70px' />,
    },
    {
      name: "MasterCard",
      logo: <MasterCard width='40px' />,
    },
    {
      name: "PayPal",
      logo: <Paypal width='80px' />,
    },
    {
      name: "AmericanExpress",
      logo: <AmericanExpress width='50px' />,
    },
    {
      name: "DinersClub",
      logo: <DinersClub width='90px' />,
    },
    {
      name: "Discover",
      logo: <Discover width='50px' />,
    },
    {
      name: "UnionPay",
      logo: <UnionPay width='50px' />,
    },
    {
      name: "Jcb",
      logo: <Jcb width='46px' />,
    },
    {
      name: "Bitcoin",
      logo: <Bitcoin width='90px' />,
    },
    {
      name: "Dai",
      logo: <Dai width='30px' />,
    },
    {
      name: "Dogecoin",
      logo: <Dogecoin width='30px' />,
    },
    {
      name: "Etherum",
      logo: <Etherum width='20px' />,
    },
    {
      name: "Litecoin",
      logo: <Litecoin width='30px' />,
    },
    {
      name: "ApplePay",
      logo: <ApplePay width='60px' />,
    },
    {
      name: "GooglePay",
      logo: <GooglePay width='116px' />,
    },
    {
      name: "AliPay",
      logo: <AliPay width='90px' />,
    },
  ],
};
