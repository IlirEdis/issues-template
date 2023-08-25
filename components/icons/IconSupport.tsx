import { IconProps } from "./IconTypes";

function IconSupport(props: IconProps) {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox='0 0 32 32'
      fill='none'
      stroke={props.color}
      strokeWidth='1.7'
      strokeLinecap='round'
      strokeLinejoin='round'
      xmlns='http://www.w3.org/2000/svg'
      role='img'
    >
      <title>Users Icon</title>
      <path d='M16 4.95603C17.0587 3.75653 18.6077 3 20.3333 3C23.5243 3 26.1111 5.5868 26.1111 8.77778C26.1111 11.9688 23.5243 14.5556 20.3333 14.5556C18.6077 14.5556 17.0587 13.799 16 12.5995M20.3333 29H3V27.5556C3 22.7691 6.8802 18.8889 11.6667 18.8889C16.4531 18.8889 20.3333 22.7691 20.3333 27.5556V29ZM20.3333 29H29V27.5556C29 22.7691 25.1198 18.8889 20.3333 18.8889C18.7548 18.8889 17.2748 19.3109 16 20.0483M17.4444 8.77778C17.4444 11.9688 14.8576 14.5556 11.6667 14.5556C8.47569 14.5556 5.88889 11.9688 5.88889 8.77778C5.88889 5.5868 8.47569 3 11.6667 3C14.8576 3 17.4444 5.5868 17.4444 8.77778Z' />
    </svg>
  );
}

export default IconSupport;
