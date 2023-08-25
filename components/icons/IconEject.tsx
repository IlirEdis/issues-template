import { IconProps } from "./IconTypes";

export default function IconEject(props: IconProps) {
  const { width, height, color } = props;
  return (
    <svg
      fill={color}
      width={width}
      height={height}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 448 512'
    >
      <path d='M48.01 319.1h351.1c41.62 0 63.49-49.63 35.37-80.38l-175.1-192.1c-19-20.62-51.75-20.62-70.75 0L12.64 239.6C-15.48 270.2 6.393 319.1 48.01 319.1z' />
      <path
        style={{ opacity: 0.4 }}
        d='M447.1 432c0 26.39-21.6 47.99-47.99 47.99H48.01c-26.39 0-47.99-21.6-47.99-47.99c0-26.39 21.6-47.98 47.99-47.98h351.1C426.4 384 447.1 405.6 447.1 432z'
      />
    </svg>
  );
}
