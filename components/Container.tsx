export default function Container({ children }: { children: React.ReactNode }) {
  return <div className='max-w-[1200px] m-[0_auto]'>{children}</div>;
}
