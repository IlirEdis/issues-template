import { IconProps } from "../IconTypes";

export default function IconTwitter(props: IconProps) {
  return (
    <svg
      width={props.width}
      height={props.height}
      fill={props.color}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      role='img'
    >
      <title>Twitter Logo</title>
      <rect width={props.width} height={props.height} rx='5' fill='white' />
      <path
        d='M18 8.25C17.55 8.475 17.1 8.55 16.575 8.625C17.1 8.325 17.475 7.875 17.625 7.275C17.175 7.575 16.65 7.725 16.05 7.875C15.6 7.425 14.925 7.125 14.25 7.125C12.675 7.125 11.475 8.625 11.85 10.125C9.825 10.05 8.025 9.075 6.75 7.575C6.075 8.7 6.45 10.125 7.5 10.875C7.125 10.875 6.75 10.725 6.375 10.575C6.375 11.7 7.2 12.75 8.325 13.05C7.95 13.125 7.575 13.2 7.2 13.125C7.5 14.1 8.4 14.85 9.525 14.85C8.625 15.525 7.275 15.9 6 15.75C7.125 16.425 8.4 16.875 9.75 16.875C14.325 16.875 16.875 13.05 16.725 9.525C17.25 9.225 17.7 8.775 18 8.25Z'
        fill='#9CA3AF'
      />
    </svg>
  );
}
