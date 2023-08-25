import { IconProps } from "./IconTypes";

export default function IconBell(props: IconProps) {
  const { width, height, color } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 32 32'
      fill='none'
      stroke={color}
      strokeWidth='2.67'
      strokeLinecap='round'
      strokeLinejoin='round'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M20.3333 23.2222H27.5556L25.5262 21.1929C24.9759 20.6425 24.6667 19.8961 24.6667 19.1178V14.5556C24.6667 10.782 22.255 7.57179 18.8889 6.38204V5.88889C18.8889 4.2934 17.5955 3 16 3C14.4045 3 13.1111 4.2934 13.1111 5.88889V6.38204C9.74501 7.57179 7.33335 10.782 7.33335 14.5556V19.1178C7.33335 19.8961 7.02416 20.6425 6.4738 21.1929L4.44446 23.2222H11.6667M20.3333 23.2222V24.6667C20.3333 27.0599 18.3932 29 16 29C13.6068 29 11.6667 27.0599 11.6667 24.6667V23.2222M20.3333 23.2222H11.6667' />
    </svg>
  );
}
