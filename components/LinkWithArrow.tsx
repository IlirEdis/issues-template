// import { styled } from "@mui/material";
import Link from "next/link";
import React from "react";
import IconArrowRight from "./icons/IconArrowRight";

interface LinkWithArrowTypes {
  href: string;
  text?: string | boolean | React.ReactNode;
  color?: string;
}

export default function LinkWithArrow({
  href,
  text,
  color,
}: LinkWithArrowTypes) {
  return (
    <Link
      href={href}
      className='group relative flex items-center w-[fit-content] '
    >
      {text}{" "}
      <IconArrowRight
        color={color}
        width='14px'
        height='14px'
        className={`absolute -right-[25px] group-hover:-right-[30px] group-hover:stroke-primary transition-[right] ease-in-out ${color}`}
      />
    </Link>
  );
}
