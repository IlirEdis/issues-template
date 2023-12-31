import { IconProps } from "./IconTypes";

export default function IconTeam(props: IconProps) {
  const { height, width, color } = props;
  return (
    <svg
      width={width ? width : "32px"}
      height={height ? height : "32px"}
      viewBox='0 0 32 32'
      fill='none'
      stroke={color ? color : "#000"}
      strokeWidth='1.7'
      strokeLinecap='round'
      strokeLinejoin='round'
      xmlns='http://www.w3.org/2000/svg'
      role='img'
    >
      <title>Team Icon</title>
      <path d='M22.5 26.4H29V23.8C29 21.6461 27.2539 19.9 25.1 19.9C23.8577 19.9 22.7511 20.4808 22.0369 21.3857M22.5 26.4H9.5M22.5 26.4V23.8C22.5 22.9469 22.3356 22.1321 22.0369 21.3857M9.5 26.4H3V23.8C3 21.6461 4.74609 19.9 6.9 19.9C8.14229 19.9 9.24892 20.4808 9.96312 21.3857M9.5 26.4V23.8C9.5 22.9469 9.66435 22.1321 9.96312 21.3857M9.96312 21.3857C10.9216 18.9913 13.2633 17.3 16 17.3C18.7367 17.3 21.0784 18.9913 22.0369 21.3857M19.9 9.49998C19.9 11.6539 18.1539 13.4 16 13.4C13.8461 13.4 12.1 11.6539 12.1 9.49998C12.1 7.34607 13.8461 5.59998 16 5.59998C18.1539 5.59998 19.9 7.34607 19.9 9.49998ZM27.7 13.4C27.7 14.8359 26.5359 16 25.1 16C23.6641 16 22.5 14.8359 22.5 13.4C22.5 11.964 23.6641 10.8 25.1 10.8C26.5359 10.8 27.7 11.964 27.7 13.4ZM9.5 13.4C9.5 14.8359 8.33594 16 6.9 16C5.46406 16 4.3 14.8359 4.3 13.4C4.3 11.964 5.46406 10.8 6.9 10.8C8.33594 10.8 9.5 11.964 9.5 13.4Z' />
    </svg>
  );
}
