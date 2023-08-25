import { IconProps } from "../IconTypes";

export default function Windows2(props: IconProps) {
  const { width, height, color } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill={color}
      viewBox='0 0 88 88'
      role='img'
    >
      <title>Windows Server Logo</title>
      <path d='M0 12.402l35.687-4.86.016 34.423-35.67.203zm35.67 33.529l.028 34.453L.028 75.48.026 45.7zm4.326-39.025L87.314 0v41.527l-47.318.376zm47.329 39.349l-.011 41.34-47.318-6.678-.066-34.739z' />
    </svg>
  );
}
