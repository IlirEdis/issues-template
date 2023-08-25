import { IconProps } from "./IconTypes";

export default function IconSwipe(props: IconProps) {
  const { width, height, color } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 32 32'
      fill='none'
      stroke={color}
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g>
        <path d='M22.5,27.1c0,0-13.5-3.1-9.8-10.9' />
        <path
          d='M15.4,19.7L7.9,9.4C7.6,9,7.5,8.7,7.6,8.3c0.1-0.8,0.5-1.8,2-1.5c0.4,0.1,0.7,0.3,0.9,0.6l5.5,7.5l-1.6-2.2
		c-0.4-0.6-0.4-1.4,0-2c0.3-0.4,0.8-0.8,1.5-0.6c0.4,0.1,0.7,0.3,1,0.6l1.7,2.3l-1-1.4c-0.4-0.6-0.4-1.4,0-1.9
		C18,9.3,18.5,9,19.2,9.1c0.4,0,0.8,0.3,1.1,0.6l1.8,2.3l-1-1.3c-0.5-0.6-0.5-1.4,0-2c0.3-0.3,0.6-0.6,1.1-0.7
		c0.6-0.1,1.1,0.2,1.5,0.6l2.6,3.3c0,0,0.1,0.1,0.1,0.1c0.2,0.4,1.3,2.3,2.3,5.5c0.7,2.5,1.5,3.6,1.5,3.6'
        />
        <g>
          <line x1='6.9' y1='3.5' x2='1.9' y2='3.6' />
          <line x1='4.5' y1='1.9' x2='2' y2='3.5' />
          <line x1='2' y1='3.6' x2='4.5' y2='5.3' />
        </g>
        <g>
          <line x1='11.4' y1='3.6' x2='16.5' y2='3.6' />
          <line x1='13.8' y1='5.3' x2='16.3' y2='3.6' />
          <line x1='16.3' y1='3.5' x2='13.8' y2='1.9' />
        </g>
      </g>
    </svg>
  );
}
