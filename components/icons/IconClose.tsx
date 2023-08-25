import { IconProps } from "./IconTypes";

function IconClose(props: IconProps) {
  return (
    <svg
      width={props.width}
      height={props.height}
      fill='none'
      stroke={props.color}
      viewBox='0 0 32 32'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M3 29L29 3M3 3L29 29'
        strokeWidth='2.67'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export default IconClose;
