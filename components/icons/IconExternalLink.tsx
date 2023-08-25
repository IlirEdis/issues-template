import { IconProps } from "./IconTypes";

export default function IconExternalLink(props: IconProps) {
  const { width, height, color }: any = props;
  const colorVariants: any = {
    primary: "stroke-primary",
    secondary: "stroke-secondary",
  };
  return (
    <svg
      className={colorVariants[color]}
      width={width}
      height={height}
      viewBox='0 0 32 32'
      fill='none'
      // stroke={color}
      strokeWidth='2.67'
      strokeLinecap='round'
      strokeLinejoin='round'
      xmlns='http://www.w3.org/2000/svg'
      role='img'
    >
      <title>External Link Icon</title>
      <path d='M12.75 6.25H6.25C4.45507 6.25 3 7.70507 3 9.5V25.75C3 27.5449 4.45507 29 6.25 29H22.5C24.2949 29 25.75 27.5449 25.75 25.75V19.25M19.25 3H29M29 3V12.75M29 3L12.75 19.25' />
    </svg>
  );
}
