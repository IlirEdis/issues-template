import { IconProps } from "./IconTypes";

export default function IconCopy(props: IconProps) {
  const { width, height, color } = props;
  return (
    <svg
      width={width}
      height={height}
      stroke={color}
      fill='none'
      strokeWidth='2.67'
      strokeLinecap='round'
      strokeLinejoin='round'
      viewBox='0 0 32 32'
      xmlns='http://www.w3.org/2000/svg'
      role='img'
    >
      <title>Copy File Icon</title>
      <path d='M10.2222 8.77778V20.3333C10.2222 21.9288 11.5156 23.2222 13.1111 23.2222H21.7778M10.2222 8.77778V5.88889C10.2222 4.2934 11.5156 3 13.1111 3H19.735C20.1181 3 20.4855 3.15218 20.7564 3.42307L27.1325 9.79915C27.4034 10.07 27.5556 10.4374 27.5556 10.8205V20.3333C27.5556 21.9288 26.2622 23.2222 24.6667 23.2222H21.7778M10.2222 8.77778H6.44446C5.33989 8.77778 4.44446 9.67321 4.44446 10.7778V26.1111C4.44446 27.7066 5.73786 29 7.33335 29H19.7778C20.8824 29 21.7778 28.1046 21.7778 27V23.2222' />
    </svg>
  );
}
