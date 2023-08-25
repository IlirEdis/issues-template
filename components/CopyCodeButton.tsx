import React, { useState } from "react";
// import { Button } from "@mui/material";

export default function CopyCodeButton({ codeToCopy }: any) {
  const [copiedCode, setCopiedCode] = useState("Copy code");

  const handleCopyCode = (textToCopy: any) => {
    navigator.clipboard.writeText(textToCopy);

    setCopiedCode("Copied!");

    setTimeout(() => {
      setCopiedCode("Copy code");
    }, 2000);
  };
  return (
    <button
      onClick={() => handleCopyCode(codeToCopy)}
      className='text-violet11 shadow-blackA7 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none'
    >
      {copiedCode}
    </button>
    // <Button
    //   onClick={() => handleCopyCode(codeToCopy)}
    //   variant='contained'
    //   size='small'
    //   color={`${copiedCode === "Copied!" ? "success" : "secondary"}`}
    // >
    //   {copiedCode}
    // </Button>
  );
}
