import { IconProps } from "./IconTypes";

export default function IconDot(props: IconProps) {
  const { width, height, color } = props;
  return (
    <svg
      fill={color}
      width={width}
      height={height}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 53.1 53.1'
    >
      <circle
        style={{
          opacity: 0.4,
        }}
        cx='26.5'
        cy='26.5'
        r='14'
      />
      <circle
        style={{
          fill: "none",
          stroke: `${color}`,
          strokeWidth: 3,
          strokeMiterlimit: 10,
          // opacity: 0.4,
        }}
        cx='26.5'
        cy='26.5'
        r='25'
      />
    </svg>
  );
}
