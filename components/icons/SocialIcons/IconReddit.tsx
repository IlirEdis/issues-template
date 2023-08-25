import { IconProps } from "../IconTypes";

export default function IconReddit(props: IconProps) {
  return (
    <svg
      width={props.width}
      height={props.height}
      fill={props.color}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      role='img'
    >
      <title>Reddit Logo</title>
      <rect width={props.width} height={props.height} rx='5' fill='white' />

      <path
        d='M17.9789 12.1921C17.9789 11.4658 17.3895 10.8763 16.6632 10.8763C16.3053 10.8763 15.9895 11.0132 15.7579 11.2447C14.8632 10.6026 13.6211 10.1816 12.2526 10.1289L12.8526 7.31842L14.8 7.72895C14.8211 8.22368 15.2316 8.62368 15.7368 8.62368C16.2526 8.62368 16.6737 8.20263 16.6737 7.68684C16.6737 7.17105 16.2526 6.75 15.7368 6.75C15.3684 6.75 15.0526 6.96053 14.9053 7.27632L12.7263 6.81316C12.6632 6.80263 12.6 6.81316 12.5474 6.84474C12.4947 6.87632 12.4632 6.92895 12.4421 6.99211L11.7789 10.1289C10.3789 10.1711 9.12632 10.5816 8.22105 11.2447C7.98947 11.0237 7.66316 10.8763 7.31579 10.8763C6.58947 10.8763 6 11.4658 6 12.1921C6 12.7289 6.31579 13.1816 6.77895 13.3921C6.75789 13.5184 6.74737 13.6553 6.74737 13.7921C6.74737 15.8132 9.09474 17.4447 12 17.4447C14.9053 17.4447 17.2526 15.8132 17.2526 13.7921C17.2526 13.6553 17.2421 13.5289 17.2211 13.4026C17.6526 13.1921 17.9789 12.7289 17.9789 12.1921ZM8.97895 13.1289C8.97895 12.6132 9.4 12.1921 9.91579 12.1921C10.4316 12.1921 10.8526 12.6132 10.8526 13.1289C10.8526 13.6447 10.4316 14.0658 9.91579 14.0658C9.4 14.0658 8.97895 13.6447 8.97895 13.1289ZM14.2105 15.6026C13.5684 16.2447 12.3474 16.2868 11.9895 16.2868C11.6316 16.2868 10.4 16.2342 9.76842 15.6026C9.67368 15.5079 9.67368 15.35 9.76842 15.2553C9.86316 15.1605 10.0211 15.1605 10.1158 15.2553C10.5158 15.6553 11.3789 15.8026 12 15.8026C12.6211 15.8026 13.4737 15.6553 13.8842 15.2553C13.9789 15.1605 14.1368 15.1605 14.2316 15.2553C14.3053 15.3605 14.3053 15.5079 14.2105 15.6026ZM14.0421 14.0658C13.5263 14.0658 13.1053 13.6447 13.1053 13.1289C13.1053 12.6132 13.5263 12.1921 14.0421 12.1921C14.5579 12.1921 14.9789 12.6132 14.9789 13.1289C14.9789 13.6447 14.5579 14.0658 14.0421 14.0658Z'
        fill='#9CA3AF'
      />
    </svg>
  );
}
