interface ISeparator {
  text: string;
}

export default function Separator({ text }: ISeparator) {
  return (
    // <div className='absolute flex flex-row md:flex-col justify-between items-center h-[auto] md:h-[100%] w-[100%] md:w-[auto] top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] gap-4 '>
    <div className='absolute flex flex-row md:flex-col justify-between items-center h-[auto] md:h-[100%] w-[100%] md:w-[auto] bottom-[0] md:-right-[15px] gap-4 '>
      <div className='w-[50%] h-[1px] md:w-[1px] md:h-[50%] bg-gradient-to-l md:bg-gradient-to-t from-slate-300'></div>
      <div className='text-3xl text-center font-semibold text-slate-300'>
        {text}
      </div>
      <div className='w-[50%] h-[1px] md:w-[1px] md:h-[50%] bg-gradient-to-r md:bg-gradient-to-b from-slate-300'></div>
    </div>
  );
}
