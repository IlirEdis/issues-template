import { IconProps } from "./IconTypes";

export default function IconMegaphone(props: IconProps) {
  const { width, height, color }: any = props;
  const colorVariants: any = {
    primary: "stroke-primary",
    secondary: "stroke-secondary",
  };
  return (
    <svg
      className={colorVariants[color]}
      width={width}
      height={height}
      viewBox='0 0 32 32'
      fill='none'
      // stroke={color}
      strokeWidth='2.67'
      strokeLinecap='round'
      strokeLinejoin='round'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M14.5556 7.16315V26.458C14.5556 27.8619 13.4175 29 12.0136 29C10.9393 29 9.98103 28.3247 9.61972 27.313L6.51935 18.4308M24.6667 17.4444C27.0599 17.4444 29 15.5043 29 13.1111C29 10.7179 27.0599 8.77778 24.6667 8.77778M6.51935 18.4308C4.45065 17.5515 3 15.5007 3 13.1111C3 9.92013 5.58679 7.33333 8.77777 7.33333H11.4241C17.3473 7.33333 22.4377 5.55075 24.6667 3L24.6667 23.2222C22.4377 20.6715 17.3473 18.8889 11.4241 18.8889L8.77774 18.8889C7.97637 18.8889 7.21311 18.7257 6.51935 18.4308Z' />
    </svg>
  );
}
