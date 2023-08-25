import { IconProps } from "./IconTypes";

export default function IconInfo(props: IconProps) {
  const { color, width, height } = props;
  return (
    <svg
      width={width}
      height={height}
      stroke={color}
      fill='none'
      strokeWidth='2.67'
      strokeLinecap='round'
      strokeLinejoin='round'
      viewBox='0 0 32 32'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M17.4444 21.7778H16V16H14.5556M16 10.2222H16.0144M29 16C29 23.1797 23.1797 29 16 29C8.8203 29 3 23.1797 3 16C3 8.8203 8.8203 3 16 3C23.1797 3 29 8.8203 29 16Z' />
    </svg>
  );
}
