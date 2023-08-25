import { IconProps } from "./IconTypes";

export default function IconArrowRight(props: IconProps) {
  return (
    <svg
      width={props.width}
      height={props.height}
      fill='none'
      // stroke={props.color}
      strokeWidth='2.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      viewBox='0 0 32 32'
      xmlns='http://www.w3.org/2000/svg'
      className={props.className}
    >
      <path d='M9.5 3L22.5 16L9.5 29' />
    </svg>
  );
}
