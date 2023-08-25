import { IconProps } from "./IconTypes";

export default function IconFilters(props: IconProps) {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox='0 0 32 32'
      fill='none'
      stroke={props.color}
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M16 6.25V3M16 6.25C14.2051 6.25 12.75 7.70507 12.75 9.5C12.75 11.2949 14.2051 12.75 16 12.75M16 6.25C17.7949 6.25 19.25 7.70507 19.25 9.5C19.25 11.2949 17.7949 12.75 16 12.75M6.25 25.75C8.04493 25.75 9.5 24.2949 9.5 22.5C9.5 20.7051 8.04493 19.25 6.25 19.25M6.25 25.75C4.45507 25.75 3 24.2949 3 22.5C3 20.7051 4.45507 19.25 6.25 19.25M6.25 25.75V29M6.25 19.25V3M16 12.75V29M25.75 25.75C27.5449 25.75 29 24.2949 29 22.5C29 20.7051 27.5449 19.25 25.75 19.25M25.75 25.75C23.9551 25.75 22.5 24.2949 22.5 22.5C22.5 20.7051 23.9551 19.25 25.75 19.25M25.75 25.75V29M25.75 19.25V3' />
    </svg>
  );
}
