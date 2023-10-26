interface HamburgetButtonProps {
  isOpen: boolean;
}

const HamburgerButton = (props: HamburgetButtonProps) => {
  const { isOpen } = props;
  return (
    <div className='flex flex-col items-center justify-center gap-1 sm:gap-2'>
      <span
        className={`bg-white block transition-all duration-300 ease-out 
  h-0.5 w-8 rounded-sm sm:w-12 ${
    isOpen ? 'rotate-45 translate-y-2 sm:translate-y-3.' : '-translate-y-1'
  }`}></span>
      <span
        className={`bg-white block transition-all duration-300 ease-out 
  h-0.5 w-8 rounded-sm my-0.5 sm:w-12 ${
    isOpen ? 'opacity-0' : 'opacity-100'
  }`}></span>
      <span
        className={`bg-white block transition-all duration-300 ease-out 
  h-0.5 w-8 rounded-sm sm:w-12 ${
    isOpen ? '-rotate-45 -translate-y-2 sm:-translate-y-3.5' : 'translate-y-1'
  }`}></span>
    </div>
  );
};

export default HamburgerButton;
