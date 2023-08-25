import { IconProps } from "./IconTypes";

export default function IconMail(props: IconProps) {
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
      <title>Mail Icon</title>
      <path d='M3 10.2222L14.3975 17.8206C15.3679 18.4675 16.6321 18.4675 17.6025 17.8206L29 10.2222M5.88889 26.1111H26.1111C27.7066 26.1111 29 24.8177 29 23.2222V8.7778C29 7.18232 27.7066 5.88892 26.1111 5.88892H5.88889C4.2934 5.88892 3 7.18232 3 8.7778V23.2222C3 24.8177 4.2934 26.1111 5.88889 26.1111Z' />
    </svg>
  );
}
