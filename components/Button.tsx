"use client";

export default function Button(props: ButtonProps) {
  const { text, variant, color, startIcon, endIcon, onClick } = props;

  const ColorVariants: any = {
    primary: "bg-primary",
    secondary: "bg-secondary",
  };

  const textVariants: any = {
    primary: "text-primary",
    secondary: "text-secondary",
  };

  const borderVariants: any = {
    primary: "border-primary",
    secondary: "border-secondary",
  };
  const hoverVariants: any = {
    primary: "hover:bg-primary/[.05]",
    secondary: "hover:bg-secondary/[.05]",
  };

  const Variants = {
    contained: `${ColorVariants[color]} border-transparent border-solid border-[1px] text-white`,
    outlined: `${textVariants[color]} ${borderVariants[color]} ${hoverVariants[color]} bg-transparent border-solid border-[1px]`,
    text: `${textVariants[color]} bg-transparent border-transparent p-0`,
  };
  return (
    <div
      className={`${Variants[variant]} py-[5px] px-[10px] rounded flex items-center justify-between gap-[10px] text-[14px]`}
      onClick={onClick}
    >
      {startIcon ? <div>{startIcon}</div> : null}
      {text}
      {endIcon ? <div>{endIcon}</div> : null}
    </div>
  );
}
