import { IconProps } from "./IconTypes";

export default function IconArrowDown(props: IconProps) {
  return (
    <svg
      width={props.width}
      height={props.height}
      fill='none'
      stroke={props.color}
      strokeWidth='2.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      viewBox='0 0 32 32'
      xmlns='http://www.w3.org/2000/svg'
      className={props.className}
    >
      <path d='M29 9.5L16 22.5L3 9.5' />
    </svg>
  );
}
