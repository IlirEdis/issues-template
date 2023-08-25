import { IconProps } from "../IconTypes";

function Dogecoin(props: IconProps) {
  const { width, height } = props;
  return (
    <svg
      width={width}
      height={height}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 2000 2000'
      role='img'
    >
      <title>Dogecoin Logo</title>
      <g fill='#c2a633'>
        <path d='M1024 659H881.12v281.69h224.79v117.94H881.12v281.67H1031c38.51 0 316.16 4.35 315.73-327.72S1077.44 659 1024 659z' />
        <path d='M1000 0C447.71 0 0 447.71 0 1000s447.71 1000 1000 1000 1000-447.71 1000-1000S1552.29 0 1000 0zm39.29 1540.1H677.14v-481.46H549.48V940.7h127.65V459.21h310.82c73.53 0 560.56-15.27 560.56 549.48 0 574.09-509.21 531.41-509.21 531.41z' />
      </g>
    </svg>
  );
}

export default Dogecoin;
