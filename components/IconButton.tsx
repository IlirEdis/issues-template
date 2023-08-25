"use client";

import { forwardRef } from "react";

export default function IconButton(props: any) {
  const { children, onClick }: any = props;

  return (
    <button
      className={`p-[7px] w-[100%] h-auto rounded-full flex items-center justify-center hover:bg-gray-100`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
