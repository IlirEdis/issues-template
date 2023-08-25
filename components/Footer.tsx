"use client";

import Link from "next/link";
import LinkWithArrow from "./LinkWithArrow";
import { FooterMenu } from "../data/Menu";

import TrustpilotWidget from "./TrustpilotWidget";
import EdbbLogoSingleColor from "./Edbb_Logo_Single_Color";

export default function Footer() {
  return (
    <footer className='bg-background'>
      <div className='flex flex-wrap justify-between p-[32px_30px] md:p-[32px_0px] gap-[30px] max-w-[1200px] m-[0_auto]'>
        <div>
          <div className='w-[150px] h-[50px]'>
            {/* <Image src='/Edis_logo_oneColor.svg' alt='EDIS Global Logo' fill /> */}
            <EdbbLogoSingleColor width='180px' color='gray' />
          </div>
          <div className='pt-[20px] max-w-[300px]'>
            <p className='text-slate-600 text-sm'>
              EDIS prioritizes precise GEO localization of its services. All
              services are hosted exactly at the indicated server location and
              are connected to the internet through several international
              upstream providers and local Internet Exchanges.
            </p>
          </div>
        </div>
        <div>
          <p className='font-semibold text-base text-slate-400'>
            VPS Hosting & Dedicated Server Support
          </p>
          <div className='h-[20px]' />

          <ul>
            {FooterMenu.contact.map((item, i) => {
              return (
                <li
                  key={item.text + i}
                  className='group pb-[10px] text-slate-600 list-none'
                >
                  <div className='flex row align-center gap-[20px] group-hover:text-primary transition-[color] ease-in-out'>
                    {item.icon}
                    <Link href={item.link}>{item.text}</Link>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <p className='font-semibold text-base text-slate-400'>
            Important links
          </p>
          <div className='h-[20px]' />
          <ul>
            {FooterMenu?.important.map((item, i) => {
              return (
                <li
                  key={item.text + i}
                  className='pb-[10px] text-slate-600 hover:text-primary list-none'
                >
                  <LinkWithArrow
                    href={item.link}
                    color='stroke-slate-600'
                    text={item.text}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className='bg-background'>
        {/* <PaymentLogosContainer direction='row' spacing={3} alignItems='center'> */}
        <div className='flex flex-wrap items-center justify-center gap-[20px] p-[30px]'>
          {FooterMenu.payments.map((payment, i) => {
            return <div key={payment.name + i}>{payment.logo}</div>;
          })}
        </div>
        <TrustpilotWidget templateId='56278e9abfbbba0bdcd568bc' theme='light' />
      </div>

      <div className='flex justify-between align-center row flex-wrap w-[100%] h-[auto] p-[14px_70px] text-xs text-slate-400'>
        <p>All prices shown in EUR excl. VAT</p>
        <div className='flex row flex-wrap justify-center gap-[20px]'>
          <Link className='hover:text-primary' href='/privacy'>
            Privacy Policy
          </Link>
          <Link className='hover:text-primary' href='/legal'>
            Legal Notice
          </Link>
          <Link className='hover:text-primary' href='/terms'>
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
