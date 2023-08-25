import { IconProps } from "../IconTypes";

export default function IconFacebook(props: IconProps) {
  return (
    <svg
      width={props.width}
      height={props.height}
      fill={props.color}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      role='img'
    >
      <title>Facebook Logo</title>
      <rect width={props.width} height={props.height} rx='5' fill='white' />
      <path
        d='M18 12C18 8.7 15.3 6 12 6C8.7 6 6 8.7 6 12C6 15 8.175 17.475 11.025 17.925V13.725H9.525V12H11.025V10.65C11.025 9.15 11.925 8.325 13.275 8.325C13.95 8.325 14.625 8.475 14.625 8.475V9.975H13.875C13.125 9.975 12.9 10.425 12.9 10.875V12H14.55L14.25 13.725H12.825V18C15.825 17.55 18 15 18 12Z'
        fill='#9CA3AF'
      />
    </svg>
  );
}
