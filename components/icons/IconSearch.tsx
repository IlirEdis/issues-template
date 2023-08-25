import { IconProps } from "./IconTypes";

export default function IconSearch(props: IconProps) {
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
        d='M29 29L20.3333 20.3333M23.2222 13.1111C23.2222 18.6953 18.6953 23.2222 13.1111 23.2222C7.5269 23.2222 3 18.6953 3 13.1111C3 7.5269 7.5269 3 13.1111 3C18.6953 3 23.2222 7.5269 23.2222 13.1111Z'
        strokeWidth='2.67'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
