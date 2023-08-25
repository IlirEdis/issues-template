import { IconProps } from "./IconTypes";

export default function IconArrowLeft(props: IconProps) {
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
      <path d='M22.5 29L9.5 16L22.5 3' />
    </svg>
  );
}
